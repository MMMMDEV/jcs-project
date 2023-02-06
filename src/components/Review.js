/* eslint-disable no-undef */
import React from "react";
import star from "../images/Star.svg";
import filledStar from "../images/StarFilled.svg";

export default function Review() {
  return (
    <div className="Review">
      <div className="title-rating-container">
        <p className="service-type-title">Deep Cleaning</p>
        <div className="stars-container">
          <img className="star" alt="small empty star" src={star}></img>
          <img className="star" alt="small empty star" src={star}></img>
          <img className="star" alt="small empty star" src={star}></img>
          <img className="star" alt="small empty star" src={star}></img>
          <img className="star" alt="small empty star" src={star}></img>
        </div>
      </div>
      <p className="message-review">
        &quot;One of the best experiences, they did everything I needed and at a
        timely manner.&quot;
      </p>
      <p className="name-review">-Ana</p>
    </div>
  );
}
