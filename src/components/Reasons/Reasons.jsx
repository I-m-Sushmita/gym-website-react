import React from 'react'
import './Reasons.css'
import reimg1 from '../../image/reimg1.jpg'
import reimg2 from '../../image/reimg2.jpg'
import reimg3 from '../../image/reimg3.jpg'
import reimg5 from '../../image/reimg5.jpg'
import avatar from '../../image/avatar.png'
import nike from '../../image/nike.jpg'
import on from '../../image/on.webp'
const Reasons = () => {
    return (
        
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={reimg1} alt="reimg1" />
                <img src={reimg2} alt="reimg2" />
                <img src={reimg3} alt="reimg3" />
                <img src={reimg5} alt="reimg4" />
            </div>
            <div className="right-r">
                <span>Some Reasons</span>
                <div>
                    <span className='stroke-text'>Why </span>
                    <span>choose us?</span>
                </div>
                <div  className='details-r'>
                    <div>
                        <i class="fa-regular fa-circle-check"></i>
                        <span>OVER 20+ EXPERT COACHES</span>
                    </div>
                    <div>
                        <i class="fa-regular fa-circle-check"></i>
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <i class="fa-regular fa-circle-check"></i>
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <i class="fa-regular fa-circle-check"></i>
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>
                <span style={{color:"var(--gray)",
                    fontWeight:"bold",
                 }}>
                    OUR PARTNERS
                </span>
                <div className="partners">
                    <img src={avatar} alt="avatar"/>
                    <img src={nike} alt="nike" />
                    <img src={on} alt="on" />
                </div>
            </div>
        </div>
        
    )
}

export default Reasons
