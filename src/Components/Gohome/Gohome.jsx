import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import homeIconWhite from './../../assets/assets/home_white.png'
import homeIconBlack from './../../assets/assets/home_black.png'
import './Gohome.css'

class Gohome extends Component{
    navigateTohome=()=>{
        const {history}= this.props;
        history.push('/')
    }
    render (){
        const {location} = this.props;
        const whiteBtn= location.pathname === '/'
        return (
            <button
            onClick={this.navigateTohome}
            className={`go-home-btn ${
                whiteBtn ? 'white-bkg' : 'gradient-bkg'
            }`}
            >
                <img
                    className='home-icon'
                    src={whiteBtn ? homeIconBlack : homeIconWhite}
                    alt='blackhomecon'
                    />
            </button>
        )
    }
}

export default withRouter(Gohome)