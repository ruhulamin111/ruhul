import React, { useState } from 'react'
import { FaLink } from 'react-icons/fa'
import Menu from './Menu'
import './Portfolio.css'

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updateItems = Menu.filter((selectElement) => {
            return selectElement.category === categoryItem;
        })
        setItems(updateItems)
    };

    return (
        <section className='work container section' id='work'>
            <h2 className='section-title'>Recent Works</h2>
            <div className="work_filters">
                <span className="work_item" onClick={() => setItems(Menu)}>Everything</span>
                <span className="work_item" onClick={() => filterItem('Creative')}>Creative</span>
                <span className="work_item" onClick={() => filterItem('Art')}>Art</span>
                <span className="work_item" onClick={() => filterItem('Web Design')}>Web Desing</span>
                <span className="work_item" onClick={() => filterItem('Branding')}>Branding</span>
                <span className="work_item" onClick={() => filterItem('Logo')}>Logo</span>
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