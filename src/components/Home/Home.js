import React, { useEffect } from 'react';
import './Home.css'
import Socials from './Socials';
import Typical from 'react-typical'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const Home = () => {
    const { ref, inView } = useInView();
    const animation = useAnimation()
    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    type: 'ease-in'
                }
            })
        }
        if (!inView) {
            animation.start({
                y: -200,
                opacity: 0,
            })
        }
    }, [inView, animation])


    return (
        <div ref={ref}>
            <motion.section className='home container' id='home'
                animate={animation}
            >
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
            </motion.section>
        </div>
    )
}

export default Home
