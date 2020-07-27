import React, {useState} from 'react'
import CountUp from 'react-countup'

import login from '../../images/login.png'
import house from '../../images/house.jpg'

import './css/general.css'
import './css/hub.css'

import Navigation from './Navigation'
import Footer from './Footer'

import {
    useLocation,
    Link,
    useHistory
} from 'react-router-dom'

const BrokersDashboard = () => {
    const history = useHistory()

    const location = useLocation()

    const queryString = require('query-string')
    console.log(location.search)

    const parsed = queryString.parse(location.search)
    console.log(parsed)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [bankAccountName, setBankAccountName] = useState("")
    const [bankNumber, setBankNumber] = useState("")
    const [bankName, setBankName] = useState("")
    const [referredBy, setReferredBy] = useState(`${parsed.firstName} ${parsed.lastName}`)
    const [referredById, setReferredById] = useState(`${parsed.refer}`)
    const [referredByEmail, setReferredByEmail] = useState(`${parsed.email}`)
    const [netWorth, setNetWorth] = useState("0")
    const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")

    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert("invalid email")
            return
        }
        fetch("https://aoestate-server-two.herokuapp.com/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                phone,
                bankAccountName,
                bankNumber,
                bankName,
                referredBy,
                referredById,
                referredByEmail,
                password
            })
        }).then(res => res.json())
            .then(data => {
                if(data.error){
                    alert(data.error)
                }
                else{
                    alert(data.message)
                    history.push('/brokers-signin')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="developers-hub">
            <div className="tablet">
                <Navigation />

                <div
                    className="header"
                    style={{
                        backgroundImage: `url(${house})`,
                        backgroundSize:`cover`,
                        backgroundPosition:`center`
                    }}
                >
                    <h1 className="text">
                        <span className="primary">Realtors' Hub</span>
                    </h1>
                </div>

                <div className="container">
                    <div className="content content-left">
                        <div className="text">
                            <h5>Realtors' Hub</h5>
                            
                            <div className="image">
                                <img 
                                    src={login} 
                                    alt="description"
                                />
                            </div>

                            <p>Welcome to the hub of outstanding realtors. We recruit, train and make ordinary people become professional real estate marketers capable of becoming millionaires in 30 days or less. We call them the Estate Chariots simply because they have queer abilities to deliver and move with fast pace paying attention to details. As a member of the Estate Chariots, you have an exclusive access to signature real estate training, access to high paying estate deals that earn you the best commissions and enjoy incredible privileges and incentives. As an AO  Chariot, you always stand out as a classy and wealthy real estate success. Start your journey with us by registering and if you are already a member of our network, just sign in</p>
                        </div>
                    </div>
                </div>

                <div className="container-two">
                    <h5 style={{textAlign: `center`}}>Signup as Broker</h5>

                    <div className="upload-form">
                        <div className="tab">
                            <label>First Name</label>
                            <br />
                            <input 
                                type="text" 
                                placeholder="First name..."
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        <div className="tab">
                            <label>Last Name</label>
                            <br />
                            <input
                                type="text"
                                placeholder="Last name..."
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

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
                            <label>Phone Number</label>
                            <br />
                            <input
                                type="text"
                                placeholder="Phone number..."
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div className="tab">
                            <label>Bank Account Name</label>
                            <br />
                            <input
                                type="text"
                                placeholder="Bank account name..."
                                value={bankAccountName}
                                onChange={(e) => setBankAccountName(e.target.value)}
                            />
                        </div>

                        <div className="tab">
                            <label>Bank Account Number</label>
                            <br />
                            <input
                                type="text"
                                placeholder="Bank account number..."
                                value={bankNumber}
                                onChange={(e) => setBankNumber(e.target.value)}
                            />
                        </div>

                        <div className="tab">
                            <label>Bank Name</label>
                            <br />
                            <input
                                type="text"
                                placeholder="Bank name..."
                                value={bankName}
                                onChange={(e) => setBankName(e.target.value)}
                            />
                        </div>

                            <div className="tab">
                                <label>Referred By</label>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Reffered by..."
                                    value={referredBy}
                                    onChange={(e) => setReferredBy(e.target.value)}
                                />
                            </div>

                            <input
                                type="hidden"
                                placeholder="Net worth..."
                                value={netWorth}
                                onChange={(e) => setNetWorth(e.target.value)}
                            />

                            <input
                                type="text"
                                placeholder="Referred by id..."
                                value={referredById}
                                onChange={(e) => setReferredById(e.target.value)}
                                hidden
                            />

                            <input
                                type="text"
                                placeholder="Referred by email..."
                                value={referredByEmail}
                                onChange={(e) => setReferredByEmail(e.target.value)}
                                hidden
                            />

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

                        {/* <div className="tab">
                            <label>Confirm Password</label>
                            <br />
                            <input
                                type="password"
                                placeholder="Confirm password..."
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div> */}

                        <div className="button tab">
                            <button onClick={() => PostData()}>
                                Sign up →
                            </button>
                        </div>

                        <div className="tab extras">
                            <div>Have an account? <Link to='/brokers-signin'>Sign in</Link></div>
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

                <Footer />
            </div>
        </div>
    )
}

export default BrokersDashboard
