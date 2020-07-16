import React, {useState} from 'react'
import axios from 'axios'

import customerCare from '../../images/customer-care.jpg'

import './css/general.css'
import './css/customer-care.css'

import Navigation from './Navigation'
import Footer from './Footer'

function CustomerCare() {

    // broker
    const [brokerState, setBrokerState] = useState({
        category: '',
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    

    const handleBrokerChange = (e) => {
          setBrokerState({ ...brokerState, [e.target.name]: e.target.value })
    }

    const handleBroker = (e) => {
          e.preventDefault()
          axios({
                method: "POST",
                url:"https://nodemailing.herokuapp.com/customer-care/broker", 
                data: {
                    category: 'Broker', 
                    name: brokerState.name, 
                    email: brokerState.email,
                    phone: brokerState.phone,
                    message: brokerState.message
                }
          }).then( () => {
                setBrokerState({ 
                    category: 'Broker',
                    name: '',
                    email: '',
                    phone: '',
                    message: '' 
                })
              })
                .then(
                    alert("Message sent successfully")
                )
              .catch( err => {
                    console.log(err)
                })
                
    }








    // developer
    const [developerState, setDeveloperState] = useState({
        category: '',
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleDeveloperChange = (e) => {
          setDeveloperState({ ...developerState, [e.target.name]: e.target.value })
    }

    const handleDeveloper = (e) => {
          e.preventDefault()
          axios({
                method: "POST",
                url:"https://nodemailing.herokuapp.com/customer-care/broker", 
                data: {
                    category: 'Developer', 
                    name: developerState.name, 
                    email: developerState.email,
                    phone: developerState.phone,
                    message: developerState.message
                }
          }).then( () => {
                setDeveloperState({ 
                    category: 'Developer',
                    name: '',
                    email: '',
                    phone: '',
                    message: '' 
                })
              })
                .then(
                    alert("Message sent successfully")
                )
              .catch( err => {
                    console.log(err)
                })
                
    }








    // general
    const [generalState, setGeneralState] = useState({
        category: '',
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleGeneralChange = (e) => {
          setGeneralState({ ...generalState, [e.target.name]: e.target.value })
    }

    const handleGeneral = (e) => {
          e.preventDefault()
          axios({
                method: "POST",
                url:"https://nodemailing.herokuapp.com/customer-care/broker", 
                data: {
                    category: 'General', 
                    name: generalState.name, 
                    email: generalState.email,
                    phone: generalState.phone,
                    message: developerState.message
                }
          }).then( () => {
                setGeneralState({ 
                    category: 'General',
                    name: '',
                    email: '',
                    phone: '',
                    message: '' 
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
        <div className="customer-care">
            <div className="mobile">
                <Navigation />

                <div
                    className="header"
                    style={{
                        backgroundImage: `url(${customerCare})`,
                        backgroundSize:`cover`,
                        backgroundPosition:`center`
                    }}
                >
                    <div className="background-overlay"></div>
                    <h1 className="text">
                        <span className="primary">Customer Care Center</span>
                    </h1>
                </div>


                <div className="content">
                    <div 
                        className="text"
                        style={{paddingRight:`5vw`}}
                    >
                        <h1>Customer Care: <span className="specific">For Brokers</span></h1>

                        <div className="tab">
                            <label>Phone Number</label>
                            <p>+234 809 990 0099</p>
                        </div>
                        <div className="tab">
                            <label>Email Address</label>
                            <p>brokers@aoestate.com</p>
                        </div>
                        <div className="tab">
                            <label>Local Address</label>
                            <p>Lekki Phase 1, Lagos, Nigeria</p>
                        </div>
                    </div>

                    <form onSubmit={handleBroker}>
                        <div className="tab">
                            <input 
                                type="text"
                                name="category"
                                placeholder="Your category..."
                                value={brokerState.category}
                                onChange={handleBrokerChange}
                                hidden
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Your Name</label>
                            <br />
                            <input 
                                type="text"
                                name="name"
                                placeholder="Your name..."
                                value={brokerState.name}
                                onChange={handleBrokerChange}
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Email Address</label>
                            <br />
                            <input 
                                type="text"
                                name="email"
                                placeholder="Your email..."
                                value={brokerState.email}
                                onChange={handleBrokerChange}
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Phone Number</label>
                            <br />
                            <input 
                                type="text"
                                name="phone"
                                placeholder="Your phone..."
                                value={brokerState.phone}
                                onChange={handleBrokerChange}
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Your Message</label>
                            <br />
                            <textarea
                                name="message"
                                placeholder="Your message..."
                                value={brokerState.message}
                                onChange={handleBrokerChange}
                            ></textarea>
                        </div>

                        <div className="button">
                            <button type="submit">
                                Send now →
                            </button>
                        </div>
                    </form>
                
                </div>

                <div className="content">
                    <div 
                        className="text"
                        style={{paddingRight:`5vw`}}
                    >
                        <h1>Customer Care: <span className="specific">For Developers</span></h1>

                        <div className="tab">
                            <label>Phone Number</label>
                            <p>+234 809 990 0099</p>
                        </div>
                        <div className="tab">
                            <label>Email Address</label>
                            <p>brokers@aoestate.com</p>
                        </div>
                        <div className="tab">
                            <label>Local Address</label>
                            <p>Lekki Phase 1, Lagos, Nigeria</p>
                        </div>
                    </div>

                    <form className="form" onSubmit={handleDeveloper}>
                        <div className="tab">
                            <input 
                                type="text"
                                name="category"
                                placeholder="Your category..."
                                value={developerState.category}
                                onChange={handleDeveloperChange}
                                hidden
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Your Name</label>
                            <br />
                            <input 
                                type="text"
                                name="name"
                                placeholder="Your name..."
                                value={developerState.name}
                                onChange={handleDeveloperChange}
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Email Address</label>
                            <br />
                            <input 
                                type="text"
                                name="email"
                                placeholder="Your email..."
                                value={developerState.email}
                                onChange={handleDeveloperChange}
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Phone Number</label>
                            <br />
                            <input 
                                type="text"
                                name="phone"
                                placeholder="Your phone..."
                                value={developerState.phone}
                                onChange={handleDeveloperChange}
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Your Message</label>
                            <br />
                            <textarea
                                name="message"
                                placeholder="Your message..."
                                value={developerState.message}
                                onChange={handleDeveloperChange}
                            ></textarea>
                        </div>

                        <div className="button">
                            <button type="submit">
                                Send now →
                            </button>
                        </div>
                    </form>
                
                </div>

                <div className="content">
                    <div 
                        className="text"
                        style={{paddingRight:`5vw`}}
                    >
                        <h1>Customer Care</h1>

                        <div className="tab">
                            <label>Phone Number</label>
                            <p>+234 809 990 0099</p>
                        </div>
                        <div className="tab">
                            <label>Email Address</label>
                            <p>brokers@aoestate.com</p>
                        </div>
                        <div className="tab">
                            <label>Local Address</label>
                            <p>Lekki Phase 1, Lagos, Nigeria</p>
                        </div>
                    </div>

                    <form className="form" onSubmit={handleGeneral}>
                        <div className="tab">
                            <input 
                                type="text"
                                name="category"
                                placeholder="Your category..."
                                value={generalState.category}
                                onChange={handleGeneralChange}
                                hidden
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Your Name</label>
                            <br />
                            <input 
                                type="text"
                                name="name"
                                placeholder="Your name..."
                                value={generalState.name}
                                onChange={handleGeneralChange}
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Email Address</label>
                            <br />
                            <input 
                                type="text"
                                name="email"
                                placeholder="Your email..."
                                value={generalState.email}
                                onChange={handleGeneralChange}
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Phone Number</label>
                            <br />
                            <input 
                                type="text"
                                name="phone"
                                placeholder="Your phone..."
                                value={generalState.phone}
                                onChange={handleGeneralChange}
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Your Message</label>
                            <br />
                            <textarea
                                name="message"
                                placeholder="Your message..."
                                value={generalState.message}
                                onChange={handleGeneralChange}
                            ></textarea>
                        </div>

                        <div className="button">
                            <button type="submit">
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

export default CustomerCare
