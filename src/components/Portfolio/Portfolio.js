import React, { useState } from 'react'
import { FaLink } from 'react-icons/fa'
import Menu from './Menu'
import './Portfolio.css'

const Portfolio = () => {
    const [items, setItems] = useState(Menu)

    return (
        <section className='work container section' id='work'>
            <h2 className='section-title'>Recent Works</h2>
            <div className="work_filters">
                <span className="work_item">Everything</span>
                <span className="work_item">Creative</span>
                <span className="work_item">Art</span>
                <span className="work_item">Web Desing</span>
                <span className="work_item">Branding</span>
                <span className="work_item">Logo</span>
            </div>
            <div className="work_container grid">
                {items.map((element, i) => {
                    const { id, image, title, category } = element;
                    return (
                        <div className="work_card" key={i}>
                            <div className="work_thumbnail">
                                <img src={image} alt="" className="work_img" />
                                <div className="work_mask"></div>
                            </div>
                            <span className="work_category">{category}</span>
                            <h3 className="work_title">{title}</h3>
                            <a href="" className="work_button">
                                <i className="work_button_icon"><FaLink /></i>
                            </a>

                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default Portfolio