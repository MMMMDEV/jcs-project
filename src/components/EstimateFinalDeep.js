import React from "react";
import { Link } from "react-router-dom";
import arrowBack from "../images/arrow-back.svg";
import PropTypes from "prop-types";

export default function EstimateFinalDeep({ feet }) {
  const price = 0.25;

  const overall = price * feet;
  const total = Math.floor(overall + 10 + 50);

  const text = {
    "Squared ft:": feet,
    "Deep Cleaning: stimate of": total,
  };

  const stringText = JSON.stringify(text);

  return (
    <div className="EstimateFinalDeep">
      <nav className="nav">
        <Link to="/stimate-type/calculate/deep-cleaning">
          <img
            src={arrowBack}
            className="arrow-back"
            alt="arrow facing left"
          ></img>
        </Link>
      </nav>
      <div className="options-container">
        <p className="options-promt">
          fill out the form below and we will reach back to you as soon as
          possible to schedule a time!
        </p>
        <div className="form-container-walk">
          <form
            className="form"
            action="https://formsubmit.co/jazizmy@gmail.com"
            method="POST"
          >
            <input
              className="contact-input"
              type="text"
              name="name"
              placeholder="Name"
              minLength={2}
              maxLength={15}
              required
            ></input>
            <input
              className="contact-input"
              type="email"
              name="email"
              placeholder="Email"
              minLength={13}
              maxLength={30}
              required
            ></input>
            <input
              className="contact-input"
              type="hidden"
              name="message"
              value={stringText}
            ></input>
            <button className="contact-btn-send-walk" type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="steps-container">
          <div className="circ circ-filled"></div>
          <div className="circ circ-filled"></div>
          <div className="circ circ-filled"></div>
          <div className="circ circ-filled"></div>
          <div className="circ circ-filled"></div>
          <div className="circ circ-filled"></div>
        </div>
      </div>
    </div>
  );
}

EstimateFinalDeep.propTypes = {
  feet: PropTypes.string,
};
