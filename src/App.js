import React, { useEffect, useState } from "react";
import "./App.css";
import "./normalize.css";
import "./Estimates.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home.js";
import StimateType from "./components/StimateType";
import StimateWalk from "./components/StimateWalkThrough";
import CalculateEstimate from "./components/CalculateEstimate";
import DeepCleaning from "./components/DeepCleaning";
import EstimateFinalDeep from "./components/EstimateFinalDeep";
import GeneralCleaning from "./components/GeneralCleaning";
import Frequency from "./components/Frequency";
import ExtraItems from "./components/ExtraItems";
import EstimateFinalGeneral from "./components/EstimateFinalGeneral";
import AddReview from "./components/AddReview";
import Thankyou from "./components/Thankyou";

function App() {
  const [inputValues, setInputValues] = useState(() => {
    const data = localStorage.getItem("formInputs");
    const jsonData = JSON.parse(data);
    if (!jsonData) {
      return {
        bedrooms: 0,
        bathroom: 0,
        halfBath: 0,
        livingRoom: 0,
        kitchen: 0,
        office: 0,
        pets: 0,
        oven: 0,
        fridge: 0,
        frequency: "",
        squareFT: 0,
        zipcode: 0,
      };
    } else {
      return jsonData;
    }
  });

  useEffect(() => {
    localStorage.setItem("formInputs", JSON.stringify(inputValues));
  }, [inputValues]);

  const [feetVal, setFeetVal] = useState(() => {
    const data = localStorage.getItem("feet");
    if (!data) {
      return null;
    } else {
      return data;
    }
  });

  function changeFeet(val) {
    setFeetVal(val);
  }

  useEffect(() => {
    localStorage.setItem("feet", feetVal);
  }, [feetVal]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stimate-type" element={<StimateType />} />
        <Route path="/stimate-type/walk-through" element={<StimateWalk />} />
        <Route path="/stimate-type/calculate" element={<CalculateEstimate />} />
        <Route
          path="/stimate-type/calculate/deep-cleaning"
          element={<DeepCleaning setFeetVal={(val) => changeFeet(val)} />}
        />
        <Route
          path="/stimate-type/calculate/deep-cleaning/final"
          element={<EstimateFinalDeep feet={feetVal} />}
        />
        <Route
          path="/stimate-type/calculate/frequency"
          element={
            <Frequency
              inputValues={inputValues}
              setInputValues={(val) => setInputValues(val)}
            />
          }
        ></Route>
        <Route
          path="/stimate-type/calculate/frequency/general-clean"
          element={
            <GeneralCleaning
              inputValues={inputValues}
              setInputValues={(val) => setInputValues(val)}
            />
          }
        />
        <Route
          path="/stimate-type/calculate/frequency/general-clean/extras"
          element={
            <ExtraItems
              inputValues={inputValues}
              setInputValues={(val) => setInputValues(val)}
            />
          }
        />
        <Route
          path="/stimate-type/calculate/frequency/general-clean/extras/final"
          element={<EstimateFinalGeneral inputValues={inputValues} />}
        />
        {/* <Route path="/Review" element={<AddReview />} /> */}
        <Route path="/Thankyou" element={<Thankyou />} />
      </Routes>
    </div>
  );
}

export default App;
