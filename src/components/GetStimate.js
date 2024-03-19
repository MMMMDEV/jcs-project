import React, { useEffect, useState } from "react";

export default function GetStimate() {
  const [serviceSelected, setServiceSelected] = useState({
    id: null,
  });
  const [frequencySelected, setFrequencySelected] = useState({ id: null });
  const [zipcodeValue, setZipcodeValue] = useState({ value: null });
  const [homeValue, setHomeValue] = useState({ value: 1000 });
  const [extraValue, setExtraValue] = useState({ id: null, value: 0 });
  const [petValue, setPetValue] = useState({ id: null, value: 0 });
  const [total, setTotal] = useState(0);

  const onBtnClickService = (e) => {
    const btnID = e.target.id;
    setServiceSelected({ id: btnID });
  };

  const onBtnClickFrequency = (e) => {
    const btnID = e.target.id;
    setFrequencySelected({ id: btnID });
  };

  const updateZipcode = (e) => {
    const textValue = e.target.value;
    setZipcodeValue({ value: textValue });
  };

  const updateHomeSize = (e) => {
    const textValue = e.target.value;
    setHomeValue({ value: textValue });
  };

  const onBtnClickExtra = (e) => {
    const btnID = e.target.id;
    const btnValue = e.target.value;
    setExtraValue({ id: btnID, value: btnValue });
  };

  const onBtnClickPet = (e) => {
    const btnID = e.target.id;
    const btnValue = e.target.value;
    setPetValue({ id: btnID, value: btnValue });
  };

  const calculateTotal = () => {
    let total = 0 + petValue.value * 1 + extraValue.value * 1;

    switch (serviceSelected.id) {
      case "Maintenance Cleaning":
        switch (homeValue.value * 1) {
          case 1000:
            total = total + 126;
            break;
          case 1600:
            total = total + 155;
            break;
          case 2000:
            total = total + 175;
            break;
          case 2500:
            total = total + 200;
            break;
          case 3000:
            total = total + 240;
            break;
          case 3500:
            total = total + 280;
            break;
          case 4000:
            total = total + 320;
            break;
          case 4500:
            total = total + 360;
            break;
          case 5000:
            total = total + 400;
            break;
          case 5500:
            total = total + 440;
            break;
        }
        break;
      case "Move in / Move out":
        switch (homeValue.value * 1) {
          case 1000:
            total = total + 250;
            break;
          case 1600:
            total = total + 352;
            break;
          case 2000:
            total = total + 440;
            break;
          case 2500:
            total = total + 550;
            break;
          case 3000:
            total = total + 660;
            break;
          case 3500:
            total = total + 770;
            break;
          case 4000:
            total = total + 880;
            break;
          case 4500:
            total = total + 990;
            break;
          case 5000:
            total = total + 1100;
            break;
          case 5500:
            total = total + 1210;
            break;
        }
        break;
      case "Deep Cleaning":
        switch (homeValue.value * 1) {
          case 1000:
            total = total + 180;
            break;
          case 1600:
            total = total + 240;
            break;
          case 2000:
            total = total + 300;
            break;
          case 2500:
            total = total + 375;
            break;
          case 3000:
            total = total + 450;
            break;
          case 3500:
            total = total + 525;
            break;
          case 4000:
            total = total + 600;
            break;
          case 4500:
            total = total + 675;
            break;
          case 5000:
            total = total + 750;
            break;
          case 5500:
            total = total + 825;
            break;
        }
        break;
    }

    setTotal(total);
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    calculateTotal();
  }, [
    serviceSelected,
    frequencySelected,
    zipcodeValue,
    homeValue,
    petValue,
    extraValue,
  ]);

  useEffect(() => {}, [total]);

  return (
    <section className="GetStimate">
      <form className="estimate-form" onSubmit={submitForm}>
        <span className="form-parts">
          <div className="services-section">
            <h3>select service type</h3>
            <button
              className="service-btn"
              id="Maintenance Cleaning"
              style={
                serviceSelected.id === "Maintenance Cleaning"
                  ? {
                      border: " 1.5px solid black",
                      backgroundColor: "black",
                      color: "white",
                    }
                  : {}
              }
              onClick={onBtnClickService}
            >
              Maintenance Cleaning
            </button>
            <button
              className="service-btn"
              id="Move in / Move out"
              style={
                serviceSelected.id === "Move in / Move out"
                  ? {
                      border: " 1.5px solid black",
                      backgroundColor: "black",
                      color: "white",
                    }
                  : {}
              }
              onClick={onBtnClickService}
            >
              Move in / Move out
            </button>
            <button
              className="service-btn"
              id="Deep Cleaning"
              style={
                serviceSelected.id === "Deep Cleaning"
                  ? {
                      border: " 1.5px solid black",
                      backgroundColor: "black",
                      color: "white",
                    }
                  : {}
              }
              onClick={onBtnClickService}
            >
              Deep Cleaning
            </button>
          </div>
          <div className="frequency-section">
            <h3>Frequency</h3>
            <button
              className="service-btn"
              id="Weekly"
              onClick={onBtnClickFrequency}
              style={
                frequencySelected.id === "Weekly"
                  ? {
                      border: " 1.5px solid black",
                      backgroundColor: "black",
                      color: "white",
                    }
                  : {}
              }
            >
              Weekly
            </button>
            <button
              className="service-btn"
              id="Bi-Weekly"
              onClick={onBtnClickFrequency}
              style={
                frequencySelected.id === "Bi-Weekly"
                  ? {
                      border: " 1.5px solid black",
                      backgroundColor: "black",
                      color: "white",
                    }
                  : {}
              }
            >
              Bi-Weekly
            </button>
            <button
              className="service-btn"
              id="Every 4 Weeks"
              onClick={onBtnClickFrequency}
              style={
                frequencySelected.id === "Every 4 Weeks"
                  ? {
                      border: " 1.5px solid black",
                      backgroundColor: "black",
                      color: "white",
                    }
                  : {}
              }
            >
              Every 4 Weeks
            </button>
          </div>
        </span>
        <span className="form-parts">
          <div className="zipcode-section">
            <h3>Zip code</h3>
            <input
              className="zipcode-input"
              placeholder="Ex: 37027"
              onChange={updateZipcode}
              minLength={2}
              maxLength={10}
            ></input>
          </div>
          <div className="home-section">
            <h3>Home size</h3>
            <select
              className="home-size-input"
              id="Home-size"
              onChange={updateHomeSize}
              required
            >
              <option value={1000}>1000 sq. ft</option>
              <option value={1600}>1600 sq. ft</option>
              <option value={2000}>2000 sq. ft</option>
              <option value={2500}>2500 sq. ft</option>
              <option value={3000}>3000 sq. ft</option>
              <option value={3500}>3500 sq. ft</option>
              <option value={4000}>4000 sq. ft</option>
              <option value={4500}>4500 sq. ft</option>
              <option value={5000}>5000 sq. ft</option>
              <option value={5500}>5500 sq. ft</option>
            </select>
          </div>
        </span>
        <span className="form-parts">
          <div className="extras-section">
            <h3>Extras</h3>
            <button
              className="extra-item-btn"
              id="none-extra"
              value={0}
              onClick={onBtnClickExtra}
              style={
                extraValue.id === "none-extra"
                  ? {
                      border: " 1.5px solid black",
                      backgroundColor: "black",
                      color: "white",
                    }
                  : {}
              }
            >
              none
            </button>
            <button
              className="extra-item-btn"
              id="Inside Oven"
              value={60}
              onClick={onBtnClickExtra}
              style={
                extraValue.id === "Inside Oven"
                  ? {
                      border: " 1.5px solid black",
                      backgroundColor: "black",
                      color: "white",
                    }
                  : {}
              }
            >
              Inside Oven
            </button>
            <button
              className="extra-item-btn"
              id="Inside Fridge"
              value={45}
              onClick={onBtnClickExtra}
              style={
                extraValue.id === "Inside Fridge"
                  ? {
                      border: " 1.5px solid black",
                      backgroundColor: "black",
                      color: "white",
                    }
                  : {}
              }
            >
              Inside Fridge
            </button>
            <button
              className="extra-item-btn"
              id="Inside Cabinets"
              value={35}
              onClick={onBtnClickExtra}
              style={
                extraValue.id === "Inside Cabinets"
                  ? {
                      border: " 1.5px solid black",
                      backgroundColor: "black",
                      color: "white",
                    }
                  : {}
              }
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
              onClick={onBtnClickPet}
              style={
                petValue.id === "pet-yes"
                  ? {
                      border: " 1.5px solid black",
                      backgroundColor: "black",
                      color: "white",
                    }
                  : {}
              }
            >
              yes
            </button>
            <button
              className="pet-btn"
              id="pet-no"
              value={0}
              onClick={onBtnClickPet}
              style={
                petValue.id === "pet-no"
                  ? {
                      border: " 1.5px solid black",
                      backgroundColor: "black",
                      color: "white",
                    }
                  : {}
              }
            >
              no
            </button>
          </div>
        </span>
        <span className="checkout-box">
          <div className="total-section">
            <span
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <p>
                Your estimated total is{" "}
                <strong style={{ fontWeight: "600", fontSize: "1rem" }}>
                  ${total}
                </strong>
              </p>
              <p>
                Please submit this form, and we&rsquo;ll promptly reach out to
                you!
              </p>
            </span>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "0.3rem 0.7rem",
              fontSize: "0.9rem",
              border: "0",
              borderRadius: "0.2rem",
              marginTop: "1rem",
            }}
          >
            submit
          </button>
        </span>
      </form>
    </section>
  );
}
