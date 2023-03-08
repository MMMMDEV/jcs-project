import React from "react";
import { Link } from "react-router-dom";
import arrowBack from "../images/arrow-back.svg";

export default function CalculateEstimate() {
  return (
    <div className="CalculateEstimate">
      <nav className="nav">
        <Link to="/stimate-type">
          <img
            src={arrowBack}
            className="arrow-back"
            alt="arrow facing left"
          ></img>
        </Link>
      </nav>
      <div className="options-container">
        <p className="options-promt">Deep clean Or General cleaning?</p>
        <Link className="option" to="/stimate-type/calculate/deep-cleaning">
          Deep Cleaning
        </Link>
        <p className="option-or">Or</p>
        <Link className="option" to="/stimate-type/calculate/frequency">
          General Cleaning
        </Link>
        <div className="steps-container">
          <div className="circ circ-filled"></div>
          <div className="circ circ-filled"></div>
          <div className="circ"></div>
          <div className="circ"></div>
          <div className="circ"></div>
          <div className="circ"></div>
        </div>
      </div>
    </div>
  );
}
