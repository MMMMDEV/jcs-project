/* eslint-disable no-undef */
import React from "react";
import PropTypes from "prop-types";
import star from "../images/Star.svg";
import filledStar from "../images/StarFilled.svg";

export default function Review({
  name,
  serviceType,
  message,
  rating,
  newClass,
  chosen,
  id,
}) {
  const currentClass = () => {
    if (chosen === id) {
      return `Review ${newClass}`;
    } else {
      return "Review";
    }
  };

  return (
    <div className={currentClass()}>
      <div className="title-rating-container">
        <p className="service-type-title">{serviceType}</p>
        <div className="stars-container">
          <img
            className="star"
            alt="small empty star"
            src={1 <= rating ? filledStar : star}
          ></img>
          <img
            className="star"
            alt="small empty star"
            src={2 <= rating ? filledStar : star}
          ></img>
          <img
            className="star"
            alt="small empty star"
            src={3 <= rating ? filledStar : star}
          ></img>
          <img
            className="star"
            alt="small empty star"
            src={4 <= rating ? filledStar : star}
          ></img>
          <img
            className="star"
            alt="small empty star"
            src={5 <= rating ? filledStar : star}
          ></img>
        </div>
      </div>
      <p className="message-review">&quot;{message}&quot;</p>
      <p className="name-review">-{name}</p>
    </div>
  );
}

Review.propTypes = {
  name: PropTypes.string,
  serviceType: PropTypes.string,
  message: PropTypes.string,
  rating: PropTypes.number,
  id: PropTypes.number,
  newClass: PropTypes.string,
  chosen: PropTypes.number,
};
