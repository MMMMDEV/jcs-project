import React from "react";

export default function GetStimate() {
  return (
    <div className="GetStimate">
      <h2>Get a free estimate!</h2>
      <form>
        <div className="services-section">
          <button className="service-btn">Maintenance Cleaning</button>
          <button className="service-btn">Move in / Move out</button>
          <button className="service-btn">Deep Cleaning</button>
        </div>
        <div className="frequency-section">
          <h3>Frequency</h3>
          <button className="service-btn">Weekly</button>
          <button className="service-btn">Bi-Weekly</button>
          <button className="service-btn">Every 4 Weeks</button>
          <button className="service-btn">One time</button>
        </div>
        <div className="zipcode-section">
          <h3>Zipcode</h3>
          <input type="number"></input>
        </div>
        <div className="home-section">
          <h3>Home size</h3>
          <input type="number"></input>
        </div>
        <div className="extras-section">
          <h3>Extras</h3>
          <span>
            <button className="extra-item">Inside Oven</button>
            <button className="extra-item">Inside Fridge</button>
            <button className="extra-item">Inside Cabinets</button>
          </span>
        </div>
        <div className="pets">
          <h3>Do you have any pets?</h3>
          <button>yes</button>
          <button>no</button>
        </div>
      </form>
    </div>
  );
}
