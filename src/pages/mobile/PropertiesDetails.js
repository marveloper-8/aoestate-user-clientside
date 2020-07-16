import React, {useState, useContext, useEffect} from 'react'
import {UserContext} from './App'
import {Link, useParams} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'

import house from '../../images/house.jpg'

import './css/properties-details.css'

import Navigation from './Navigation'
import Footer from './Footer'

// import {useHistory} from 'react-router-dom'

const Estates = () => {
    // const history = useHistory()

    // const [comment, setComment] = useState({
    //     propertyLink: '',
    //     userLink: '',
    //     description: ''
    // })

    // const handleChange = e => {
    //     setComment({...comment, [e.target.name]: e.target.value})
    // }

    const [propertyLink, setPropertyLink] = useState("")
    const [userLink, setUserLink] = useState("")
    const [description, setDescription] = useState("")

    const [data, setData] = useState([])

    const [popup, setPopup] = useState(false)

    const {state, dispatch} = useContext(UserContext)
    const {userId} = useParams()

    console.log(userId)

    const [propertyDetails, setPropertyDetails] = useState([])
    const {propertyId} = useParams()
    console.log(propertyId)

    useEffect(() => {
        fetch(`https://aoestate-server.herokuapp.com/properties-details/${propertyId}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setPropertyDetails(result)
            })
    }, [])

    const likePost = id => {
        fetch('https://aoestate-server.herokuapp.com/like', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
        .then(result => {
            const newData = data.map(item => {
                if(item._id === result._id){
                    return result
                } else{
                    return item
                }
            })
            setData(newData)
        }).catch(err => {
            console.log(err)
        })
    }

    const unlikePost = id => {
        fetch('https://aoestate-server.herokuapp.com/unlike', {
            method: "pull",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
        .then(result => {
            const newData = data.map(item => {
                if(item._id === result._id){
                    return result
                } else{
                    return item
                }
            })
            setData(newData)
        }).catch(err => {
            console.log(err)
        })
    }

    const displayName = (text, postId) => {
        fetch('https://aoestate-server.herokuapp.com/comment', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId,
                text,
                // textOne,
                // textTwo
            })
        }).then(res => res.json())
        .then(result => {
            console.log(result)
            const newData = data.map(item => {
                if(item._id === result._id){
                    return result
                } else{
                    return item
                }
            })
            setData(newData)
        }).catch(err => {
            console.log(err)
        })










        // const displayName = (postId) => {
        //     fetch('/comments', {
        //         method: "put",
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Authorization": "Bearer " + localStorage.getItem("jwt")
        //         },
        //         body: JSON.stringify({
        //             postId,
        //             propertyLink,
        //             userLink,
        //             description
        //         })
        //     }).then(res => res.json())
        //     .then(result => {
        //         console.log(result)
        //         const newData = data.map(item => {
        //             if(item._id === result._id){
        //                 return result
        //             } else{
        //                 return item
        //             }
        //         })
        //         setData(newData)
        //     }).catch(err => {
        //         console.log(err)
        //     })









        
        // fetch("https://aoestate-server.herokuapp.com/create-comment", {
        //     method: "post",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": "Bearer " + localStorage.getItem("jwt")
        //     },
        //     body: JSON.stringify({
        //         propertyLink,
        //         userLink,
        //         description
        //     })
        // }).then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if(data.error){
        //             alert(data.error)
        //         }
        //         else{
        //             alert("Created post successfully")
        //             history.push('/estates')
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }

    
    

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
                    message: `I am interested in ${propertyDetails.post ? propertyDetails.post.propertyName : "loading"}`,
                    property: `https://admin.aoestatechariots.com/general-properties-details/${propertyId}`
                }
          }).then( () => {
                setClientState({ 
                    category: 'Interested in Property',
                    name: '',
                    email: '',
                    phone: '',
                    message: `I am interested in ${propertyDetails.post ? propertyDetails.post.propertyName : "loading"}`,
                    property: `https://admin.aoestatechariots.com/general-properties-details/${propertyId}`
                })
              })
                .then(
                    alert("Message sent successfully")
                )
              .catch( err => {
                    console.log(err)
                })
                
    }











    

    const interestedButton = () => {
        if(state){
            // return [
            //     <div>
            //         {propertyDetails.item.post.comments.includes(state._id)
            //         ?
            //         <input className="submit" type="button" value="NOT INTERESTED" />
            //         :
            //         <input className="submit" type="submit" value="INTERESTED" />
            //         }
            //     </div>
                
            // ]
            return [
                <div>
                    {/* {propertyDetails.post.propertyName} */}
                    <button onClick={() => displayName()} className="submit" type="submit">INTERESTED</button>
                </div>
            ]
        } else{
            return <Link to='/brokers-signin'><button className="submit">SIGN IN</button></Link>
        }
    }

    const interestedText = () => {
        if(state){
            return <div>Click the button to indicate interest as broker</div>
        } else{
            return <div>Sign in as broker to indicate interest</div>
        }
    }


    return (
        <div className="how-we-work">
            <div className="mobile">
                <Navigation />

                <div className="properties-details-header">
                    <h1 className="text">
                        <div className="subhead">You Are Now Viewing</div>
                        <div className="head">{propertyDetails.post ? propertyDetails.post.propertyName : "loading"}</div>
                        {/* <div className="head">{propertyDetails.post.propertyName}</div> */}
                    </h1>
                </div>

                <div className="properties-details-content">
                    <div className="image-container">
                        <Carousel>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${propertyDetails.post ? propertyDetails.post.photo : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${propertyDetails.post ? propertyDetails.post.photoTwo : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${propertyDetails.post ? propertyDetails.post.photoThree : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${propertyDetails.post ? propertyDetails.post.photoFour : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${propertyDetails.post ? propertyDetails.post.photoFive : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${propertyDetails.post ? propertyDetails.post.photoSix : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                        </Carousel>
                    
                    </div>
                    
                    <div className="text">
                        <h1>{propertyDetails.post ? propertyDetails.post.propertyName : "loading"}</h1>

                        <div>
                            <b>Type Of Document</b>
                            <p>{propertyDetails.post ? propertyDetails.post.typeOfDocument : "loading"}</p>
                        </div>

                        <div>
                            <b>Location of property</b>
                            <p>{propertyDetails.post ? propertyDetails.post.propertyLocation : "loading"}</p>
                        </div>

                        <div>
                            <b>Company</b>
                            <p>{propertyDetails.post ? propertyDetails.post.companyName : "loading"}</p>
                        </div>

                        <div>
                            <b>Price of property</b>
                            <p>{propertyDetails.post ? propertyDetails.post.price : "loading"}</p>
                        </div>

                        <div className="buttons">
                            <a
                                href={propertyDetails.post ? propertyDetails.post.brochure : "loading"} 
                                target="_blank" rel="noopener noreferrer"
                            >
                                <button className="brochure">DOWNLOAD BROCHURE</button>
                            </a>
                            <br /><br />
                            <a
                                href={propertyDetails.post ? propertyDetails.post.flyers : "loading"} 
                                target="_blank" rel="noopener noreferrer"
                            >
                                <button className="flyers">DOWNLOAD FLYERS</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="properties-details-content">
                    <iframe title="properties" id="video" width="420" height="315" src={`${propertyDetails.post ? propertyDetails.post.youTubeLink : "loading"}`} frameborder="0" allowfullscreen></iframe>

                    <div className="text">
                        <p>{propertyDetails.post ? propertyDetails.post.propertyDescription : "loading"}</p>

                        <button 
                            className="brochure"
                            onClick={() => setPopup(!popup)}
                            // onClick={() => {likePost(item._id)}}
                        >INTERESTED IN THIS PROPERTY</button>
                        
                        {
                            data.map(item => {
                                return(
                                    item.likes.includes(item._id)
                                        ? 
                                        <div className="buttons">
                                            <button 
                                                className="brochure"
                                                onClick={() => {unlikePost(item._id)}}
                                            >NOT INTERESTED</button>
                                        </div>
                                        :
                                        <div className="buttons">
                                            <button 
                                                className="brochure"
                                                onClick={() => {likePost(item._id)}}
                                            >INTERESTED</button>
                                            <form onSubmit={(e) => {
                                                e.preventDefault()
                                                displayName(e.target[0].value, item._id)
                                            }}>
                                                <input 
                                                    type="text"
                                                    value={`is interested in ${item.propertyName}`}
                                                />
                                            </form>
                                        </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className={popup ? "properties-details-interested-toggle properties-details-interested" : "properties-details-interested"}>
                    <div className="background" onClick={() => setPopup(!popup)}></div>
                    <div className="inner">
                        <div className="head">Not a Broker? Indicate your interest in this property by filling and submitting the form below</div>

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
                        
                        <div style={{marginTop:`5vh`}} className="head">{interestedText()}</div>
                        
                        <form onSubmit={(e)=>{
                            e.preventDefault()
                            displayName(e.target[0].value,propertyDetails.post._id)
                        }}>

                        {/* interested input */}
                        <input 
                            type="text" 
                            name="description"
                            placeholder="add a comment" 
                            value={`
                                ${state ? state.firstName: "loading"} ${state ? state.lastName: "loading"} (${state ? state.email: "loading"}) is interested in ${propertyDetails.post ? propertyDetails.post.propertyName : "loading"}
                            `} 
                            onChange={setDescription}
                            hidden
                        />

                        {/* property */}
                        <input 
                            type="text" 
                            name="propertyLink"
                            placeholder="add a comment" 
                            value={`https://admin.aoestatechariots.com/properties-details/${propertyId}`}
                            onChange={setPropertyLink} 
                            hidden
                        />


                        <input 
                            type="text" 
                            name="userLink"
                            placeholder="add a comment" 
                            value={`https://admin.aoestatechariots.com/users-details/${state ? state._id: "loading"}`} 
                            onChange={setUserLink}
                            hidden
                        />

                        <div>
                            {interestedButton()}
                        </div>
                        </form>
                        
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Estates
