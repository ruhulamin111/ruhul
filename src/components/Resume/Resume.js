import React from 'react'
import Card from './Card'
import './Resume.css'
import Data from './Data'


const Resume = () => {
    return (
        <section className='resume container section' id='resume'>
            <h2 className="section-title">Experience</h2>

            <div className="resume_container grid">
                <div className="timeline grid">
                    {Data.map((value, id) => {
                        if (value.category === "education") {
                            return (
                                <Card key={id} title={value.title} icon={value.icon} year={value.year} desc={value.desc} />
                            )
                        }
                    })}
                </div>

                <div className="timeline grid">
                    {Data.map((value, index) => {
                        if (value.category === "experience") {
                            return (
                                <Card key={index} title={value.title} icon={value.icon} year={value.year} desc={value.desc} />
                            )
                        }
                    })}
                </div>
            </div>

        </section>
    )
}

export default Resume