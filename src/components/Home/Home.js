import React from 'react';
import './Home.css'
import Socials from './Socials';
import Typical from 'react-typical'

const Home = () => {
    return (
        <section className='home container' id='home'>
            <div className='intro'>
                <div className='profile'>
                    <div className="profile-background"> </div>
                </div>
                <h1 className='home_name'>Ruhul Juwel</h1>
                <span className='home_education'>
                    <Typical
                        steps={['Passoniate Web Developer', 3000, 'MERN Developer', 3000]}
                        loop={Infinity}
                    />
                </span>
                <Socials />
                <a href="Fullstack-Ruhul-Resume.pdf" download='Fullstack-Ruhul-Resume.pdf' className="btn">Hire Me</a>
            </div>
        </section>
    )
}

export default Home
