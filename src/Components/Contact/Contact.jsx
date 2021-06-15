import React from 'react'
import './Contact.css'
import Header from '../Header/Header'
import Footerlink from '../Footerlink/Footerlink'
import contactVector from '../../assets/assets/contact_anime.png'
import github from './../../assets/assets/gh.png'
import linkedin from './../../assets/assets/li.png';
import instagram from './../../assets/assets/in.png';
import facebook from './../../assets/assets/fbb.png';


const Contact=()=>{
    return (
        <div className='section-container'>
        <Header heading='Get in touch.' 
        details='Interested to collaborate? Feel free to drop me an email.'
        />

        <div className="contact-form-container">
            <form className="contact-form" 
                   action="https://formspree.io/f/xeqvkknl"
                   method="POST">
                <input
                    type="email"
                    placeholder="Your Email ID"
                    name="_replyto"
                    className="input-box email-input" 
                    autoComplete="off"/>

                    <textarea
                        type="text"
                        placeholder="Your message"
                        name="message"
                        className="input-box body-input"
                        autoComplete="off" />

                        <button type="submit" className="contact-btn">Send Email</button>

            </form>
        </div>

        <div className="social-icons-container">
            <a href="https://github.com/Arjunraveendran1997" className="social-icon">
                <img src={github} alt="github" />
            </a>
            <a href="https://www.facebook.com/Arjunkvl/" className="social-icon">
                <img className='facebook' src={facebook} alt="facebook" />
            </a>
            <a href="https://www.linkedin.com/in/arjun-ravi-ba2a15209/" className="social-icon">
                <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/arjun_ravii/" className="social-icon">
                <img src={instagram} alt="instagram" />
            </a>
        </div>

        <Footerlink phrase='Read more' link='About me.' toadress='/about' />
        
        <div className="vector-frame">
            <img src={contactVector} alt="About" className="about-vector" />
        </div>
        
        </div>
    )
}

export default Contact