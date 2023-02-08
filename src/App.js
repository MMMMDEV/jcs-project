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
import ExtraItems from "./components/ExtraItems";
import EstimateFinalGeneral from "./components/EstimateFinalGeneral";

function App() {
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
          path="/stimate-type/calculate/general-clean"
          element={<GeneralCleaning />}
        />
        <Route
          path="/stimate-type/calculate/general-clean/extras"
          element={<ExtraItems />}
        />
        <Route
          path="/stimate-type/calculate/general-clean/extras/final"
          element={<EstimateFinalGeneral />}
        />
      </Routes>
    </div>
  );
}

export default App;
