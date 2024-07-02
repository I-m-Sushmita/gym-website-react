import React from 'react'
import './Programs.css'
const programs = () => {
    return (
        <div className='programs' id='programs'>
            <div className="programs-header">
                <span className='stroke-text'>Explore our</span>
                <span>programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>
            <div className="programs-categories">
                <div className="category">
                    <i class="fa-solid fa-dumbbell"></i>
                    <span className="program-heading">Strength Training</span>
                    <span className="program-details">In this program,you are trained to improve your strength through many exercises.</span>
                    <span className="join-now">Join Now <i class="fa-solid fa-arrow-right"></i></span>
                </div>
                <div className="category">
                    <i class="fa-solid fa-person-running"></i>
                    <span className="program-heading">Cardio Training</span>
                    <span className="program-details">In this program,you are trained to do sequential moves in range of 20 and 30 minutes.</span>
                    <span className="join-now">Join Now <i class="fa-solid fa-arrow-right"></i></span>
                </div>
                <div className="category">
                    <i class="fa-solid fa-fire"></i>
                    <span className="program-heading">Fat Burning</span>
                    <span className="program-details">This program is suitable for you who wants to get rid of your fat and lose their weight.</span>
                    <span className="join-now">Join Now <i class="fa-solid fa-arrow-right"></i></span>
                </div>
                <div className="category">
                    <i class="fa-solid fa-heart-pulse"></i>
                    <span className="program-heading">Health Fitness</span>
                    <span className="program-details">This program is designed for those who exercise only for their body fitness not body building.</span>
                    <span className="join-now">Join Now<i class="fa-solid fa-arrow-right"></i></span>
                </div>
            </div>
        </div>
    )
}

export default programs
