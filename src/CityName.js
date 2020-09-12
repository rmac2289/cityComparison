import React from "react";
import "./CityName.css";

function CityName(props) {
  return (
    <div className="nameAndScore">
      <h2 id="cityName">{props.cityName}</h2>
    </div>
  );
}

export default CityName;
