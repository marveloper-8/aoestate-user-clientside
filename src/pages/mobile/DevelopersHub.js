import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CountUp from 'react-countup'

import login from '../../images/login.png'
import house from '../../images/house-three.jpg'

import './css/general.css'
import './css/hub.css'

import Navigation from './Navigation'
import Footer from './Footer'

const DevelopersHub = () => {
    return (
        <div className="developers-hub">
            <div className="mobile">
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

                <div className="container">
                    <div className="content">
                        <div className="text">
                            <h5>Developers Hub</h5>

                            <div className="image">
                                <img 
                                    src={login} 
                                    alt="description" 
                                    style={{width:`25vw`}}
                                />
                            </div>
                            
                            <p>Do You have properties You need to sell? AO Chariots holds a strong track record and database of marketing professionals who possess skills in marketing and have built a robust network of constant buyers across the world. You can trust us to help you with selling your property in good time and at the best rate.</p>
                        </div>
                    </div>
                </div>
                    
                <div className="container-two success-story-container">
                    <div className="success-story">
                        <div className="image">
                            <h5>Success<br />Stories</h5>
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

                <div className="container">
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

                <div className="container-two" style={{textAlign:`center`}}>

                    <h5>Upload a Products/Projects</h5>

                    <form className="upload-form">
                        <div className="tab">
                            <label>Your Name</label>
                            <br />
                            <input 
                                type="text"
                                placeholder="Your name..."
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Company Name</label>
                            <br />
                            <input 
                                type="text"
                                placeholder="Company name..."
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Phone Number</label>
                            <br />
                            <input 
                                type="tel" 
                                placeholder="Phone number..."
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Email Address</label>
                            <br />
                            <input 
                                type="email" 
                                placeholder="Email address..."
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Office Address</label>
                            <br />
                            <input 
                                type="text"
                                placeholder="Office Address..."
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Property Name</label>
                            <br />
                            <input 
                                type="text"
                                placeholder="Property name..."
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Property Location</label>
                            <br />
                            <input 
                                type="text"
                                placeholder="Property location..."
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Type Of Document</label>
                            <br />
                            <input 
                                type="text"
                                placeholder="Type of document..."
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Property Description</label>
                            <br />
                            <textarea
                                placeholder="Property description..."
                            ></textarea>
                        </div>

                        <div className="button">
                            <button>
                                Send now →
                            </button>
                        </div>
                    </form>
                
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default DevelopersHub
