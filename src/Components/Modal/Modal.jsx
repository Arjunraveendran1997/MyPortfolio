import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal=({closemodal})=>{

    return ReactDOM.createPortal(
        <div onClick={closemodal} className="modal-overlay">
           <div onClick={(e)=> e.stopPropagation()} className="modal-container">
               <div className="upper-section">
                    <h1>WELCOME TO PORTFOLIO!</h1>
                    <p onClick={closemodal} className='close'>&times;</p>
               </div>
               <div className="middle-section">
                   <h3>I am Arjun Ravi,Front End Web Developer</h3>
                   <p>This is the portfolio about my Projects,Skills and services</p>
                   <p>You can contact me using email and other social media networks</p>
                   
               </div>
               <div className="bottom-section">
               <a onClick={closemodal} className="modal-btn btn-red">Close</a>
                    <a href="https://github.com/Arjunraveendran1997" target='_blank' rel='noreferred' className='modal-btn btn-green'>Connect me using Github</a>
               </div>
           </div>
        </div>,
        (document.getElementById('modal'))
    )
}

export default Modal