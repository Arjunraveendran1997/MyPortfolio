import React from 'react'
import {Link } from 'react-router-dom'
import './Footerlink.css'

const Footerlink=({phrase, link,toadress})=>{

    return (
        <div className='footer-link'>
            {phrase}
            <Link to={toadress} className='footer-link-element'>
                {link}
            </Link>

        </div>
    )
}

export default Footerlink