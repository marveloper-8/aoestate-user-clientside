import React, { Component } from 'react'
import './css/popup.css'

class PopupContent extends Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
            <span className="close-button" onClick={this.props.closePopup}>&times;</span>
          </div>
          <div onClick={this.props.closePopup} className="popup-background"></div>
        </div>
      );
    }
}

export class Popup extends Component {
    constructor() {
        super();
        this.state = {
        showPopup: false
        };
    }

    togglePopup() {
        this.setState({
        showPopup: !this.state.showPopup
        });
    }

    render() {
        return (
        <div className='app'>
            <button className="brochure" onClick={this.togglePopup.bind(this)}>INTERESTED IN PROPERTY</button>
    
            {this.state.showPopup ? 
            <PopupContent
                text='Close Me'
                closePopup={this.togglePopup.bind(this)}
            />
            : null
            }
        </div>
        );
    }
}

export default Popup
