import React, {useContext, useState} from 'react'

import {
    Link,
    useHistory
} from 'react-router-dom'

import {UserContext} from './App'

import './css/navigation.css'

import logo from '../../images/logo-two.png'
import menu from '../../icons/menu.svg'

const Navigation = () => {
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()

    const [condition, setCondition] = useState(false)

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
        <div className="navigation-mobile">

            <div className="logo">
            <Link className="link-items" to={state ? "/sign-in" : "/"}>
                <img 
                    src={logo} 
                    alt="AO Estate's Logo" 
                />
            </Link>
            </div>

            <div className="menu">
                <img 
                    onClick={() => setCondition(!condition)}
                    src={menu} 
                    alt="Menu" 
                />
            </div>

            <div className={condition ? "menu-panel menu-toggled" : "menu-panel"}>
                <div className="close">
                    <span onClick={() => setCondition(!condition)}>
                        &times;
                    </span>
                </div>

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
        </div>
    )
}

export default Navigation
