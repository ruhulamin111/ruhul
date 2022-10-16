import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <section className='contact container sectio ' id='contact'>
            <h2 className="section-title">Contact</h2>
            <div className="contact_container grid">
                <div className="contact_info">
                    <h3 className="contact_title">Get in a Touch</h3>
                    <p className="contact_details">Phone: <span>+8801300778565</span></p>
                    <p className="contact_details">Email: <span>ruhuljuwel111@gmail.com</span></p>
                    <p className="contact_details">Address: <span>Dhaka, Bangladesh.</span></p>
                </div>
                <form action="" className="contact_form">
                    <div className="contact_form_group">
                        <div className="contact_form_div">
                            <input type="text" className="contact_form_input" placeholder='Insert your name' />
                        </div>
                        <div className="contact_form_div">
                            <input type="email" className="contact_form_input" placeholder='Insert your email' />
                        </div>
                        <div className="contact_form_div">
                            <input type="text" className="contact_form_input" placeholder='Insert your subject' />
                        </div>
                        <div className="contact_form_div  contact_form_area">
                            <textarea name="" id="" cols="30" rows="10" className='contact_form_input' placeholder='Write your message' />
                        </div>
                    </div>
                    <button className="btn">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact