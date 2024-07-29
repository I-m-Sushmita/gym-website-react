import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Header from './Header/Header'
import img1 from '../../image/img1.jpg'
const Hero = () => {
  return (
    <div className="hero" id='home'>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div><span>Ideal Body</span></div>

          <div>
            <span>
              In here we will help you to shape and build your ideal body
            </span>
          </div>
        </div>
        <div className="figures">
          <div><span>+1000</span><span>members joined</span></div>
          <div><span>+20</span><span>expert coaches</span></div>
          <div><span>+30</span><span>fitness programs</span></div>
        </div>
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
        <FontAwesomeIcon icon={faHeart} />
          <span>Heart rate</span>
          <span> 116 bpm</span>
        </div>
        <img src={img1} alt="hero-img" className='hero-image' />
      </div>
    </div>
  )
}
export default Hero
