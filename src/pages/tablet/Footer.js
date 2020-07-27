import React, {useContext} from 'react'

import logo from '../../images/logo-two.png'

import facebook from '../../icons/facebook-square.svg'
import twitter from '../../icons/twitter-square.svg'
import instagram from '../../icons/instagram-square.svg'
import linkedin from '../../icons/linkedin-square.svg'
import youtube from '../../icons/youtube-square.svg'

import {UserContext} from './App'

import './css/footer.css'

import {Link} from 'react-router-dom'

const Footer = () => {
    const {state, dispatch} = useContext(UserContext)

    return (
        <div className="footer-tablet">
            <div className="first">
                <h1>Subscribe to our<br />newsletter at AO Estate</h1>

                <form className="newsletter">
                    <input type="email" placeholder="Enter your email address" />
                    <button>SUBMIT</button>
                </form>

                <div className="information">
                    <div className="items">
                        <b>Phone Number</b>
                        <p>+234 (0)902 414 7413</p>
                    </div>
                    <div className="items">
                        <b>Email Address</b>
                        <p>info@aoestatechariots.com</p>
                    </div>
                    <div className="items">
                        <b>Location</b>
                        <p>Plot 10, TF Kuboye Road, Off Oniru Market, Victoria Island, Lagos</p>
                    </div>
                </div>
            </div>

            <div className="second">
                <div className="about">
                    <div className="head">
                        
                    <Link className="link-items" to={state ? "/sign-in" : "/"}>
                        <img className="logo" src={logo} alt="logo" />
                    </Link>
                        
                    </div>
                    <p>AOEstate Chariots is a platform that brings together some of the best real estate marketing professionals in Nigeria saddled with the key responsibility of delivering quality, document assigned,  government friendly land and housing schemes throughout the nation.</p>
                </div>

                <div className="footer-content">
                    <h4>Our Social Media</h4>

                    <span>
                        <a className="link" href="https://www.facebook.com/aoestatechariots" rel="noopener noreferrer" target="_blank">
                            <img className="social-icon" src={facebook} alt="facebook" /> Facebook
                        </a>
                    </span>
                    <span>
                        <a className="link" href="https://www.linkedin.com/company/aoestatechariots" rel="noopener noreferrer" target="_blank">
                            <img className="social-icon" src={linkedin} alt="linkedin" /> LinkedIn
                        </a>
                    </span>
                    <span>
                        <a className="link" href="https://twitter.com/AOEstateChariot" rel="noopener noreferrer" target="_blank">
                            <img className="social-icon" src={twitter} alt="facebook" /> Twitter
                        </a>
                    </span>
                    <span>
                        <a className="link" href="https://www.instagram.com/aoestatechariots" rel="noopener noreferrer" target="_blank">
                            <img className="social-icon" src={instagram} alt="instagram" /> Instagram
                        </a>
                    </span>
                    <span>
                        <a className="link" href="https://www.youtube.com/channel/UCjPS9-cOqnnC-gewKTzAr-A?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                            <img className="social-icon" src={youtube} alt="facebook" /> YouTube
                        </a>
                    </span>
                </div>

                <div className="footer-content">
                    <h4>Useful Links</h4>

                    <span>
                        <Link className="link" to='/how-we-work'>
                            What we do
                        </Link>
                    </span>
                    <span>
                        <Link className="link" to='/about'>
                            Who we are
                        </Link>
                    </span>
                    <span>
                        <Link className="link" to='/estates'>
                            Estates and Products
                        </Link>
                    </span>
                    <span>
                        <Link className="link" to='/brokers'>
                            Realtors Hub
                        </Link>
                    </span>
                    <span>
                        <Link className="link" to='/how-we-work'>
                            How We Work
                        </Link>
                    </span>
                    <span>
                        <Link className="link" to='/customer-care'>
                            Customer Care
                        </Link>
                    </span>
                </div>

                <span style={{fontSize:`2vw`}}>Copyright &copy; 2020, AO Estate Chariots</span>
            </div>

            <div className="credit">
                Developed by TechServ <span role="img" description="aria-label">❤️</span>
            </div>
        
        </div>
    )
}

export default Footer
