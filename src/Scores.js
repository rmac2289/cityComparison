import React from 'react';
import './Scores.css';

function Scores (props) {
    const round_to_precision = (x, precision) => {
        var y = +x + (precision === undefined ? 0.5 : precision/2);
        return y - (y % (precision === undefined ? 1 : +precision));
    }
        return(
            <li className="listItem">
                <h3 id="name">{props.name}</h3>
                <h4 id= {props.score >= 7 ? "green": props.score < 4 ? "red":"score"}>
                 {round_to_precision(props.score, 0.25)} / 10
                 <span><p id="dot">{props.bar}</p></span>
                 </h4>
            </li>
        )
    }

export default Scores;
