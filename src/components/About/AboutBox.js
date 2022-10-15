import React from 'react'
import { FaCoffee, FaProjectDiagram } from 'react-icons/fa'

const AboutBox = () => {
    return (
        <div className='about_boxes grid'>
            <div className="about_box">
                <i className='about_icon'><FaProjectDiagram /></i>
                <div>
                    <h3 className='about_title'>26</h3>
                    <span className="about_subtitle">Project</span>
                </div>
            </div>

            <div className="about_box">
                <i className='about_icon'><FaCoffee /></i>
                <div>
                    <h3 className='about_title'>60</h3>
                    <span className="about_subtitle">Satisfiction client</span>
                </div>
            </div>

            <div className="about_box">
                <i className='about_icon'><FaCoffee /></i>
                <div>
                    <h3 className='about_title'>800</h3>
                    <span className="about_subtitle">Coffee</span>
                </div>
            </div>


        </div>
    )
}

export default AboutBox
