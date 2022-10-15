import React from 'react';
import './About.css'
import img from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox';


const About = () => {
    return (
        <section className='about section container' id='about'>
            <h2 className="section-title">About Me</h2>
            <div className="about_container grid">
                <img src={img} alt="" className="about_img" />
                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, accusamus unde recusandae suscipit odio ratione ab hic accusantium aut labore!</p>
                        <a href="#" className="btn">Resume</a>
                    </div>
                    <div className="about_skills grid">
                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name ">Development</h3>
                                <span className="skilss_number ">90%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage development"></span>
                            </div>
                        </div>
                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">UI/UX Design </h3>
                                <span className="skilss_number">80%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage ui_design"></span>
                            </div>
                        </div>
                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">Frontend</h3>
                                <span className="skilss_number">85%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage frontend"></span>
                            </div>
                        </div>
                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">MERN</h3>
                                <span className="skilss_number">60%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage mern"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutBox />
        </section>
    )
}

export default About
