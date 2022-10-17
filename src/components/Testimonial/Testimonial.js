import React from 'react'
import './Testimonial.css'
import img1 from '../../assets/avatar-1.svg'
import img2 from '../../assets/avatar-2.svg'
import img3 from '../../assets/avatar-3.svg'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
    {
        id: 1,
        image: img1,
        title: 'Arifin Shakti',
        subtitle: 'Senior Web Developer',
        comment: 'Create a Google My Business Post. These are like mini advertisements within your Google profile that give people an idea of what you sell or the service you provide.'
    },
    {
        id: 2,
        image: img2,
        title: 'John Knedy',
        subtitle: 'Chief Requirter',
        comment: 'A multi-page website has different advantages than a single-page website. The biggest advantage is, of course, that you can add multiple pages to your website.'
    },
    {
        id: 3,
        image: img3,
        title: 'Mahbub Chawdhury',
        subtitle: 'CEO of PHero',
        comment: 'By encouraging customers to provide you with reviews and testimonials, you can better understand your audiences pain points, prove your value to prospects.'
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