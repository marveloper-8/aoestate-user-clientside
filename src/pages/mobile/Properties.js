import React from 'react'

import house from '../../images/house.jpg'

import ContentPropertiesGeneral from './components/ContentPropertiesGeneral'

import './css/general.css'
// import './css/how-we-work.css'

import Navigation from './Navigation'
import Footer from './Footer'

function Properties() {
    return (
        <div className="how-we-work">
            <div className="mobile">
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
                        <span className="primary">Properties</span>
                    </h1>
                </div>


                <ContentPropertiesGeneral />

                <Footer />
            </div>
        </div>
    )
}

export default Properties
