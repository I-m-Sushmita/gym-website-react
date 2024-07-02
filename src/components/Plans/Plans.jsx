import React from 'react'
import './Plans.css'
const Plans = () => {
    return (
        <div className="plans-container" id='plans'>
            <div className="programs-header">
                <span className='stroke-text'>ready to start</span>
                <span> your journey</span>
                <span className='stroke-text'>  now withus</span>
            </div>
            <div className="plans">
                <div className="plan">
                    < span className='plan-name'>
                        <i class="fa-solid fa-heart-circle-plus"></i> BASIC PLAN
                    </span>
                    <span className='plan-price'>
                        <i class="fa-solid fa-indian-rupee-sign"></i>
                        1000
                    </span>
                    <div className="features">
                        <div><i class="fa-regular fa-circle-check"></i>    1 hours of exercises</div>
                        <div><i class="fa-regular fa-circle-check"></i>    Free consultation to coaches</div>
                        <div><i class="fa-regular fa-circle-check"></i>    Acces to The Community</div>
                    </div>
                    <div><span>See more benefits <i class="fa-solid fa-arrow-right"></i> </span></div>
                    <button className="btn">Join Now</button>
                </div>
                <div className="plan">
                    <span className='plan-name'>
                        <i class="fa-solid fa-crown"></i> PREMIUM PLAN
                    </span>
                    <span className='plan-price'>
                        <i class="fa-solid fa-indian-rupee-sign"></i>
                        2000
                    </span>
                    <div className="features">
                        <div><i class="fa-regular fa-circle-check"></i>    2 hours of exercises</div>
                        <div><i class="fa-regular fa-circle-check"></i>    Free consultation to coaches</div>
                        <div><i class="fa-regular fa-circle-check"></i>    Acces to your personal locar</div>
                    </div>
                    <div><span>See more benefits <i class="fa-solid fa-arrow-right"></i> </span></div>
                    <button className="btn">Join Now</button>
                </div>
                <div className="plan">
                    <span className='plan-name'>
                        <i class="fa-solid fa-dumbbell"></i> PRO PLAN
                    </span>
                    <span className='plan-price'>
                        <i class="fa-solid fa-indian-rupee-sign"></i>
                        4000
                    </span>
                    <div className="features">
                        <div><i class="fa-regular fa-circle-check"></i>    3 hours of exercises</div>
                        <div><i class="fa-regular fa-circle-check"></i>    Free consultation to coaches</div>
                        <div><i class="fa-regular fa-circle-check"></i>    Free fitness merchandises</div>
                    </div>
                    <div><span>See more benefits <i class="fa-solid fa-arrow-right"></i> </span></div>
                    <button className="btn">Join Now</button>
                </div>
            </div>
        </div>
    )
}

export default Plans
