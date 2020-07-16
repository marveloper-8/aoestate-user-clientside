import React from 'react'


import house from '../../images/about-us.jpg'
import adejumo from '../../images/team/adejumo.jpg'
import olawale from '../../images/team/olawale.jpeg'
import adetunbi from '../../images/team/adetunbi.jpeg'

import Navigation from './Navigation'
import Footer from './Footer'

import './css/general.css'
import './css/about.css'

function About() {
    return (
        <div className="about">
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
                        <span className="primary">About Us</span>
                    </h1>
                </div>

                <div className="container-text">
                    
                    <div className="content content-left">
                        <div className="text">
                            <h1>About Us</h1>
                        
                            <p>AO Estate Chariots is owned and operated by ADETUNBIOWO & CO LTD, A Nigeria Based Incorporated Company.</p>
                        </div>

                        <div className="image">
                            <p>AOEstate Chariots is a platform that brings together some of the best real estate marketing professionals in Nigeria saddled with the key responsibility of delivering quality, document assigned,  government friendly land and housing schemes throughout the nation. Partnering strategically with real estate companies and developers whose main mission is to deliver affordable home ownership schemes to real estate investors and buyers in Nigeria and in diaspora, we ensure our network of real estate marketing professionals broker some of the best deals that comes with easy and fast allocation and delivery of customers properties.</p>
                        </div>
                    </div>
                </div>

                <div className="team team-one">
                    <h3>Meet Our Team</h3>
                    <h1>We Are Behind The Scene</h1>

                    <div className="item-list">
                        <div className="item">
                            <div 
                                className="picture"
                                style={{
                                    backgroundImage: `url(${adetunbi})`,
                                    backgroundSize:`cover`,
                                    backgroundPosition:`center`
                                }}
                            ></div>

                            <h3>Adetunbi H Owolabi</h3>
                            <div>Founder/CEO</div>
                        </div>
                        
                        <div className="item">
                            <div 
                                className="picture"
                                style={{
                                    backgroundImage: `url(${olawale})`,
                                    backgroundSize:`cover`,
                                    backgroundPosition:`center`
                                }}
                            ></div>

                            <h3>Olawale Kuforiji</h3>
                            <div>Chief Operating Officer</div>
                        </div>
                        
                        <div className="item">
                            <div 
                                className="picture"
                                style={{
                                    backgroundImage: `url(${adejumo})`,
                                    backgroundSize:`cover`,
                                    backgroundPosition:`center`
                                }}
                            ></div>

                            <h3>Adejumo Eniola</h3>
                            <div>Secretary</div>
                        </div>
                    </div>
                </div>
               
                <Footer />
            </div>
        </div>
    )
}

export default About
