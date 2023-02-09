import React from "react";
import { Link } from "react-router-dom";
import arrowBack from "../images/arrow-back.svg";
import PropTypes from "prop-types";

export default function GeneralCleaning({ setInputValues, inputValues }) {
  function handleChange(e) {
    setInputValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function addItem(e) {
    setInputValues((prev) => {
      return {
        ...prev,
        [e.target.name]: prev[e.target.name] + 1,
      };
    });
  }

  function subtractItem(e) {
    if (inputValues[e.target.name] === 0) {
      return;
    } else {
      setInputValues((prev) => {
        return {
          ...prev,
          [e.target.name]: prev[e.target.name] - 1,
        };
      });
    }
  }

  return (
    <div className="GeneralCleaning">
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
          Please choose the amount of rooms you would like to include
        </p>
        <form
          action="/stimate-type/calculate/general-clean/extras"
          className="form-container-general"
        >
          <div className="selection">
            <label htmlFor="Bedrooms">Bedrooms</label>
            <div className="input-container">
              <button
                name="bedrooms"
                className="minus-btn"
                onClick={subtractItem}
                type="button"
              >
                -
              </button>
              <input
                name="bedrooms"
                type="number"
                className="num-input-general"
                id="Bedrooms"
                min={0}
                value={inputValues.bedrooms}
                onChange={handleChange}
                required
              ></input>
              <button
                name="bedrooms"
                className="plus-btn"
                onClick={addItem}
                type="button"
              >
                +
              </button>
            </div>
          </div>
          <div className="selection">
            <label htmlFor="Bathroom">Bathroom</label>
            <div className="input-container">
              <button
                name="bathroom"
                className="minus-btn"
                onClick={subtractItem}
                type="button"
              >
                -
              </button>
              <input
                name="bathroom"
                type="number"
                className="num-input-general"
                id="Bathroom"
                min={0}
                value={inputValues.bathroom}
                onChange={handleChange}
                required
              ></input>
              <button
                name="bathroom"
                className="plus-btn"
                onClick={addItem}
                type="button"
              >
                +
              </button>
            </div>
          </div>
          <div className="selection">
            <label htmlFor="HalfBath">Half bath</label>
            <div className="input-container">
              <button
                name="halfBath"
                className="minus-btn"
                onClick={subtractItem}
                type="button"
              >
                -
              </button>
              <input
                name="halfBath"
                type="number"
                className="num-input-general"
                id="HalfBath"
                min={0}
                value={inputValues.halfBath}
                onChange={handleChange}
                required
              ></input>
              <button
                name="halfBath"
                className="plus-btn"
                onClick={addItem}
                type="button"
              >
                +
              </button>
            </div>
          </div>
          <div className="selection">
            <label htmlFor="LivingRoom">Living room</label>
            <div className="input-container">
              <button
                name="livingRoom"
                className="minus-btn"
                onClick={subtractItem}
                type="button"
              >
                -
              </button>
              <input
                name="livingRoom"
                type="number"
                className="num-input-general"
                id="LivingRoom"
                min={0}
                value={inputValues.livingRoom}
                onChange={handleChange}
                required
              ></input>
              <button
                name="livingRoom"
                className="plus-btn"
                onClick={addItem}
                type="button"
              >
                +
              </button>
            </div>
          </div>
          <div className="selection">
            <label htmlFor="Office">Office</label>
            <div className="input-container">
              <button
                name="office"
                className="minus-btn"
                onClick={subtractItem}
                type="button"
              >
                -
              </button>
              <input
                name="office"
                type="number"
                className="num-input-general"
                id="Office"
                min={0}
                value={inputValues.office}
                onChange={handleChange}
                required
              ></input>
              <button
                name="office"
                className="plus-btn"
                onClick={addItem}
                type="button"
              >
                +
              </button>
            </div>
          </div>
          <div className="selection">
            <label htmlFor="Kitchen">Kitchen</label>
            <div className="input-container">
              <button
                name="kitchen"
                className="minus-btn"
                onClick={subtractItem}
                type="button"
              >
                -
              </button>
              <input
                name="kitchen"
                type="number"
                className="num-input-general"
                id="Kitchen"
                min={0}
                value={inputValues.kitchen}
                onChange={handleChange}
                required
              ></input>
              <button
                name="kitchen"
                className="plus-btn"
                onClick={addItem}
                type="button"
              >
                +
              </button>
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
        </div>
      </div>
    </div>
  );
}

GeneralCleaning.propTypes = {
  setInputValues: PropTypes.func,
  inputValues: PropTypes.object,
};
