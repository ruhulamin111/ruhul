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
                        <p className="about_description">I'm continuously learning web development. Being a senior web developer is my aim and in this field I am passionate.                        </p>
                        <a href="Fullstack-Ruhul-Resume.pdf" download='Fullstack-Ruhul-Resume.pdf' className="btn">Resume</a>
                    </div>
                    <div className="about_skills grid">
                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name ">JavaScript</h3>
                                <span className="skilss_number ">80%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage javascript"></span>
                            </div>
                        </div>
                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">React</h3>
                                <span className="skilss_number">90%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage react"></span>
                            </div>
                        </div>
                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">Node.js</h3>
                                <span className="skilss_number">75%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage node"></span>
                            </div>
                        </div>
                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">Next.js</h3>
                                <span className="skilss_number">70%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage next"></span>
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
