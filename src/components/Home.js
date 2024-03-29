import React, { useEffect, useState } from "react";
import logo from "../images/Logo.png";
import logo3 from "../images/Logo3.svg";
import { Link as Scroll } from "react-scroll";
import GetStimate from "./GetStimate";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [logoIcon, setLogoIcon] = useState(logo);

  const windowWidth = window.innerWidth;

  useEffect(() => {
    if (windowWidth > 1100) {
      setLogoIcon(logo3);
    } else {
      setLogoIcon(logo);
    }
  }, []);

  return (
    <div className="Home">
      {loading ? (
        <div className="loader-container">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <>
          <header className="Header">
            <img
              className="logo"
              src={logoIcon}
              alt="logo JCS, Jaziz's cleaning service"
            ></img>
            <Scroll
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={300}
              className="contact-link"
              to="form-container"
            >
              Contact Us
            </Scroll>
          </header>
          <div className="Hero">
            <h1 className="hero-text">Where only shine Is left behind</h1>
            <div className="overlay"></div>
          </div>
          <GetStimate></GetStimate>
          <footer className="Footer">
            <h4 className="footer-text">
              © 2023 Jaziz&apos;s Cleaning Service
            </h4>
          </footer>
        </>
      )}
    </div>
  );
}
