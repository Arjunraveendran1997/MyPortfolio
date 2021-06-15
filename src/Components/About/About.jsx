import React from 'react'
import Footerlink from '../../Components/Footerlink/Footerlink'
import Header from '../Header/Header'
import aboutVector from './../../assets/assets/about_vector.png'
import aboutAnime from './../../assets/assets/about_anime.gif'
import './About.css'
const About=()=>{


    return(
        <div className='section-container'>
            <Header
                heading='About Me'
                details='Frontend Web Developer| Freelancer| Student| React Developer' />
                 <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Front End Web Developer</h3>
                    <p className='about-details'>
                    Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.{' '}
                        
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>React Developer</h3>
                    <p className='about-details'>
                    React (also known as React. js or ReactJS) is an open-source front-end JavaScript library for building user interfaces or UI components.{' '}
                       
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Freelance Web Developer</h3>
                    <p className='about-details'>
                        I also work as a freelancer in web developing.
                        To make your own projects, just contact me using following social medias.{' '}
                       
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

                <Footerlink 
                phrase='Check out my'
                link='Projects!'
                toadress='./projects'
                />

                <div className="vector-frame">
                    <img src={aboutVector} alt="vector-img" className='about-vector' />
                </div>
        </div>
    )
}

export default About;