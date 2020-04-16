import React from 'react';
import './Header.css';

export default function Header(){
    return (
        <header className="header">
            <div className = "title">
                 <h1>Your Best Life</h1>
                 <p id="headerP">the app that guides you where you're headed next 
                 <br/> 
                 <span id="span">type in a possible destination and see what the data has to say</span></p>
            </div>
        </header>
    )
}