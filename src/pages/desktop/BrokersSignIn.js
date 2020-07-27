import React, {useState, useContext} from 'react'
import CountUp from 'react-countup'
import axios from 'axios'

import {UserContext} from './App'

import {
  Link,
  useHistory
} from 'react-router-dom'

import login from '../../images/login.png'
import house from '../../images/house-two.jpg'

import './css/general.css'
import './css/hub.css'

import Navigation from './Navigation'
import Footer from './Footer'

const BrokersDashboard = () => {
    const {state, dispatch} = useContext(UserContext)

    const history = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")

    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert("invalid email")
            return
        }
        fetch("https://aoestate-server-two.herokuapp.com/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.error){
                    alert(data.error)
                }
                else{
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("user", JSON.stringify(data.user))
                    dispatch({type: "USER", payload: data.user})
                    alert("Signed in successfully")
                    history.push('/brokers')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

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

                <div className="container-text-two">

                    <div className="container-upload">
                        <h1>Sign in as Broker</h1>

                        <div className="upload-form">
                            <div className="tab">
                                <label>Email Address</label>
                                <br />
                                <input 
                                    type="email" 
                                    placeholder="Email address..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="tab">
                                <label>Password</label>
                                <br />
                                <input
                                    type="password"
                                    placeholder="Password..."
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="button tab">
                                <button onClick={() => PostData()}>
                                    Sign up →
                                </button>
                            </div>

                            <div className="tab extras">
                                <div>Don't have an account? <Link to='/brokers-signup'>Sign up</Link></div>
                                
                                <div className="right">Forgot password? <Link to='/brokers-signup'>Reset password</Link></div>
                            </div>
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
