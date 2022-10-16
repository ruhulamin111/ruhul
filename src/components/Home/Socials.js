import React from 'react'
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

function Socials() {
    return (
        <div className='home_socials'>
            <a href="https://www.facebook.com/ruhuljuwel111/" target='_blank' className="home_socials_link" rel="noreferrer"><FaFacebook /></a>
            <a href="linkedin.com/in/ruhul-juwel-3ba731241" target='_blank' className="home_socials_link" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/ruhulamin111" target='_blank' className="home_socials_link" rel="noreferrer"><FaGithub /></a>
            <a href="linkedin.com/in/ruhul-juwel-3ba731241" target='_blank' className="home_socials_link" rel="noreferrer"><FaTwitterSquare /></a>
            <a href="linkedin.com/in/ruhul-juwel-3ba731241" target='_blank' className="home_socials_link" rel="noreferrer"><FaInstagramSquare /></a>
        </div>
    )
}

export default Socials
