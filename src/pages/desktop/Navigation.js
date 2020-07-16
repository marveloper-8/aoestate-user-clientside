import React, {useContext} from 'react'

import {
    Link,
    useHistory
} from 'react-router-dom'

import {UserContext} from './App'

import './css/navigation.css'

import logo from '../../images/logo-two.png'

const Navigation = () => {
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()

    const activityButtons = () => {
        if(state){
            return [
                <Link className="link" to='/developers-hub'>
                    <button className="upload">DEVELOPER HUB</button>
                </Link>,
                <Link className="link" to='/brokers'>
                    <button className="brokers">REALTOR HUB</button>
                </Link>,
                <button 
                    className="logout"
                    onClick={() => {
                        localStorage.clear()
                        dispatch({type: "CLEAR"})
                        history.push('/brokers-signin')
                    }}
                >LOGOUT</button>
            ]
        } else{
            return [
                <Link className="link" to='/developers-hub'>
                    <button className="upload">DEVELOPERS HUB</button>
                </Link>,
                <Link className="link" to='/brokers-signin'>
                    <button className="brokers">REALTORS HUB</button>
                </Link>
            ]
        }
    }

    return (
        <div className="navigation-desktop">
            <Link className="link-items" to={state ? "/sign-in" : "/"}>
                <img 
                    src={logo} 
                    alt="AO Estate's Logo" 
                    className="logo" 
                />
            </Link>

            <div className="links">
                <span className="active">
                    <Link className="link-items" to='/'>Home</Link>
                </span>
                <span>
                    <Link className="link-items" to='/about'>About Us</Link>
                </span>
                <span>
                    <Link className="link-items" to='/how-we-work'>How We Work</Link>
                </span>
                <span>
                    <Link className="link-items" to='/estates'>Estate Products/Projects</Link>
                </span>
                <span>
                    <Link className="link-items" to='/properties'>Properties</Link>
                </span>
                <span>
                    <Link className="link-items" to='/customer-care'>Customer Care</Link>
                </span>
            </div>

            <div className="activity-buttons">
                {activityButtons()}
            </div>
        </div>
    )
}

export default Navigation
