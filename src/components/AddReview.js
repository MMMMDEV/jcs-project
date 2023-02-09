import React, { useState } from "react";
import star from "../images/Star.svg";
import filledStar from "../images/StarFilled.svg";

export default function AddReview() {
  const [formData, setFormData] = useState({
    stars: 0,
    name: "",
    message: "",
  });

  function handleClick(e) {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.id,
      };
    });
  }

  function handleChange(e) {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function onSub() {
    fetch("http://localhost:8000/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="AddReview">
      <div className="options-container">
        <h3 className="final-deepclean-title">Let us know how we did!</h3>
        <div className="form-container-walk">
          <form
            onSubmit={onSub}
            className="form"
            action="/Thankyou"
            method="GET"
          >
            <input
              className="contact-input"
              type="text"
              name="name"
              placeholder="Name"
              minLength={2}
              maxLength={15}
              onChange={handleChange}
              required
            ></input>
            <textarea
              className="contact-input contact-textarea"
              type="text"
              name="message"
              placeholder="Message"
              minLength={2}
              maxLength={100}
              onChange={handleChange}
              required
            ></textarea>
            <div className="stars-container">
              <img
                name="stars"
                id={1}
                className="starReview"
                alt="small empty star"
                src={1 <= formData.stars ? filledStar : star}
                onClick={handleClick}
              ></img>
              <img
                name="stars"
                id={2}
                className="starReview"
                alt="small empty star"
                src={2 <= formData.stars ? filledStar : star}
                onClick={handleClick}
              ></img>
              <img
                name="stars"
                id={3}
                className="starReview"
                alt="small empty star"
                src={3 <= formData.stars ? filledStar : star}
                onClick={handleClick}
              ></img>
              <img
                name="stars"
                id={4}
                className="starReview"
                alt="small empty star"
                src={4 <= formData.stars ? filledStar : star}
                onClick={handleClick}
              ></img>
              <img
                name="stars"
                id={5}
                className="starReview"
                alt="small empty star"
                src={5 <= formData.stars ? filledStar : star}
                onClick={handleClick}
              ></img>
            </div>
            <button className="contact-btn-send-walk" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
