import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer id='contact'>
            <div className="contactET">
                <div className="contactPhone">
                    <i className="fa fa-phone contactIcon"></i>
                    <a href="tel:+4074000222">074 000 222</a>
                </div>
                <div className="contactEmail">
                    <i className="fa fa-envelope contactIcon"></i>
                    <a href="mailto:sebastian.v.pavel@gmail.com">sebastian.v.pavel@gmail.com</a>
                </div>
            </div>
            <form className="contactForm">
                <div className="formContainer">
                <label>Name</label>
                <input type="text" placeholder='Please enter name.'/>
                </div>
                <div className="formContainer">
                <label>Email</label>
                <input type="text" placeholder='Please enter email address.'/>
                </div>
                <div className="formContainer">
                <label>Phone number</label>
                <input type="text" placeholder='Please enter phone number.'/>
                </div>
                <div className="formContainer">
                <label>Message</label>
                <textarea placeholder='Please enter your message.' className='textForm'></textarea>
                </div>
                <div className="formContainer">
                <button className="submitMessage">Send</button>
                </div>
            </form>
            <div className="socialSpace">
                <i className='fa-brands fa-facebook socialIcon'></i>
                <i className='fa-brands fa-instagram socialIcon'></i>
                <i className='fa-brands fa-pinterest socialIcon'></i>
            </div>
        </footer>
    )
}
