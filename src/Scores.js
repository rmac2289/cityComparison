import React from "react";
import "./Scores.css";

function Scores(props) {
  const round_to_precision = (x, precision) => {
    var y = +x + (precision === undefined ? 0.5 : precision / 2);
    return y - (y % (precision === undefined ? 1 : +precision));
  };
  const rounded = round_to_precision(props.score, 0.25) * 10;
  
  return (
    <li className="listItem" id="raised">
      <h3 id="name">{props.name.toLowerCase()}</h3>
      <div
        id="score"
        className="p-box"
      >
        <p className="scores-p">
          {rounded >= 80
            ? "A"
            : rounded < 80 && rounded >= 60
            ? "B"
            : rounded < 60 && rounded >= 40
            ? "C"
            : rounded < 40 && rounded >= 20
            ? "D"
            : "F"}
        </p>
      </div>
    </li>
  );
}

export default Scores;
