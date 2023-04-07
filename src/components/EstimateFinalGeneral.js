import React from "react";
import { Link } from "react-router-dom";
import arrowBack from "../images/arrow-back.svg";
import PropTypes from "prop-types";

export default function EstimateFinalGeneral({ inputValues }) {
  const bedroomPrice = inputValues.bedrooms * 12;
  const bathroomPrice = inputValues.bathroom * 25;
  const halfbathPrice = inputValues.halfBath * 12.5;
  const livingRoomPrice = inputValues.livingRoom * 25;
  const kitchenPrice = inputValues.kitchen * 25;
  const officePrice = inputValues.office * 10;
  const petsPrice = inputValues.pets * 10;
  const fridgePrice = inputValues.fridge * 25;
  const ovenPrice = inputValues.oven * 50;
  const Material = 25;
  const Company = 35;

  const total =
    bedroomPrice +
    bathroomPrice +
    halfbathPrice +
    livingRoomPrice +
    kitchenPrice +
    officePrice +
    petsPrice +
    fridgePrice +
    ovenPrice +
    Material +
    Company;

  const text = {
    "Bedrooms:": inputValues.bedrooms,
    "Bathrooms:": inputValues.bathroom,
    "Half Baths:": inputValues.halfBath,
    "Living Rooms:": inputValues.livingRoom,
    "Kitchens:": inputValues.kitchen,
    "Offices:": inputValues.office,
    "Pets:": inputValues.pets,
    "Friges:": inputValues.fridge,
    "Ovens:": inputValues.oven,
    "Square ft": inputValues.squareFT,
    // prettier-ignore
    "frequency": inputValues.frequency,
    // prettier-ignore
    "zipcode": inputValues.zipcode,
    "Material:": Material,
    // prettier-ignore
    "Company": Company,
    "General Cleaning: stimate of": total,
  };

  const stringText = JSON.stringify(text);

  return (
    <div className="EstimateFinalGeneral">
      <nav className="nav">
        <Link to="/stimate-type/calculate/frequency/general-clean/extras">
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

EstimateFinalGeneral.propTypes = {
  inputValues: PropTypes.object,
};
