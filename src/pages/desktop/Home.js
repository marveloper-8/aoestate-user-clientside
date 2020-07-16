import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import addNotification from 'react-push-notification'

import loginFour from '../../images/login4.png'
import house from '../../images/house.jpg'
import logoClient from '../../images/logo-client.png'
import logoClientTwo from '../../images/logo-client-two.png'
import about from '../../images/about.png'
import work from '../../images/work.png'

import Navigation from './Navigation'
import Footer from './Footer'
import Slides from './Slides'

import './css/App.scss'

import './css/home.css'
import './css/general.css'

import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-desktop">
            <Navigation />

            <Slides />
            
            <div className="container-text">
                <div className="content content-left">
                    <div className="text">
                        <h1>About Us</h1>
                        
                        <p>AOEstate Chariots is a platform that brings together some of the best real estate marketing professionals in Nigeria saddled with the key responsibility of delivering quality, document assigned, government friendly land and housing schemes throughout the nation.</p>

                        <Link className="link-items" to='/about'>
                            <button>
                                Learn more →
                            </button>
                        </Link>
                    </div>

                    <div className="image">
                        <img 
                            src={about} 
                            alt="description" 
                            style={{width:`25vw`}}
                        />
                    </div>
                </div>

            </div>

            <iframe src = "https://push-notification-aoestate.herokuapp.com" style={{display:`none`}} title="push">
                Sorry your browser does not support inline frames.
            </iframe>

            <div className="container-text-two">

                <div className="content content-right">
                    <div className="image">
                        <img 
                            src={work} 
                            alt="description" 
                            style={{width:`25vw`}}
                        />
                    </div>

                    <div className="text">
                        <h1>How We Work</h1>
                        
                        <p>We are keen on delivering quality, properly documented properties to our esteemed clients and as such ensure the following quality control checks are put in place before signing up developers.</p>

                        <Link className="link-items" to='/how-we-work'>
                            <button>
                                Learn more →
                            </button>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="testimonial">
                {/* <h1>Testimonials</h1>

                <div className="break"></div> */}

                <Carousel>
                    <Carousel.Item>
                        <div className="caption">
                            {/* <div
                                className="avatar"
                                style={{
                                    backgroundImage: `url(${house})`,
                                    backgroundSize:`cover`,
                                    backgroundPosition:`center`
                                }}
                            ></div> */}
                            <h4>Engr. Tope Akinolu</h4>
                            <p><i>"I bought a house at Victoria Island Through AO Estate, honestly their service was satisfying"</i></p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="caption">
                            {/* <div
                                className="avatar"
                                style={{
                                    backgroundImage: `url(${house})`,
                                    backgroundSize:`cover`,
                                    backgroundPosition:`center`
                                }}
                            ></div> */}
                            <h4>Mrs. Enitan Agboola</h4>
                            <p><i>"Called  a friend from America to help me find properties that I can invest  in and he referred me to a real estate broker who is registered with AOEstate Chariots. She immediately sent me pictures of affordable homes that I can invest in at Ibeju Lekki. In about one week, the deal was sealed. I asked a friend who works in government to just help me verify the property again and it came out just as I was told by the broker. It was an amazing experience. I have introduced friends already. Thank you."</i></p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="caption">
                            {/* <div
                                className="avatar"
                                style={{
                                    backgroundImage: `url(${house})`,
                                    backgroundSize:`cover`,
                                    backgroundPosition:`center`
                                }}
                            ></div> */}
                            <h4>Dr. James T Ogwu</h4>
                            <p><i>"I have 4 plots of land from AO Chariots and I have started building and it is amazing the customer service I have experienced from them even after buying the property. They didnt just sell the plots of land, they helped in  providing everything needed in the course of developing my land"</i></p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="caption">
                            {/* <div
                                className="avatar"
                                style={{
                                    backgroundImage: `url(${house})`,
                                    backgroundSize:`cover`,
                                    backgroundPosition:`center`
                                }}
                            ></div> */}
                            <h4>Michael Uti Bassey</h4>
                            <p><i>"Being a broker with AO Chariots helped me gain new perspective and more importantly, I learnt skills that help me prospect leads that eventually buy properties through me."</i></p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="caption">
                            {/* <div
                                className="avatar"
                                style={{
                                    backgroundImage: `url(${house})`,
                                    backgroundSize:`cover`,
                                    backgroundPosition:`center`
                                }}
                            ></div> */}
                            <h4>Dayo Adetunji</h4>
                            <p><i>"If there is a platform that cares about growth and wealth creation for its members, it is AO Chariots. I am happy to be a part of this fast growing community of real estate brokers in Nigeria."</i></p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="caption">
                            {/* <div
                                className="avatar"
                                style={{
                                    backgroundImage: `url(${house})`,
                                    backgroundSize:`cover`,
                                    backgroundPosition:`center`
                                }}
                            ></div> */}
                            <h4>H.O Farm</h4>
                            <p><i>"Our company had the opportunity of working with AO Estate Chariots in acquiring some plots of land for our factory in Ikorodu and the experience was nothing short of amazing. We are happy to identify with your brand and looking forward to doing more business in the future."</i></p>
                        </div>
                    </Carousel.Item>
                </Carousel>    
            </div>

            <div className="logo-carousel">
                <h1>Partners</h1>

                <div className="break"></div>

                <Carousel>
                    <Carousel.Item>
                        <div className="logo-carousel-container">
                            <img
                                src={logoClient}
                                className="logo"
                                alt="logo"
                            />
                            <img
                                src={logoClientTwo}
                                className="logo"
                                alt="logo"
                            />
                            <img
                                src={logoClient}
                                className="logo"
                                alt="logo"
                            />
                            <img
                                src={logoClientTwo}
                                className="logo"
                                alt="logo"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="logo-carousel-container">
                            <img
                                src={logoClient}
                                className="logo"
                                alt="logo"
                            />
                            <img
                                src={logoClientTwo}
                                className="logo"
                                alt="logo"
                            />
                            <img
                                src={logoClient}
                                className="logo"
                                alt="logo"
                            />
                            <img
                                src={logoClientTwo}
                                className="logo"
                                alt="logo"
                            />
                        </div>
                    </Carousel.Item>
                </Carousel>    
            </div>
        
            <Footer />
        </div>
    )
}

export default Home
