import React from 'react'
import './Projects.css'
import Header from '../Header/Header'
import Footerlink from '../Footerlink/Footerlink'
import {projectsData } from '../../assets/assets/projectsData'
import Projectcards from './Projectcards'

const Projects=()=> {
    return (
        <div className='section-container'>
            <Header heading='My Projects' 
             details="Here are a few cool things I've worked on, do check them out!" />
                <div className="project-cards-container">
                    {
                        projectsData.map(({projectName,projectDescription,imageUrl,projectUrl})=>{
                            return <Projectcards
                            projectName={projectName}
                            projectDescription={projectDescription}
                            imageUrl={imageUrl}
                            projectUrl={projectUrl}


                            />
                        })
                    }
                </div>
             <Footerlink phrase='Checkout' link='My skills' toadress='/skills' />
        </div>
    )
}

export default Projects 
