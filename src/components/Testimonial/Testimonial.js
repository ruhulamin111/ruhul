import React from 'react'
import './Testimonial.css'
import img1 from '../../assets/avatar-1.svg'
import img2 from '../../assets/avatar-2.svg'
import img3 from '../../assets/avatar-3.svg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
    {
        id: 1,
        image: img1,
        title: 'John Doe',
        subtitle: 'Product Designer at Deriable',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia iure ipsa ullam amet nam enim laboriosam repellendus exercitationem doloribus recusandae!'
    },
    {
        id: 2,
        image: img2,
        title: 'John Doe',
        subtitle: 'Product Designer at Deriable',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia iure ipsa ullam amet nam enim laboriosam repellendus exercitationem doloribus recusandae!'
    },
    {
        id: 3,
        image: img3,
        title: 'John Doe',
        subtitle: 'Product Designer at Deriable',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia iure ipsa ullam amet nam enim laboriosam repellendus exercitationem doloribus recusandae!'
    }
]


const Testimonial = () => {
    return (
        <section className='testimonial container section'>
            <h2 className="section-title">Client and Review</h2>

            <Swiper className="testimonial_container grid"
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                pagination={{ clickable: true }} >
                {
                    data.map(({ id, title, subtitle, comment, image }) => {
                        return (
                            <SwiperSlide className="testimonial_item" key={id}>
                                <div className="thumb">
                                    <img src={image} alt="" />
                                </div>
                                <h3 className="testimonial_title">{title}</h3>
                                <span className="subtitle">{subtitle}</span>
                                <div className="comment">{comment}</div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonial