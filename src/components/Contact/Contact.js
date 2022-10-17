import React from 'react'
import './Contact.css'

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const subject = event.target.subject.value;
        const message = event.target.message.value;
        console.log('first')
    }

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
                <form onSubmit={handleSubmit} className="contact_form">
                    <div className="contact_form_group">
                        <div className="contact_form_div">
                            <input name='name' type="text" className="contact_form_input" placeholder='Insert your name' required />
                        </div>
                        <div className="contact_form_div">
                            <input name='email' type="email" className="contact_form_input" placeholder='Insert your email' required />
                        </div>
                        <div className="contact_form_div">
                            <input name='subject' type="text" className="contact_form_input" placeholder='Insert your subject' required />
                        </div>
                        <div className="contact_form_div  contact_form_area">
                            <textarea name="message" id="" cols="30" rows="10" className='contact_form_input' placeholder='Write your message' required />
                        </div>
                    </div>
                    <input type="submit" value="Send Message" className='btn' />
                </form>
            </div>
        </section>
    )
}

export default Contact