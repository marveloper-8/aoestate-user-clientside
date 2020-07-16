import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CountUp from 'react-countup'
import axios from 'axios'

import login from '../../images/login.png'
import house from '../../images/house-three.jpg'

import screenOne from '../../images/google-drive/screen1.png'
import screenTwo from '../../images/google-drive/screen2.png'
import screenThree from '../../images/google-drive/screen3.png'
import screenFour from '../../images/google-drive/screen4.png'
import screenFive from '../../images/google-drive/screen5.png'
import screenSix from '../../images/google-drive/screen6.png'
import screenSeven from '../../images/google-drive/screen7.png'
import screenEight from '../../images/google-drive/screen8.png'
import screenNine from '../../images/google-drive/screen9.png'
import screenTen from '../../images/google-drive/screen10.png'
import screenEleven from '../../images/google-drive/screen11.png'
import screenTwelve from '../../images/google-drive/screen12.png'
import screenThirteen from '../../images/google-drive/screen13.png'
import screenFourteen from '../../images/google-drive/screen14.png'
import screenFifteen from '../../images/google-drive/screen15.png'
import screenSixteen from '../../images/google-drive/screen16.png'
import screenSeventeen from '../../images/google-drive/screen17.png'
import screenEighteen from '../../images/google-drive/screen18.png'
import screenNineteen from '../../images/google-drive/screen19.png'
import screenTwenty from '../../images/google-drive/screen20.png'
import screenTwentyOne from '../../images/google-drive/screen21.png'

import './css/general.css'
import './css/hub.css'

import Navigation from './Navigation'
import Footer from './Footer'

import {Link} from 'react-router-dom'

