import React from 'react'
import Header from '../Header/Header'
import Footerlink from '../Footerlink/Footerlink'
import {skillList} from '../../assets/assets/skillsData'
import './Skills.css'
import Skillcard from './Skillcard'
import skillsVector from '../../assets/assets/skills_vector.png'

const Skills=()=> {
    return (
        <div className='section-container'>
            <Header 
            heading='My Skills'
            details="Passionate about new technologies, I keep exploring new stuff. Here's the tech stack I've worked with!" />

            <div className="skill-card-container">
                {
                    skillList.map(({skillName,skillUrl}) =>{
                        return <Skillcard skillName={skillName} skillUrl={skillUrl} />
                    })
                }
            </div>

            <Footerlink phrase='Get in'  link='Touch.' toadress='/contact' />
           <div className="skills-vector-frame">
               <img src={skillsVector} alt="skillsimg" className="skills-vector" />
           </div>

        </div>
    )
}

export default Skills
