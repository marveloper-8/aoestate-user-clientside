import React from 'react'

import house from '../../images/house.jpg'

import ContentProperties from './components/ContentProperties'

import './css/general.css'
// import './css/how-we-work.css'

import Navigation from './Navigation'
import Footer from './Footer'

function Estates() {
    return (
        <div className="how-we-work">
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
                    <div className="background-overlay"></div>
                    <h1 className="text">
                        <span className="primary">Estate Products/Projects</span>
                    </h1>
                </div>


                <ContentProperties />

                <Footer />
            </div>
        </div>
    )
}

export default Estates
