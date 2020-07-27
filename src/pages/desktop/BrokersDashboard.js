import React, {useContext, useState, useEffect} from 'react'
import {UserContext} from './App'
import {useParams} from 'react-router-dom'
import CountUp from 'react-countup'
import {
    FacebookShareCount,
    PinterestShareCount,
    VKShareCount,
    OKShareCount,
    RedditShareCount,
    TumblrShareCount,
    FacebookShareButton,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    RedditShareButton,
    EmailShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
    ViberShareButton,
    WorkplaceShareButton,
    LineShareButton,
    WeiboShareButton,
    PocketShareButton,
    InstapaperShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    TelegramIcon,
    WhatsappIcon,
    RedditIcon,
    TumblrIcon,
    MailruIcon,
    EmailIcon,
    LivejournalIcon,
    ViberIcon,
    WorkplaceIcon,
    LineIcon,
    PocketIcon,
    InstapaperIcon,
    WeiboIcon,
  } from "react-share";

import account from '../../icons/account.svg'
import email from '../../icons/email.svg'
import phone from '../../icons/phone.svg'
import accountNumber from '../../icons/account-number.svg'
import bank from '../../icons/bank.svg'
import referredBy from '../../icons/referred-by.svg'
import referralLink from '../../icons/referral-link.svg'
import referred from '../../icons/referred.svg'

import login from '../../images/login.png'
import house from '../../images/house-two.jpg'

import './css/general.css'
import './css/hub.css'

import Navigation from './Navigation'
import Footer from './Footer'

import {
  Link
} from 'react-router-dom'

const BrokersDashboard = () => {
    const [event, setEvent] = useState([])
    const [feed, setFeed] = useState([])

    const {state, dispatch} = useContext(UserContext)
    const {userId} = useParams()

    console.log(userId)
    
    useEffect(() => {
        fetch('https://aoestate-server-two.herokuapp.com/all-events', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                setEvent(result.events)
            })
    }, [])
    
    useEffect(() => {
        fetch('https://aoestate-server-two.herokuapp.com/all-feeds', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                setFeed(result.feeds)
            })
    }, [])

    const shareUrl = `https://aoestatechariots.com/brokers-signup?refer=${state ? state._id: "loading"}&firstName=${state ? state.firstName: "loading"}&lastName=${state ? state.lastName: "loading"}&email=${state ? state.email: "loading"}`

    const title = 'AO Estate Referral Link'

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
                        <span className="primary">Realtors Hub</span>
                    </h1>
                </div>

                <div className="container-text">
                    <div className="content content-left">
                        <div className="text">
                            <h1>Realtors Hub</h1>
                            
                            <p>Welcome to the hub of outstanding realtors. We recruit, train and make ordinary people become professional real estate marketers capable of becoming millionaires in 30 days or less. We call them the Estate Chariots simply because they have queer abilities to deliver and move with fast pace paying attention to details. As a member of the Estate Chariots, you have an exclusive access to signature real estate training, access to high paying estate deals that earn you the best commissions and enjoy incredible privileges and incentives. As an AO  Chariot, you always stand out as a classy and wealthy real estate success. Start your journey with us by registering and if you are already a member of our network, just sign in</p>
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

                <div className="dashboard">
                    <h2>Your Profile</h2>

                    <div className="dashboard-container">
                        <div className="tab one">
                            <div className="icons">
                                <img src={email} alt="icons" />
                            </div>
                            <b>Email address</b>
                            <p>{state ? state.email: "loading"}</p>
                        </div>

                        <div className="tab four">
                            <div className="icons">
                                <img src={phone} alt="icons" />
                            </div>
                            <b>Phone number</b>
                            <p>{state ? state.phone: "loading"}</p>
                        </div>

                        <div className="tab one">
                            <div className="icons">
                                <img src={account} alt="icons" />
                            </div>
                            <b>Account name</b>
                            <p>{state ? state.bankAccountName: "loading"}</p>
                        </div>

                        <div className="tab two">
                            <div className="icons">
                                <img src={accountNumber} alt="icons" />
                            </div>
                            <b>Account number</b>
                            <p>{state ? state.bankNumber: "loading"}</p>
                        </div>

                        <div className="tab four">
                            <div className="icons">
                                <img src={bank} alt="icons" />
                            </div>
                            <b>Bank name</b>
                            <p>{state ? state.bankName: "loading"}</p>
                        </div>

                        <div className="tab two">
                            <div className="icons">
                                <img src={referredBy} alt="icons" />
                            </div>
                            <b>Referred by</b>
                            <p>{state ? state.referredBy: "loading"}</p>
                        </div>

                        <div className="tab three">
                            <div className="icons">
                                <img src={referralLink} alt="icons" />
                            </div>
                            <b>Referral link</b>
                            
                            <div>
                                    
                                <FacebookShareButton url={shareUrl} quote={title}>
                                    <FacebookIcon size={32} round />
                                </FacebookShareButton>
                                
                                <FacebookMessengerShareButton
                                    url={shareUrl}
                                    appId="521270401588372"
                                >
                                    <FacebookMessengerIcon size={32} round />
                                </FacebookMessengerShareButton>

                                <TwitterShareButton
                                    url={shareUrl}
                                    title={title}
                                >
                                    <TwitterIcon size={32} round />
                                </TwitterShareButton>

                                <TelegramShareButton
                                    url={shareUrl}
                                    title={title}
                                >
                                    <TelegramIcon size={32} round />
                                </TelegramShareButton>

                                <WhatsappShareButton
                                    url={shareUrl}
                                    title={title}
                                    separator=":: "
                                >
                                    <WhatsappIcon size={32} round />
                                </WhatsappShareButton>
                                
                            </div>
                           
                        </div>

                        <div className="tab one">
                            <div className="icons">
                                <img src={referred} alt="icons" />
                            </div>
                            <b>First affiliate</b>
                            <p>James Doe: <b>₦8,000,000</b></p>
                        </div>

                        <div className="tab four">
                            <div className="icons">
                                <img src={referred} alt="icons" />
                            </div>
                            <b>Second affiliate</b>
                            <p>Jane Doe: <b>₦8,000,000</b></p>
                        </div>
                    </div>
                </div>

                <div className="dashboard-two">
                    <div className="columns events">
                        <h2>Events to Attend</h2>

                        <div className="columns-inner">
                        {
                            event.map(item => {
                                return(
                                    <div className="events-list">
                                        <Link className="link" to={"/event-details/" + item._id}>
                                        <div className="container-events">
                                            <div
                                                style={{
                                                    backgroundImage: `url(${house})`,
                                                    backgroundSize:`cover`,
                                                    backgroundPosition:`center`
                                                }}
                                                className="image"
                                            ></div>
                            
                                            <div className="text">
                                                <br /><br />
                                                <h6>{item.eventName}</h6>
                                                <p className="description">{item.eventDescription}</p>
                                                <p className="location">{item.eventDate}</p>
                                            </div>
                                        </div>
                                        </Link>
                                        
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>

                    <div className="columns feeds">
                        <h2>Feeds</h2>

                        <div className="columns-inner">
                            {
                                feed.map(item => {
                                    return(
                                        <div className="events-list" style={{padding:`5vh 0`}}>
                                            <Link className="link" href={`${item.feedLInk}`}>
                                            <div className="container">
                                                <div className="text">
                                                    <h6>{item.feedHeadline}</h6>
                                                    <p className="description">{item.feedInformation}</p>
                                                </div>
                                            </div>
                                            </Link>
                                            
                                        </div>
                                    )
                                })
                            }
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

                <Footer />
            </div>
        </div>
    )
}

export default BrokersDashboard
