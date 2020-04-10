import React, { Component } from 'react';
import MoreInfo from './MoreInfo';
import './Scores.css';

class Scores extends Component {
    round_to_precision = (x, precision) => {
        var y = +x + (precision === undefined ? 0.5 : precision/2);
        return y - (y % (precision === undefined ? 1 : +precision));
    }
    render(){
        return(
            <li className="listItem">
                <h3 id="name">{this.props.name}</h3>
                <h4 id= {this.props.score >= 7 ? "green": this.props.score < 4 ? "red":"score"}>
                 {this.round_to_precision(this.props.score, 0.25)} / 10
                 <span><p id="dot">{this.props.bar}</p></span>
                 </h4>
                 <MoreInfo />
            </li>
        )
    }
}

export default Scores;
