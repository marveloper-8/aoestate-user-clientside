import React from 'react'
import CountUp from 'react-countup'

import work from '../../images/work.png'
import workTwo from '../../images/work-two.png'
import loginThree from '../../images/login3.png'
import house from '../../images/how-we-work.jpg'
import customerOne from '../../images/extras/one.jpg'
import customerTwo from '../../images/extras/two.jpg'
import customerThree from '../../images/extras/three.jpg'

import './css/general.css'
// import './css/content.css'

import Navigation from './Navigation'
import Footer from './Footer'

const HowWeWork = () => {
    return (
        <div className="how-we-work">
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
                        <span className="primary">How we Work</span>
                    </h1>
                </div>

                <div className="container-text">
                    <div className="content content-left">
                        <div className="text">
                            <h3>Process Of Onboardding Real Estate Brokers</h3>
                            
                            <p>We are shrewd with the kind of brokers we approve hence our commitment to ensuring a new broker first must possess the zeal to sell property and must be agile and full of energy to build relationship that can be converted to solid value.</p>

                            <p>At the core of our onboarding process we consider the following:</p>

                            <ul>
                                <li>Knowledge of real estate, market and passion to drive sales</li>
                                <li>Ability to learn continuously</li>
                                <li>Great communication and relationship building skills</li>
                            </ul>
                            
                            <p>We continuously train and retrain our real estate brokers so they develop natural capacity to do exploit in the market place. We also have mouth watering incentives which cut across commissions, travel, Car rewards, shopping and property ownership to motivate our real estate brokers to deliver top notch results.</p>
                        </div>

                        <div className="image">
                            <img 
                                src={workTwo} 
                                alt="description" 
                                style={{width:`25vw`}}
                            />
                        </div>
                    </div>
                </div>
                    
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
                            <h3>How We Work With Developers</h3>
                            
                            <p>We are keen on delivering quality, properly documented properties to our esteemed clients and as such ensure the following quality control checks are put in place before signing up developers.</p>

                            <ul>
                                <li>Developer Track Record</li>
                                <li>Independent Property Document Verification</li>
                                <li>Property Benefits to Buyers</li>
                                <li>Independent Survey of Property</li>
                            </ul>
                            
                            <p>Afterwards, the developer pays a commitment fee to come on board our network. The developer provides all marketing materials and ensure the necessary marketing campaign is carried out.</p>
                        </div>
                    </div>
                </div>

                <div className="container-text">
                    <div className="content content-left">
                        <div className="text">
                            <h1>Customer Engagement</h1>
                        </div>

                        <div className="image">
                            <span>Our customers mainly buy properties through our verified real estate brokers. We then ensure customer gets value for money and the security needed to keep the investment worthwhile.</span>
                            <br />
                            <span>Our four core value for serving our customers are:</span>

                            <ul>
                                <li>Quality Assurance</li>
                                <li>Security</li>
                                <li>Value for Money</li>
                                <li>Peace of Mind</li>
                            </ul>
                        </div>
                    </div>

                    <div className="image-collage">
                        <div 
                            className="one"
                            style={{
                                backgroundImage: `url(${customerOne})`,
                                backgroundSize:`cover`,
                                backgroundPosition:`center`
                            }}
                        ></div>
                        <div 
                            className="two"
                            style={{
                                backgroundImage: `url(${house})`,
                                backgroundSize:`cover`,
                                backgroundPosition:`center`
                            }}
                        ></div>
                        <div 
                            className="three"
                            style={{
                                backgroundImage: `url(${customerThree})`,
                                backgroundSize:`cover`,
                                backgroundPosition:`center`
                            }}
                        ></div>
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

                <Footer />
            </div>
        </div>
    )
}

export default HowWeWork
