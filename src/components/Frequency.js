import React from "react";
import { Link, useNavigate } from "react-router-dom";
import arrowBack from "../images/arrow-back.svg";
import PropTypes from "prop-types";

export default function Frequency({ setInputValues, inputValues }) {
  const navigate = useNavigate();

  function handle(e) {
    e.preventDefault();

    navigate("/stimate-type/calculate/frequency/general-clean");
  }

  function handleChange(e) {
    setInputValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div className="Frequency">
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
          Please choose the frequency and square footage
        </p>
        <form onSubmit={handle} className="form-container-general">
          <div className="selection">
            <label htmlFor="frequency">Frequency</label>
            <div className="input-container">
              <select
                id="frequency"
                name="frequency"
                className="dropDown-input"
                onChange={handleChange}
                value={inputValues.frequency}
                required
              >
                <option value="Monthly">Monthly</option>
                <option value="Bi-Weekly">Bi-Weekly</option>
                <option value="Weekly">Weekly</option>
                <option value="OneTime">One Time</option>
              </select>
            </div>
          </div>
          <div className="selection">
            <label htmlFor="sqaureFt">Sqaure ft</label>
            <div className="input-container">
              <input
                name="squareFT"
                type="number"
                className="num-input"
                id="Sqaure"
                min={1500}
                max={4500}
                value={inputValues.squareFT}
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
          <div className="selection">
            <label htmlFor="zipcode">ZIP code</label>
            <div className="input-container">
              <input
                name="zipcode"
                type="number"
                className="num-input"
                id="zipcode"
                value={inputValues.zipcode}
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
          <button className="btn-next">Next</button>
        </form>
        <div className="steps-container-general">
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

Frequency.propTypes = {
  setInputValues: PropTypes.func,
  inputValues: PropTypes.object,
};
