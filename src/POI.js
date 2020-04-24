import React from 'react'
import './POI.css'


function POI(props) {

        return(
            <li>
                <h2>{props.businessName}</h2>
                <p>{props.businessAddress}</p>
            </li>
        )
}

export default POI;