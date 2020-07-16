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
        <div className="properties-list-mobile">

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
                            <div className="properties-item-mobile">

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
