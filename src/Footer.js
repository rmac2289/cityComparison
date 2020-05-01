import React from 'react';
import './Footer.css';

export default function Footer(props){
    return(
        <footer>
            <ul className="footerList">
            <li>© 2020 | <span className="cursive">Your Best Life</span> | Ross MacDonald</li> 
            <li id="checkout">check out my work</li>
            <li><a id="link" href="https://ross-scott-macdonald.com" target="_blank" rel="noopener noreferrer">portfolio</a></li>
            <li><a id="link" href="https://ross-scott-macdonald.com/blog" target="_blank" rel="noopener noreferrer">blog</a></li>
            <li><a id="link" href="https://ross-scott-macdonald.com/resume.pdf" target="_blank" rel="noopener noreferrer">resume</a></li>
            <li><a id="link" href="https://www.linkedin.com/in/rsmacdonald/" target="_blank" rel="noopener noreferrer">linkedin</a></li>
            <li><a id="link" href="https://www.github.com/rmac2289" target="_blank" rel="noopener noreferrer">github</a></li>
            </ul>
        </footer>
    )
}