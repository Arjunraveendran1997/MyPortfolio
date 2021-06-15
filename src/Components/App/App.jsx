import React from 'react'
import './App.css'
import {HashRouter, Route} from 'react-router-dom'

import Home from './../Home/Home'
import About from './../About/About'
import Projects from './../Projects/Projects'
import Skills from './../Skills/Skills'
import Contact from './../Contact/Contact'
import Navbar from '../Navbar/Navbar'
import Gohome from '../Gohome/Gohome'


const App=()=> {



    return (
        <div>
           <HashRouter>
           <div>
               <Navbar />
               <Route path='/' exact component={Home} />
               <Route path='/about' component={About} />
               <Route path='/projects' component={Projects} />
               <Route path='/skills' component={Skills} />
               <Route path='/contact' component={Contact} />
               <Gohome />
           </div>
           </HashRouter> 
        </div>
    )
}

export default App
