import React from "react";
import logo from "../images/Logo.png";
import duster from "../images/duster.png";
import spray from "../images/spray-bottle.png";

export default function Home() {
  return (
    <div className="Home">
      <header className="Header">
        <img
          className="logo"
          src={logo}
          alt="logo JCS, Jaziz's cleaning service"
        ></img>
        <button className="contact-btn" type="button">
          Contact me
        </button>
      </header>
      <div className="Hero">
        <h1 className="hero-text">
          &quot;Where only shine, Is left behind&quot;
        </h1>
        <button className="hero-cta-btn">Get a quick estimate!</button>
        <div className="overlay"></div>
      </div>
      <div className="Services">
        <h2 className="services-title">Here&apos;s what we provide:</h2>
        <div className="weekly">
          <img
            className="duster"
            src={duster}
            alt="a small duster inside a circle"
          />
          <div className="weekly-desc">
            <h3 className="weekly-title">weekly / Bi-Weekly</h3>
            <p className="weekly-paragraph">
              This is a general cleaning of the
              <strong> Kitchen, Living room, Bathrooms, Bedrooms.</strong>
            </p>
            <button className="learn-more-btn" type="button">
              Learn More
            </button>
          </div>
        </div>
        <div className="deep-clean">
          <img
            className="spray"
            src={spray}
            alt="a small spray bottle inside a circle"
          ></img>
          <div className="deep-clean-desc">
            <h3 className="deep-clean-title">Deep cleaning</h3>
            <p className="deep-clean-paragraph">
              One time cleaning done with more precision, for those bigger and
              messier jobs.
            </p>
            <button className="learn-more-btn" type="button">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="Products">
        <h1>Products</h1>
      </div>
      <div className="Reviews">
        <h1>Reviews</h1>
      </div>
      <form className="Form">
        <h1>Form</h1>
      </form>
      <footer className="Footer">
        <h1>footer</h1>
      </footer>
    </div>
  );
}
