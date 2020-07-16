import React, {useState, useContext, useEffect} from 'react'
import {UserContext} from './../App'
import {useParams} from 'react-router-dom'
import Axios from 'axios'

import './css/content.css'

import house from '../../../images/house.jpg'
import search from '../../../icons/search.svg'

import {
    Link
} from 'react-router-dom'

const ContentProperties = () => {
    const [data, setData] = useState([])

    const {state, dispatch} = useContext(UserContext)
    const {userId} = useParams()

    console.log(userId)
    
    // useEffect(() => {
    //     fetch('/all-post', {
    //         headers: {
    //             "Authorization": "Bearer " + localStorage.getItem("jwt")
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             setData(result.posts)
    //         })
    // }, [])

    // ________________________________

    // const token = localStorage.getItem('jwt')
    // Axios.get('https://aoestate-server.herokuapp.com/all-post', {
    //     headers: {
    //         "Authorization": `Bearer ${token}`
    //     }
    // })
    // .then(res => console.log(res.data))
    // .then(result => {
    //     console.log(token)
    //     setData(result.posts)
    // }).catch(err => {
    //     console.log(err)
    // })
    
    useEffect(() => {
        fetch('https://aoestate-server.herokuapp.com/all-property', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                setData(result.properties)
            })
    }, [])

    // ________________________________

    return (
        <div className="properties-list-desktop">

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
                            <div className="properties-item-desktop">

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
                                        <p className="description">{item.propertyDescription}</p>
                                        <p className="location">{item.propertyLocation}</p>
                                        <p className="location">{item.price}</p>
                                        <button className="open-property">
                                            <Link 
                                                className="link" 
                                                to={"/properties-details-general/" + item._id}
                                            >
                                            VIEW PROPERTY
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
