import React, { Component } from 'react';
import './CityName.css'


class CityName extends Component {
    render(){
        return(
            <h2 id="cityName">{this.props.cityName}</h2>
        )
    }
}

export default CityName;