import React from 'react'
import './CityImage.css'

export default function CityImage(props){
    return(
        <div className="photoContainer">
            <img className={props.hidden===null ? "hidden":"photo"} src={props.image} alt="city"/>
        </div>
    )
}