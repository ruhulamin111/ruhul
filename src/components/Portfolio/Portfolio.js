import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import './Portfolio.css'
import LinkIcon from '@mui/icons-material/Link';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updateItems = Menu.filter((selectElement) => {
            return selectElement.category === categoryItem;
        })
        setItems(updateItems)
    };
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
                y: 400,
                opacity: 0,
            })
        }
    }, [inView, animation])

    return (
        <div ref={ref}>
            <motion.section animate={animation}
                className='work container section' id='work'>
                <h2 className='section-title'>Recent Project</h2>
                <div className="work_filters">
                    <span className="work_item" onClick={() => setItems(Menu)}>All Project</span>
                    <span className="work_item" onClick={() => filterItem('Fullstack')}>Full Stack</span>
                    <span className="work_item" onClick={() => filterItem('UI/UX')}>UI/UX</span>
                    <span className="work_item" onClick={() => filterItem('Frontend')}>Frontend</span>
                </div>
                <div className="work_container grid">
                    {items.map((element, i) => {
                        const { image, title, category } = element;
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
            </motion.section>

        </div>
    )
}

export default Portfolio