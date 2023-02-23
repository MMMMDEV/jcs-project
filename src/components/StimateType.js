import React from "react";
import { Link } from "react-router-dom";
import arrowBack from "../images/arrow-back.svg";

export default function StimateType() {
  return (
    <div className="StimateType">
      <nav className="nav">
        <Link to="/">
          <img
            src={arrowBack}
            className="arrow-back"
            alt="arrow facing left"
          ></img>
        </Link>
      </nav>
      <div className="options-container">
        <p className="options-promt">
          Would you like a walk-through or a calculated estimate based on the
          rooms and bathrooms?
        </p>
        <Link className="option" to="/stimate-type/walk-through">
          Walk-through
        </Link>
        <p className="option-or">Or</p>
        <Link className="option" to="/stimate-type/calculate">
          Calculate estimate
        </Link>
        <div className="steps-container">
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
