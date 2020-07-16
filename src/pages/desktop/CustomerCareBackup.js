import React, {useState} from 'react'
import axios from 'axios'

import customerCare from '../../images/customer-care.jpg'

import './css/general.css'
import './css/customer-care.css'

import Navigation from './Navigation'
import Footer from './Footer'

const CustomerCare = () => {
    const [state, setState] = useState({
        category: '',
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e) => {
          setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleBroker = (e) => {
          e.preventDefault()
          axios({
                method: "POST",
                url:"/customer-care/broker", 
                data: {
                    category: 'Broker', 
                    name: state.name, 
                    email: state.email,
                    phone: state.phone,
                    message: state.message
                }
          }).then( () => {
                setState({ 
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

    const handleDeveloper = (e) => {
          e.preventDefault()
          axios({
                method: "POST",
                url:"/customer-care", 
                data: {
                    category: state.category, 
                    name: state.name, 
                    email: state.email,
                    phone: state.phone,
                    message: state.message
                }
          }).then( () => {
                setState({ 
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


    return (
        <div className="customer-care">
            <div className="desktop">
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

                    <form className="form" onSubmit={handleBroker}>
                        <div className="tab">
                            <input 
                                type="text"
                                name="category"
                                placeholder="Your category..."
                                value={state.category}
                                onChange={handleChange}
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
                                value={state.name}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Email Address</label>
                            <br />
                            <input 
                                type="text"
                                name="email"
                                placeholder="Your email..."
                                value={state.email}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Phone Number</label>
                            <br />
                            <input 
                                type="text"
                                name="phone"
                                placeholder="Your phone..."
                                value={state.phone}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Your Message</label>
                            <br />
                            <textarea
                                name="message"
                                placeholder="Your message..."
                                value={state.message}
                                onChange={handleChange}
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

                    <form className="form" onSubmit={handleDeveloper}>
                        <div className="tab">
                            <input 
                                type="text"
                                name="category"
                                placeholder="Your category..."
                                value={state.category}
                                onChange={handleChange}
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
                                value={state.name}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Email Address</label>
                            <br />
                            <input 
                                type="text"
                                name="email"
                                placeholder="Your email..."
                                value={state.email}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Phone Number</label>
                            <br />
                            <input 
                                type="text"
                                name="phone"
                                placeholder="Your phone..."
                                value={state.phone}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Your Message</label>
                            <br />
                            <textarea
                                name="message"
                                placeholder="Your message..."
                                value={state.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="button">
                            <button type="submit">
                                Send now →
                            </button>
                        </div>
                    </form>
                
                    <div
                        className="text"
                        style={{paddingLeft:`5vw`}}
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

                </div>
            
                <Footer />
            </div>
        </div>
    )
}

export default CustomerCare
