import React from 'react'
import { FaBalanceScale, FaCoffee, FaProjectDiagram } from 'react-icons/fa'

const AboutBox = () => {
    return (
        <div className='about_boxes grid'>
            <div className="about_box">
                <i className='about_icon'><FaProjectDiagram /></i>
                <div>
                    <h3 className='about_title'>20+</h3>
                    <span className="about_subtitle">Project</span>
                </div>
            </div>
            <div className="about_box">
                <i className='about_icon'><FaCoffee /></i>
                <div>
                    <h3 className='about_title'>50+</h3>
                    <span className="about_subtitle">Satisfiction Client</span>
                </div>
            </div>
            <div className="about_box">
                <i className='about_icon'><FaCoffee /></i>
                <div>
                    <h3 className='about_title'>80+</h3>
                    <span className="about_subtitle">Group Project</span>
                </div>
            </div>
            <div className="about_box">
                <i className='about_icon'><FaBalanceScale /></i>
                <div>
                    <h3 className='about_title'>100+</h3>
                    <span className="about_subtitle">Customers</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox
