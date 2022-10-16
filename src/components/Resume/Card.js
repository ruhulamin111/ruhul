import React from 'react'

const Card = ({ icon, year, title, desc }) => {
    return (
        <div className='timeline_item'>
            <i>{icon}</i>
            <span className="timeling_date">{year}</span>
            <h3 className="timeline_title">{title}</h3>
            <p className="timeline_text">{desc}</p>
        </div>
    )
}

export default Card
