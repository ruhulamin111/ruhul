import React from 'react';
import './Home.css'
import me from '../../assets/avatar-1.svg'
import Socials from './Socials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className='home container' id='home'>
            <div className='intro'>
                <img src={me} alt=" " className='home_img' />
                <h1 className='home_name'> Ruhul Juwel</h1>
                <span className='home_education'>I have a MERN Developer</span>
                <Socials />
                <a href="#contact" className="btn">Hire Me</a>
                <ScrollDown />
            </div>
            {/* <Shapes /> */}
        </section>
    )
}

export default Home
