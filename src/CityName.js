import React from 'react';
import './CityName.css'


function CityName(props) {
    const round_to_precision = (x, precision) => {
        var y = +x + (precision === undefined ? 0.5 : precision/2);
        return y - (y % (precision === undefined ? 1 : +precision));
    }
        return(
            <div className={props.score > 0 ? "nameAndScore":"hidden"}>
            <h2 id="cityName">{props.cityName}</h2>
            {props.score > 0 &&
            <h3 id="cityscore">City Score: {round_to_precision(Math.round(props.score),.25)} / 100</h3>}
            </div>
        )
    }


export default CityName;