import React, { Component } from 'react';
import './CityName.css'


class CityName extends Component {
    round_to_precision = (x, precision) => {
        var y = +x + (precision === undefined ? 0.5 : precision/2);
        return y - (y % (precision === undefined ? 1 : +precision));
    }
    render(){
        return(
            <div className="nameAndScore">
            <h2 id="cityName">{this.props.cityName}</h2>
            {this.props.score > 0 &&
            <h3 id="cityscore">City Score: {this.round_to_precision(Math.round(this.props.score),.25)} / 100</h3>}
            </div>
        )
    }
}

export default CityName;