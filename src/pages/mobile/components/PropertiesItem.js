import React from 'react'

import './css/content.css'

import {
    Link
} from 'react-router-dom'

const PropertiesItem = props => {
    return (
        <div className="properties-item-mobile">
            <Link className="link" to="/properties-details">
            <div className="container" key={props.key}>
                <div
                    style={{
                        backgroundImage: `url(${props.image})`,
                        backgroundSize:`cover`,
                        backgroundPosition:`center`
                    }}
                    className="image"
                ></div>

                <div className="text">
                    <h6>{props.propertyName}</h6>
                    <p className="description">{props.description}</p>
                    <p className="location">{props.location}</p>
                </div>
            </div>
            </Link>
            
        </div>
    
    )
}

export default PropertiesItem
