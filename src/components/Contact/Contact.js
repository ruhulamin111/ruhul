import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <section className='contact container sectio ' id='contact'>
            <h2 className="section-title">Contact</h2>
            <div className="contact_container grid">
                <div className="contact_info">
                    <h3 className="contact_title">Lets talk everything</h3>
                    <p className="contact_details">Don't link form send me an email</p>
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