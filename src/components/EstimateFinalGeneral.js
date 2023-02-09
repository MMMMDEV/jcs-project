import React from "react";
import { Link } from "react-router-dom";
import arrowBack from "../images/arrow-back.svg";
import PropTypes from "prop-types";

export default function EstimateFinalGeneral({ inputValues }) {
  const bedroomPrice = inputValues.bedrooms * 12;
  const bathroomPrice = inputValues.bathroom * 30;
  const halfbathPrice = inputValues.halfBath * 15;
  const livingRoomPrice = inputValues.livingRoom * 25;
  const kitchenPrice = inputValues.kitchen * 30;
  const officePrice = inputValues.office * 10;
  const petsPrice = inputValues.pets * 10;
  const fridgePrice = inputValues.fridge * 20;
  const ovenPrice = inputValues.oven * 20;

  const total =
    bedroomPrice +
    bathroomPrice +
    halfbathPrice +
    livingRoomPrice +
    kitchenPrice +
    officePrice +
    petsPrice +
    fridgePrice +
    ovenPrice;

  return (
    <div className="EstimateFinalGeneral">
      <nav className="nav">
        <Link to="/stimate-type/calculate/general-clean/extras">
          <img
            src={arrowBack}
            className="arrow-back"
            alt="arrow facing left"
          ></img>
        </Link>
      </nav>
      <div className="options-container">
        <h3 className="final-deepclean-title">
          Your General Cleaning stimate is $ {total}
        </h3>
        <p className="options-promt">
          fill the form below and we will reach back to you as soon as possible
          to schedule a time!
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
              value={`${"General Cleaning: stimate of "} ${total}`}
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
        </div>
      </div>
    </div>
  );
}

EstimateFinalGeneral.propTypes = {
  inputValues: PropTypes.object,
};