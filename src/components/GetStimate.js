import React, { useEffect, useState } from "react";

export default function GetStimate() {
  const [serviceSelected, setServiceSelected] = useState({ id: null });

  const onBtnClick = (e) => {
    const btnID = e.target.id;
    setServiceSelected({ id: btnID });
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(serviceSelected.id === "Maintenance Cleaning");
  }, [serviceSelected]);

  return (
    <section className="GetStimate">
      <form className="estimate-form" onSubmit={submitForm}>
        <div className="services-section">
          <h3>select service type</h3>
          <button
            className="service-btn"
            id="Maintenance Cleaning"
            style={
              serviceSelected.id === "Maintenance Cleaning"
                ? { border: " 3.5px solid #3db037" }
                : {}
            }
            onClick={onBtnClick}
          >
            Maintenance Cleaning
          </button>
          <button
            className="service-btn"
            id="Move in / Move out"
            style={
              serviceSelected.id === "Move in / Move out"
                ? { border: " 3.5px solid #3db037" }
                : {}
            }
            onClick={onBtnClick}
          >
            Move in / Move out
          </button>
          <button
            className="service-btn"
            id="Deep Cleaning"
            style={
              serviceSelected.id === "Deep Cleaning"
                ? { border: " 3.5px solid #3db037" }
                : {}
            }
            onClick={onBtnClick}
          >
            Deep Cleaning
          </button>
        </div>
        <div className="frequency-section">
          <h3>Frequency</h3>
          <button className="service-btn" id="Weekly" onClick={onBtnClick}>
            Weekly
          </button>
          <button className="service-btn" id="Bi-Weekly" onClick={onBtnClick}>
            Bi-Weekly
          </button>
          <button
            className="service-btn"
            id="Every 4 Weeks"
            onClick={onBtnClick}
          >
            Every 4 Weeks
          </button>
          <button className="service-btn" id="One time" onClick={onBtnClick}>
            One time
          </button>
        </div>
        <div className="zipcode-section">
          <h3>Zipcode</h3>
          <input
            className="zipcode-input"
            placeholder="Ex: 37027"
            id="Zipcode"
          ></input>
        </div>
        <div className="home-section">
          <h3>Home size</h3>
          <input
            type="number"
            className="home-size-input"
            id="Home size"
          ></input>
        </div>
        <div className="extras-section">
          <h3>Extras</h3>
          <button
            className="extra-item-btn"
            id="Inside Oven"
            value={60}
            onClick={onBtnClick}
          >
            Inside Oven
          </button>
          <button
            className="extra-item-btn"
            id="Inside Fridge"
            value={45}
            onClick={onBtnClick}
          >
            Inside Fridge
          </button>
          <button
            className="extra-item-btn"
            id="Inside Cabinets"
            value={35}
            onClick={onBtnClick}
          >
            Inside Cabinets
          </button>
        </div>
        <div className="pets-section">
          <h3>Do you have any pets?</h3>
          <button
            className="pet-btn"
            id="pet-yes"
            value={15}
            onClick={onBtnClick}
          >
            yes
          </button>
          <button
            className="pet-btn"
            id="pet-no"
            value={0}
            onClick={onBtnClick}
          >
            no
          </button>
        </div>
        <div className="total-section">
          <h4>Total :</h4>
          <p>$125</p>
        </div>
      </form>
    </section>
  );
}
