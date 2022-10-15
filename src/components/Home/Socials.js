import React from 'react'
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

function Socials() {
    return (
        <div className='home_socials'>
            <a href="#" target='_blank' className="home_socials_link"><FaFacebook /></a>
            <a href="#" target='_blank' className="home_socials_link"><FaGithub /></a>
            <a href="#" target='_blank' className="home_socials_link"><FaLinkedin /></a>
            <a href="#" target='_blank' className="home_socials_link"><FaTwitterSquare /></a>
            <a href="#" target='_blank' className="home_socials_link"><FaInstagramSquare /></a>
        </div>
    )
}

export default Socials
