import React, { useState } from 'react'
import { FaLink } from 'react-icons/fa'
import Menu from './Menu'
import './Portfolio.css'
import LinkIcon from '@mui/icons-material/Link';

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
            <h2 className='section-title'>Recent Project</h2>
            <div className="work_filters">
                <span className="work_item" onClick={() => setItems(Menu)}>All Project</span>
                <span className="work_item" onClick={() => filterItem('Fullstack')}>Full Stack</span>
                <span className="work_item" onClick={() => filterItem('UI/UX')}>UI/UX</span>
                <span className="work_item" onClick={() => filterItem('Frontend')}>Frontend</span>
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
                            <a href="https://github.com/ruhulamin111" target='_blank' rel='noreferrer' className="work_button">
                                <i className="work_button_icon"><LinkIcon /></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio