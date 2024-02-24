import React, { useEffect, useState } from "react";
import "./App.css";
import "./normalize.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
