import React, {useState, useContext, useEffect} from 'react'
import {UserContext} from './App'
import {Link, useParams} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

import axios from 'axios'

import house from '../../images/house.jpg'

import './css/properties-details.css'

import Navigation from './Navigation'
import Footer from './Footer'


const PropertiesDetailsGeneral = () => {
    const [data, setData] = useState([])

    const [popup, setPopup] = useState(false)

    const {state, dispatch} = useContext(UserContext)
    const {userId} = useParams()

    console.log(userId)

    const [generalPropertyDetails, setGeneralPropertyDetails] = useState([])
    const {generalPropertyId} = useParams()
    console.log(generalPropertyId)

    useEffect(() => {
        fetch(`https://aoestate-server-two.herokuapp.com/general-properties-details/${generalPropertyId}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setGeneralPropertyDetails(result)
            })
    }, [])




    

    // broker
    const [clientState, setClientState] = useState({
        category: '',
        name: '',
        email: '',
        phone: '',
        message: '',
        propertyLink: ''
    })
    

    const handleClientChange = (e) => {
          setClientState({ ...clientState, [e.target.name]: e.target.value })
    }

    const handleClient = (e) => {
          e.preventDefault()
          axios({
                method: "POST",
                url:"https://nodemailing.herokuapp.com/customer-care/client", 
                data: {
                    category: 'Interested in Property', 
                    name: clientState.name, 
                    email: clientState.email,
                    phone: clientState.phone,
                    message: `I am interested in ${generalPropertyDetails.property ? generalPropertyDetails.property.propertyName : "loading"}`,
                    property: `https://admin.aoestatechariots.com/general-properties-details/${generalPropertyId}`
                }
          }).then( () => {
                setClientState({ 
                    category: 'Interested in Property',
                    name: '',
                    email: '',
                    phone: '',
                    message: `I am interested in ${generalPropertyDetails.property ? generalPropertyDetails.property.propertyName : "loading"}`,
                    property: `https://admin.aoestatechariots.com/general-properties-details/${generalPropertyId}`
                })
              })
                .then(
                    alert("Message sent successfully")
                )
              .catch( err => {
                    console.log(err)
                })
                
    }

    return (
        <div className="how-we-work">
            <div className="tablet">
                <Navigation />

                <div className="properties-details-header">
                    <h1 className="text">
                        <div className="subhead">You Are Now Viewing</div>
                        <div className="head">{generalPropertyDetails.property ? generalPropertyDetails.property.propertyName : "loading"}</div>
                        {/* <div className="head">{generalPropertyDetails.property.propertyName}</div> */}
                    </h1>
                </div>

                <div className="properties-details-content">
                    <div className="image-container">
                        <Carousel>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${generalPropertyDetails.property ? generalPropertyDetails.property.photo : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${generalPropertyDetails.property ? generalPropertyDetails.property.photoTwo : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${generalPropertyDetails.property ? generalPropertyDetails.property.photoThree : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${generalPropertyDetails.property ? generalPropertyDetails.property.photoFour : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${generalPropertyDetails.property ? generalPropertyDetails.property.photoFive : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${generalPropertyDetails.property ? generalPropertyDetails.property.photoSix : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                        </Carousel>
                    
                    </div>
                    
                    <div className="text">
                        <h1>{generalPropertyDetails.property ? generalPropertyDetails.property.propertyName : "loading"}</h1>

                        <div>
                            <b>Type Of Document</b>
                            <p>{generalPropertyDetails.property ? generalPropertyDetails.property.typeOfDocument : "loading"}</p>
                        </div>

                        <div>
                            <b>Location of property</b>
                            <p>{generalPropertyDetails.property ? generalPropertyDetails.property.propertyLocation : "loading"}</p>
                        </div>

                        <div>
                            <b>Company</b>
                            <p>{generalPropertyDetails.property ? generalPropertyDetails.property.companyName : "loading"}</p>
                        </div>

                        <div>
                            <b>Price of property</b>
                            <p>{generalPropertyDetails.property ? generalPropertyDetails.property.price : "loading"}</p>
                        </div>

                        <div className="buttons">
                            <a
                                href={generalPropertyDetails.property ? generalPropertyDetails.property.brochure : "loading"} 
                                target="_blank" rel="noopener noreferrer"
                            >
                                <button className="brochure">DOWNLOAD BROCHURE</button>
                            </a>
                            <br /><br />
                            <a
                                href={generalPropertyDetails.property ? generalPropertyDetails.property.flyers : "loading"} 
                                target="_blank" rel="noopener noreferrer"
                            >
                                <button className="flyers">DOWNLOAD FLYERS</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="properties-details-content">
                    <iframe title="properties" id="video" width="420" height="315" src={`${generalPropertyDetails.property ? generalPropertyDetails.property.youTubeLink : "loading"}`} frameborder="0" allowfullscreen></iframe>

                    <div className="text">
                        <p>{generalPropertyDetails.property ? generalPropertyDetails.property.propertyDescription : "loading"}</p>

                        <button 
                            className="brochure"
                            onClick={() => setPopup(!popup)}
                            // onClick={() => {likePost(item._id)}}
                        >INTERESTED IN THIS PROPERTY</button>
                    </div>
                </div>

                <div className={popup ? "properties-details-interested-toggle properties-details-interested" : "properties-details-interested"}>
                    <div className="background" onClick={() => setPopup(!popup)}></div>
                    <div className="inner">
                        <div className="head">Indicate your interest in this property by filling and submitting the form below</div>

                        <form onSubmit={handleClient}>
                            <div className="tab">
                                <label>Full name</label>
                                <br />
                                <input 
                                    type="text" 
                                    name="name"
                                    value={clientState.name}
                                    onChange={handleClientChange}
                                />
                            </div>

                            <div className="tab">
                                <label>Phone number</label>
                                <br />
                                <input 
                                    type="phone" 
                                    name="phone"
                                    value={clientState.phone}
                                    onChange={handleClientChange}
                                />
                            </div>

                            <div className="tab">
                                <label>Email address</label>
                                <br />
                                <input 
                                    type="email" 
                                    name="email"
                                    value={clientState.email}
                                    onChange={handleClientChange}
                                />
                            </div>
                        
                            <div className="tab">
                            <input 
                                type="text"
                                name="message"
                                value={clientState.message}
                                hidden
                            />
                            </div>
                            
                            <div className="tab">
                            <input 
                                type="text"
                                name="property"
                                value={clientState.property}
                                hidden
                            />
                            </div>
                            

                            <input type="submit" className="submit" />
                        </form>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default PropertiesDetailsGeneral
