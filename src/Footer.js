import React from 'react';
import './Footer.css';

export default function Footer(props){
    return(
        <footer>
            <ul className="footerList">
            <li>© 2020 Ross MacDonald</li> 
            <li><a id="link" href="https://ross-scott-macdonald.com">check out my work</a></li>
            </ul>
        </footer>
    )
}