import React from "react";
import { Link } from "react-router-dom";
import arrowBack from "../images/arrow-back.svg";
import PropTypes from "prop-types";

export default function DeepCleaning({ setFeetVal }) {
  return (
    <div className="DeepCleaning">
      <nav className="nav">
        <Link to="/stimate-type/calculate">
          <img
            src={arrowBack}
            className="arrow-back"
            alt="arrow facing left"
          ></img>
        </Link>
      </nav>
      <div className="options-container">
        <p className="options-promt">
          Please include the square footage of your home
        </p>
        <form
          action="/stimate-type/calculate/deep-cleaning/final"
          className="form-container-deep"
        >
          <div className="selection">
            <label htmlFor="Square">Square ft</label>
            <input
              type="number"
              className="num-input"
              id="Sqaure"
              min={1750}
              onChange={(e) => setFeetVal(e.target.value)}
              required
            ></input>
          </div>
          <button className="btn-next">Next</button>
        </form>
        <div className="steps-container-deep">
          <div className="circ circ-filled"></div>
          <div className="circ circ-filled"></div>
          <div className="circ circ-filled"></div>
          <div className="circ"></div>
          <div className="circ"></div>
        </div>
      </div>
    </div>
  );
}

DeepCleaning.propTypes = {
  setFeetVal: PropTypes.func,
};
