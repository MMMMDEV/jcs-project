import React from "react";
import { Link, useNavigate } from "react-router-dom";
import arrowBack from "../images/arrow-back.svg";
import PropTypes from "prop-types";

export default function DeepCleaning({ setFeetVal }) {
  const navigate = useNavigate();

  function handle(e) {
    e.preventDefault();

    navigate("/stimate-type/calculate/deep-cleaning/final");
  }

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
        <form onSubmit={handle} className="form-container-deep">
          <div className="selection">
            <label htmlFor="Square">Square ft</label>
            <input
              type="number"
              className="num-input"
              id="Sqaure"
              min={1500}
              max={4500}
              onChange={(e) => setFeetVal(e.target.value)}
              placeholder="Ex: 1500"
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
          <div className="circ"></div>
        </div>
      </div>
    </div>
  );
}

DeepCleaning.propTypes = {
  setFeetVal: PropTypes.func,
};
