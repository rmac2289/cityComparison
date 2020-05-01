import React from 'react';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLevelDownAlt } from '@fortawesome/free-solid-svg-icons'

export default function About(props){
    return(
        <div className="about">
            <div className="left"><p className="headerP">the app that guides you where you're headed next 
                 <br/> 
                 <span id="span">type in a possible destination and see what the data has to say</span></p>
                 </div>
            <div className="right"><p className="headerP" id="right">Your best life is a simple web application built with React that allows you to picture yourself in a new city.</p></div>
        </div>
    )
}