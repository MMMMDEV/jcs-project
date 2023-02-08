import React from "react";
import { Link } from "react-router-dom";
import arrowBack from "../images/arrow-back.svg";
import PropTypes from "prop-types";

export default function ExtraItems({ setInputValues, inputValues }) {
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
    setInputValues((prev) => {
      return {
        ...prev,
        [e.target.name]: prev[e.target.name] - 1,
      };
    });
  }

  return (
    <div className="ExtraItems">
      <nav className="nav">
        <Link to="/stimate-type/calculate/general-clean">
          <img
            src={arrowBack}
            className="arrow-back"
            alt="arrow facing left"
          ></img>
        </Link>
      </nav>
      <div className="options-container">
        <p className="options-promt">Please choose any extras</p>
        <form
          action="/stimate-type/calculate/general-clean/extras/final"
          className="form-container-general"
        >
          <div className="selection">
            <label htmlFor="Pets">Pets</label>
            <div className="input-container">
              <button
                name="pets"
                className="minus-btn"
                onClick={subtractItem}
                type="button"
              >
                -
              </button>
              <input
                name="pets"
                type="number"
                className="num-input-general"
                id="Pets"
                min={0}
                value={inputValues.pets}
                onChange={handleChange}
                required
              ></input>
              <button
                name="pets"
                className="plus-btn"
                onClick={addItem}
                type="button"
              >
                +
              </button>
            </div>
          </div>
          <div className="selection">
            <label htmlFor="Oven">Oven</label>
            <div className="input-container">
              <button
                name="oven"
                className="minus-btn"
                onClick={subtractItem}
                type="button"
              >
                -
              </button>
              <input
                name="oven"
                type="number"
                className="num-input-general"
                id="Oven"
                min={0}
                value={inputValues.oven}
                onChange={handleChange}
                required
              ></input>
              <button
                name="oven"
                className="plus-btn"
                onClick={addItem}
                type="button"
              >
                +
              </button>
            </div>
          </div>
          <div className="selection">
            <label htmlFor="Fridge">Fridge</label>
            <div className="input-container">
              <button
                name="fridge"
                className="minus-btn"
                onClick={subtractItem}
                type="button"
              >
                -
              </button>
              <input
                name="fridge"
                type="number"
                className="num-input-general"
                id="Fridge"
                min={0}
                value={inputValues.fridge}
                onChange={handleChange}
                required
              ></input>
              <button
                name="fridge"
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
          <div className="circ circ-filled"></div>
          <div className="circ"></div>
        </div>
      </div>
    </div>
  );
}

ExtraItems.propTypes = {
  setInputValues: PropTypes.func,
  inputValues: PropTypes.object,
};