const DevelopersHub = () => {

    // broker
    const [uploadState, setUploadState] = useState({
        category: '',
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        officeAddress: '',
        propertyName: '',
        propertyLocation: '',
        youTube: '',
        googleDrive: '',
        price: '',
        phone: '',
        description: ''
    })
    

    const handleUploadChange = (e) => {
          setUploadState({ ...uploadState, [e.target.name]: e.target.value })
    }

    const handleUpload = (e) => {
          e.preventDefault()
          axios({
                method: "POST",
                url:"https://nodemailing.herokuapp.com/customer-care/uploads", 
                data: {
                    category: 'Developer', 
                    firstName: uploadState.firstName,
                    lastName: uploadState.lastName, 
                    companyName: uploadState.companyName, 
                    email: uploadState.email,
                    officeAddress: uploadState.officeAddress, 
                    propertyName: uploadState.propertyName, 
                    propertyLocation: uploadState.propertyLocation, 
                    youTube: uploadState.youTube, 
                    googleDrive: uploadState.googleDrive, 
                    price: uploadState.price, 
                    phone: uploadState.phone,
                    description: uploadState.description
                }
          }).then( () => {
                setUploadState({ 
                    category: 'Developer',
                    firstName: '',
                    lastName: '',
                    companyName: '',
                    email: '',
                    officeAddress: '',
                    propertyName: '',
                    propertyLocation: '',
                    youTube: '',
                    googleDrive: '',
                    price: '',
                    phone: '',
                    description: '' 
                })
              })
                .then(
                    alert("Message sent successfully")
                )
              .catch( err => {
                    console.log(err)
                })
                
    }


    const [instructions, setInstructions] = useState(false)
    return (
        <div className="developers-hub">
            <div className="desktop">
                <Navigation />

                <div
                    className="header"
                    style={{
                        backgroundImage: `url(${house})`,
                        backgroundSize:`cover`,
                        backgroundPosition:`center`
                    }}
                >
                    <div className="background-overlay"></div>
                    <h1 className="text">
                        <span className="primary">Developers Hub</span>
                    </h1>
                </div>

                <div className="container-text">
                    <div className="content content-left">
                        <div className="text">
                            <h1>Developers Hub</h1>
                            
                            <p>Do You have properties You need to sell? AO Chariots holds a strong track record and database of marketing professionals who possess skills in marketing and have built a robust network of constant buyers across the world. You can trust us to help you with selling your property in good time and at the best rate.</p>
                        </div>

                        <div className="image">
                            <img 
                                src={login} 
                                alt="description" 
                                style={{width:`25vw`}}
                            />
                        </div>
                    </div>
                </div>
                    
                <div className="container-text-two success-story-container">
                    <div className="success-story content-right">
                        <div className="image">
                            <h1>Success<br />Stories</h1>
                        </div>

                        <div className="text">
                            <Carousel>
                                <Carousel.Item>
                                    <div className="caption">
                                        <h4>Engr. Tope Akinolu</h4>
                                        <p><i>"I bought a house at Victoria Island Through AO Estate, honestly their service was satisfying"</i></p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="caption">
                                        <h4>Mrs. Enitan Agboola</h4>
                                        <p><i>"Called  a friend from America to help me find properties that I can invest  in and he referred me to a real estate broker who is registered with AOEstate Chariots. She immediately sent me pictures of affordable homes that I can invest in at Ibeju Lekki. In about one week, the deal was sealed. I asked a friend who works in government to just help me verify the property again and it came out just as I was told by the broker. It was an amazing experience. I have introduced friends already. Thank you."</i></p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="caption">
                                        <h4>Dr. James T Ogwu</h4>
                                        <p><i>"I have 4 plots of land from AO Chariots and I have started building and it is amazing the customer service I have experienced from them even after buying the property. They didnt just sell the plots of land, they helped in  providing everything needed in the course of developing my land"</i></p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="caption">
                                        <h4>Michael Uti Bassey</h4>
                                        <p><i>"Being a broker with AO Chariots helped me gain new perspective and more importantly, I learnt skills that help me prospect leads that eventually buy properties through me."</i></p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="caption">
                                        <h4>Dayo Adetunji</h4>
                                        <p><i>"If there is a platform that cares about growth and wealth creation for its members, it is AO Chariots. I am happy to be a part of this fast growing community of real estate brokers in Nigeria."</i></p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="caption">
                                        <h4>H.O Farm</h4>
                                        <p><i>"Our company had the opportunity of working with AO Estate Chariots in acquiring some plots of land for our factory in Ikorodu and the experience was nothing short of amazing. We are happy to identify with your brand and looking forward to doing more business in the future."</i></p>
                                    </div>
                                </Carousel.Item>
                            </Carousel> 
                        </div>
                    </div>
                </div>

                <div className="container-text">
                    <div className="statistics">
                        <div className="tab">
                            <h2><CountUp duration={5} end={600} />+</h2>
                            <span className="value">Properties Available</span>
                        </div>
                        
                        <div className="tab">
                            <h2><CountUp duration={5} end={250} />+</h2>
                            <span className="value">Properties Sold</span>
                        </div>
                        
                        <div className="tab">
                            <h2><CountUp duration={5} end={200} />+</h2>
                            <span className="value">Happy Clients</span>
                        </div>
                        
                        <div className="tab">
                            <h2><CountUp duration={5} end={30} />+</h2>
                            <span className="value">Marketing Consultants</span>
                        </div>
                    </div>
                </div>

                <div className="container-text-two">

                    <div className="container-upload">
                        <h1>Upload a Products/Projects</h1>

                        <form className="upload-form" onSubmit={handleUpload}>
                            <input 
                                className="input"
                                type="text"
                                placeholder="Category..."
                                name="category"
                                value={uploadState.category}
                                onChange={handleUploadChange}
                                hidden
                            />

                            <div className="tab">
                                <label>First Name</label>
                                <br />
                                <input 
                                    className="input"
                                    type="text"
                                    placeholder="First name..."
                                    name="firstName"
                                    value={uploadState.firstName}
                                    onChange={handleUploadChange}
                                />
                            </div>
                            
                            <div className="tab">
                                <label>Last Name</label>
                                <br />
                                <input 
                                    className="input"
                                    type="text"
                                    placeholder="Last name..."
                                    name="lastName"
                                    value={uploadState.lastName}
                                    onChange={handleUploadChange}
                                />
                            </div>
                            
                            <div className="tab">
                                <label>Company Name</label>
                                <br />
                                <input 
                                    className="input"
                                    type="text"
                                    placeholder="Company name..."
                                    name="companyName"
                                    value={uploadState.companyName}
                                    onChange={handleUploadChange}
                                />
                            </div>
                            
                            <div className="tab">
                                <label>Phone Number</label>
                                <br />
                                <input 
                                    className="input"
                                    type="tel" 
                                    placeholder="Phone number..."
                                    name="phone"
                                    value={uploadState.phone}
                                    onChange={handleUploadChange}
                                />
                            </div>
                            
                            <div className="tab">
                                <label>Email Address</label>
                                <br />
                                <input 
                                    className="input"
                                    type="email" 
                                    placeholder="Email address..."
                                    name="email"
                                    value={uploadState.email}
                                    onChange={handleUploadChange}
                                />
                            </div>
                            
                            <div className="tab">
                                <label>Office Address</label>
                                <br />
                                <input 
                                    className="input"
                                    type="text"
                                    placeholder="Office Address..."
                                    name="officeAddress"
                                    value={uploadState.officeAddress}
                                    onChange={handleUploadChange}
                                />
                            </div>
                            
                            <div className="tab">
                                <label>Property Name</label>
                                <br />
                                <input 
                                    className="input"
                                    type="text"
                                    placeholder="Property name..."
                                    name="propertyName"
                                    value={uploadState.propertyName}
                                    onChange={handleUploadChange}
                                />
                            </div>
                            
                            <div className="tab">
                                <label>Property Location</label>
                                <br />
                                <input 
                                    className="input"
                                    type="text"
                                    placeholder="Property location..."
                                    name="propertyLocation"
                                    value={uploadState.propertyLocation}
                                    onChange={handleUploadChange}
                                />
                            </div>
                            
                            <div className="tab">
                                <label>Link to YouTube video</label>
                                <br />
                                <input 
                                    className="input"
                                    type="text"
                                    placeholder="Link to YouTube video..."
                                    name="youTube"
                                    value={uploadState.youTube}
                                    onChange={handleUploadChange}
                                />
                            </div>
                            
                            <div className="tab">
                                <label>Link to Google Drive Folder</label>. <i 
                                    className="important-read"
                                    onClick={() => setInstructions(!instructions)}
                                >Important read*</i>
                                <br />
                                <input 
                                    className="input"
                                    type="text"
                                    placeholder="Link to Google Drive Folder..."
                                    name="googleDrive"
                                    value={uploadState.googleDrive}
                                    onChange={handleUploadChange}
                                />
                            </div>
                            
                            <div className="tab">
                                <label>Price of Property</label>
                                <br />
                                <input 
                                    className="input"
                                    type="text"
                                    placeholder="Price of Property..."
                                    name="price"
                                    value={uploadState.price}
                                    onChange={handleUploadChange}
                                />
                            </div>
                            
                            <div className="tab">
                                <label>Property Description</label>
                                <br />
                                <textarea
                                    className="input"
                                    placeholder="Property description..."
                                    name="description"
                                    value={uploadState.description}
                                    onChange={handleUploadChange}
                                ></textarea>
                            </div>

                            <div className="button">
                                <button>
                                    Send now →
                                </button>
                            </div>
                        </form>
                    
                    </div>

                    <div className={instructions ? "instructions-toggle instructions" : "instructions"}>
                        <div className="background" onClick={() => setInstructions(!instructions)}></div>
                        <div className="inner">
                            <div className="top-fade"></div>
                            <div className="inner-inner">
                                <div className="head">Uploading your resources to a Google Drive</div>
                                
                                <ol>
                                    <li>
                                        <div className="text">Go to your Google Drive. You must have a Google account to access your Google Drive. <a href="https://drive.google.com/drive/my-drive" target="_blank" rel="noopener noreferrer">Click here to go to Google Drive.</a></div>
                                        <img src={screenOne} alt="Screen One" />
                                    </li>
                                    
                                    <li>
                                        <div className="text">Create a folder.</div>
                                        <img src={screenFive} alt="Screen Five" />
                                        <img src={screenTwo} alt="Screen Two" />
                                    </li>
                                    
                                    <li>
                                        <div className="text">Use the name of the property as the name of the folder.</div>
                                        <img src={screenThree} alt="Screen Three" />
                                        <img src={screenFour} alt="Screen Four" />
                                    </li>
                                    
                                    <li>
                                        <div className="text">Open the folder.</div>
                                        <img src={screenSix} alt="Screen Six" />
                                    </li>
                                    
                                    <li>
                                        <div className="text">Select the logo of your company first.</div>
                                        <img src={screenSeven} alt="Screen Seven" />
                                        <img src={screenEight} alt="Screen Eight" />
                                        <img src={screenNine} alt="Screen Nine" />
                                    </li>
                                    
                                    <li>
                                        <div className="text">Also upload the brochure of the property.</div>
                                        <img src={screenTwelve} alt="Screen Twelve" />
                                    </li>
                                    
                                    <li>
                                        <div className="text">Create a folder in the project folder and name it "Property Images". Afterwards upload the images of the property on this folder (Six folders at least).</div>
                                        <img src={screenTen} alt="Screen Ten" />
                                    </li>
                                    
                                    <li>
                                        <div className="text">Create a folder in the project folder and name it "Property Flyers". Afterwards upload the flyer(s) of the property to this folder.</div>
                                        <img src={screenEleven} alt="Screen Eleven" />
                                    </li>
                                    
                                    <li>
                                        <div className="text">The folder should now look like this. If it does not, please go back and follow the steps correctly</div>
                                        <img src={screenThirteen} alt="Screen Thirteen" />
                                    </li>
                                    
                                    <li>
                                        <div className="text">Navigate back to "My Drive" where your project folder is clearly seen.</div>
                                        <img src={screenFourteen} alt="Screen Fourteen" />
                                    </li>
                                    
                                    <li>
                                        <div className="text">Right click on the project folder then navigate to "Get shareable link".</div>
                                        <img src={screenFifteen} alt="Screen Fifteen" />
                                    </li>
                                    
                                    <li>
                                        <div className="text">Change the access type from "Restricted" to "Anyone with the link".</div>
                                        <img src={screenSixteen} alt="Screen Sixteen" />
                                        <img src={screenSeventeen} alt="Screen Seventeen" />
                                    </li>
                                    
                                    <li>
                                        <div className="text">Copy the link to the folder and click on "Done" afterwards.</div>
                                        <img src={screenEighteen} alt="Screen Eighteen" />
                                        <img src={screenNineteen} alt="Screen Nineteen" />
                                    </li>
                                    
                                    <li>
                                        <div className="text">Paste the link on the input field for Google Drive URL and proceed with filling your form.</div>
                                        <img src={screenTwenty} alt="Screen Twenty" />
                                        <img src={screenTwentyOne} alt="Screen Twenty One" />
                                    </li>
                                </ol>
                            </div>
                            
                            <div className="bottom-fade"></div>
                        </div>
                    </div>

                    
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default DevelopersHub
