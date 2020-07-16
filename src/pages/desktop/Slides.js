import React, { Component } from 'react'
import './css/Slides.scss'

import realEstate from '../../images/slides/real-estate.jpg'
import consultants from '../../images/slides/consultants.jpg'
import architect from '../../images/slides/architect.webp'

let classNames = require('classnames')

export class Slides extends Component {
  constructor(props) {
    super(props);
    
    this.IMAGE_PARTS = 4;
    
    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;
    
    this.state = { 
      activeSlide: -1, 
      prevSlide: -1, 
      sliderReady: false,
      slides: [
        {
          city: 'We are home to some of the best properties in Nigeria. Start your property ownership journey with us now.',
          img: 'https://collections.aoestatechariots.com/slides/real-estate.jpg',
        },
        {
          city: 'Join our fast growing community of real estate consultants making money by the minute',
          img: 'https://collections.aoestatechariots.com/slides/consultants.jpg',
        },
        {
          city: 'Are you a developer? You are in safe hands. Register with us and have fast sales of your properties',
          img: 'https://collections.aoestatechariots.com/slides/architect.jpg',
        },
      ]
    };
  }
  
  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }
  
  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }
  
  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }
  
  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.state.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }
  
  render() {
    const { activeSlide, prevSlide, sliderReady, slides } = this.state;
    return (
      <div className={classNames('slider', { 's--ready': sliderReady })}>
      <div className="background-slide-overlay"></div>
        {/* <p className="slider__top-heading">Travelers</p> */}
        <div className="slider__slides">
          {this.state.slides.map((slide, index) => (
            <div
              className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index  })}
              key={slide.city}
              >
              <div className="slider__slide-content">
                <h3 className="slider__slide-subheading">{slide.city}</h3>
                {/* <p className="slider__slide-readmore">read more</p> */}
              </div>
              <div className="slider__slide-parts">
                {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                  <div className="slider__slide-part" key={i}>
                    <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="slider__control" onClick={() => this.changeSlides(-1)} />
        <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
      </div>
    );
  }
}

export default Slides
