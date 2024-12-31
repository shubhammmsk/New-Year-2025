import React from "react";
import "./style.css";
import "./App.css"

function HappyNewYear({ name }) {
  return (
    <div className="new-year-container">
      <div className="msg">Happy New Year, <span>{name}</span></div>
      <div className="year">
        <span className="first_year">
          <span className="y1">2</span>
          <span className="y2">0</span>
          <span className="y3">2</span>
        </span>
        <span className="old">4</span>
        <span className="y4 new">5</span>
        <div className="balloon"></div>
      </div>
      <div className="firework" id="firework1">
        {[...Array(12)].map((_, index) => (
          <div className="cracker" key={index}></div>
        ))}
      </div>
      <div className="firework" id="firework2">
        {[...Array(12)].map((_, index) => (
          <div className="cracker" key={index}></div>
        ))}
      </div>
      <div className="firework" id="firework3">
        {[...Array(12)].map((_, index) => (
          <div className="cracker" key={index}></div>
        ))}
      </div>
    </div>
  );
}

export default HappyNewYear;
