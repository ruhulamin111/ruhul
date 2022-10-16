import React from 'react'
import { FaBalanceScale, FaCoffee, FaProjectDiagram } from 'react-icons/fa'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

const AboutBox = () => {
    return (
        <div className='about_boxes grid'>
            <div className="about_box">
                <i className='about_icon'><AccountTreeIcon /></i>
                <div>
                    <h3 className='about_title'>10+</h3>
                    <span className="about_subtitle">Complete Project</span>
                </div>
            </div>
            <div className="about_box">
                <i className='about_icon'><GroupWorkIcon /></i>
                <div>
                    <h3 className='about_title'>20+</h3>
                    <span className="about_subtitle">Group Work</span>
                </div>
            </div>
            <div className="about_box">
                <i className='about_icon'><DesignServicesIcon /></i>
                <div>
                    <h3 className='about_title'>25+</h3>
                    <span className="about_subtitle">Design Work</span>
                </div>
            </div>
            <div className="about_box">
                <i className='about_icon'><LabelImportantIcon /></i>
                <div>
                    <h3 className='about_title'>5+</h3>
                    <span className="about_subtitle">New Technology</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox
