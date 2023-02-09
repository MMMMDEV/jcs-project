import React from "react";
import { Link } from "react-router-dom";

export default function Thankyou() {
  return (
    <div className="Thankyou">
      <div className="options-container">
        <h1 className="options-title">Thank You!</h1>
      </div>
      <Link to="/" className="btn-next" type="submit">
        Home
      </Link>
    </div>
  );
}
