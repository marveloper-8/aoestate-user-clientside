import React, {useState, useContext, useEffect} from 'react'
import {UserContext} from './../App'
import {useParams} from 'react-router-dom'
import TextTruncate from 'react-text-truncate'

import './css/content.css'

import search from '../../../icons/search.svg'

import {
    Link,
    useHistory
} from 'react-router-dom'

const ContentProperties = () => {

    const [data, setData] = useState([])

    const {state, dispatch} = useContext(UserContext)
    const {userId} = useParams()

    console.log(userId)
    
    useEffect(() => {
        fetch('https://aoestate-server-two.herokuapp.com/all-post', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                setData(result.posts)
            })
    }, [])

    const makeComment = (text,postId)=>{
          fetch('https://aoestate-server-two.herokuapp.com/comment',{
              method:"put",
              headers:{
                  "Content-Type":"application/json",
                  "Authorization":"Bearer "+localStorage.getItem("jwt")
              },
              body:JSON.stringify({
                  postId,
                  text
              })
          }).then(res=>res.json())
          .then(result=>{
              console.log(result)
              const newData = data.map(item=>{
                if(item._id===result._id){
                    return result
                }else{
                    return item
                }
             })
            setData(newData)
          }).catch(err=>{
              console.log(err)
          })
    }

    return (
        <div className="properties-list-tablet">

            <div className="search">
                <div className="icon-container"><img src={search} className="icons" alt="account" /></div>
                <form className="search-container"><input
                    type="text"
                    placeholder="Search for subject, class, or keywords..." 
                    // onChange={this.searchHandler}
                    // value={this.state.searchList}
                /></form>
            </div>

            <div className="properties-list-container">
                {
                    data.map(item => {
                        return(
                            <div className="properties-item-tablet">

                                <div className="container" key={item._id}>
                                    <div
                                        style={{
                                            backgroundImage: `url(${item.photo})`,
                                            backgroundSize:`cover`,
                                            backgroundPosition:`center`
                                        }}
                                        className="image"
                                    ></div>
                    
                                    <div className="text">
                                        <h6>{item.propertyName}</h6>
                                        <TextTruncate
                                            line={3}
                                            element="span"
                                            truncateText="…"
                                            text={item.propertyDescription}
                                        />
                                        <p className="location">{item.propertyLocation}</p>
                                        <p className="location">{item.price}</p>
                                        <p>{item.comments.length} people interested</p>
                                        <button className="open-property">
                                            <Link 
                                                className="link" 
                                                to={"/properties-details/" + item._id}
                                            >
                                            VIEW PROJECT/PRODUCT
                                            </Link>     
                                        </button>
                                    </div>
                                </div>
                                
                            </div>

                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default ContentProperties
