import React from 'react'
import './Services.css'
import img1 from '../../assets/service-1.svg'
import img2 from '../../assets/service-2.svg'
import img3 from '../../assets/service-3.svg'

const data = [
    {
        id: 1,
        image: img1,
        title: "UI/UX Design",
        description: 'It deals with its specialization in web designing, application designing and also have the features of usability testing, prototype creations.'
    },
    {
        id: 2,
        image: img2,
        title: "MERN Development",
        description: 'MERN STACK is a free and open-source JavaScript software stack for building dynamic Websites and Web-Applications. The MERN Stack is one the popular JavaScript Stacks.'
    },
    {
        id: 3,
        image: img3,
        title: "Frontend Focus Fullstack",
        description: 'A front-end web creator executes visual ingredients, which users detect and interact with. Back-end network creators, who are in charge of server-side petition logic and combining the work performed by front-end developers, usually encourage them.'
    }
]


const Services = () => {
    return (
        <section className='services container section ' id='services'>
            <h2 className="section-title">Services</h2>
            <div className="services_container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services_card" key={id}>
                            <img src={image} alt="" className="services_img" />
                            <h3 className="services_title">{title}</h3>
                            <p className="services_description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services
