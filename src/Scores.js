import React from 'react';
import './Scores.css';

function Scores (props) {
    const round_to_precision = (x, precision) => {
        var y = +x + (precision === undefined ? 0.5 : precision/2);
        return y - (y % (precision === undefined ? 1 : +precision));
    }
    const rounded = round_to_precision(props.score, 0.25) * 10
    const pStyle = {
        width: `${rounded}%`
    }
        return(
            <li className="listItem">
                <h3 id="name">{props.name.toLowerCase()}</h3>
                 <p  id= {props.score >= 7 ? "green": props.score < 4 ? "red":"score"} style={pStyle}>
                 {rounded}%</p>
            </li>
        )
    }

export default Scores;
