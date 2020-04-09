import React, { Component } from 'react';
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
                 <span>
                {Math.floor(this.props.score) === 1 ? 
                 <p id="red">*</p> : Math.floor(this.props.score) === 2 ? 
                 <p id="red">**</p> : Math.floor(this.props.score) === 3 ? 
                 <p id="red">***</p> : Math.floor(this.props.score) === 4 ? 
                 <p id="score">****</p> : Math.floor(this.props.score) === 5 ? 
                 <p id="score">*****</p> : Math.floor(this.props.score) === 6 ? 
                 <p id="score">******</p> : Math.floor(this.props.score) === 7 ? 
                 <p id="green">*******</p> : Math.floor(this.props.score) === 8 ? 
                 <p id="green">********</p> : Math.floor(this.props.score) === 9 ? 
                 <p id="green">*********</p> : Math.floor(this.props.score) === 10 ?
                 <p id="green">**********</p> :
                 <p></p>}
                 </span>
                 </h4>
            </li>
        )
    }
}

export default Scores;