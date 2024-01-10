import React, { useEffect, useState } from "react";
import logo from "../images/Logo.png";
import duster from "../images/duster.png";
import spray from "../images/spray-bottle.png";
import closeIcon from "../images/close.svg";
import DeepModalText from "./DeepModalText";
import WeekModalText from "./WeekModalText";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [weekModal, setWeekModal] = useState("weekModal");
  const [DeepModal, setDeepModal] = useState("deepModal");
  const [overlay, setOverlay] = useState("overlay-all");
  const [classActiveModalWeek, setclassActiveModalWeek] = useState(false);
  const [classActiveModalDeep, setclassActiveModalDeep] = useState(false);
  const { ref: refForm, inView: formIsVisible } = useInView();
  const { ref: refGallery, inView: GalleryIsVisible } = useInView();
  const { ref: refPic1, inView: pic1IsVisible } = useInView();
  const { ref: refPic2, inView: pic2IsVisible } = useInView();
  const { ref: refPic3, inView: pic3IsVisible } = useInView();
  const { ref: refPic4, inView: pic4IsVisible } = useInView();

  function activateModalsWeek() {
    setclassActiveModalWeek(true);
  }

  function deActivateModalsWeek() {
    setclassActiveModalWeek(false);
  }

  function activateModalsDeep() {
    setclassActiveModalDeep(true);
  }

  function deActivateModalsDeep() {
    setclassActiveModalDeep(false);
  }

  useEffect(() => {
    if (classActiveModalWeek === true) {
      setWeekModal("weekModal modal-active");
      setOverlay("overlay-all overlay-active");
    } else if (classActiveModalWeek === false) {
      setWeekModal("weekModal");
      setOverlay("overlay-all");
    }
  }, [classActiveModalWeek]);

  useEffect(() => {
    if (classActiveModalDeep === true) {
      setDeepModal("deepModal modal-active");
      setOverlay("overlay-all overlay-active");
    } else if (classActiveModalDeep === false) {
      setDeepModal("deepModal");
      setOverlay("overlay-all");
    }
  }, [classActiveModalDeep]);

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
              src={logo}
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
              Contact me
            </Scroll>
          </header>
          <div className="Hero">
            <h1 className="hero-text">
              &quot;Where only shine, Is left behind&quot;
            </h1>
            <Link to="/stimate-type" className="hero-cta-btn">
              Get a quick estimate!
            </Link>
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
                <h3 className="weekly-title">Weekly / Bi-Weekly</h3>
                <p className="weekly-paragraph">
                  Weekly and Bi-Weekly starting at $135
                </p>
                <button
                  onClick={activateModalsWeek}
                  className="learn-more-btn"
                  type="button"
                >
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
                <h3 className="deep-clean-title">
                  Deep cleaning / Move in - Move out
                </h3>
                <p className="deep-clean-paragraph">
                  One-time cleaning done with more precision, for those bigger
                  and messier jobs.
                </p>
                <button
                  onClick={activateModalsDeep}
                  className="learn-more-btn"
                  type="button"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div
            ref={refForm}
            className={`${"form-container"} ${formIsVisible ? "inViewX" : ""}`}
            id="form-container"
          >
            <h2 className="form-title">Contact</h2>
            <p className="form-text">
              In case of any specific questions feel free to reach out to us!
            </p>
            <form
              className="form"
              action="https://formsubmit.co/jazizmy@gmail.com"
              method="POST"
            >
              <input
                className="contact-input"
                type="text"
                name="name"
                placeholder="Name"
                minLength={2}
                maxLength={15}
                required
              ></input>
              <input
                className="contact-input"
                type="email"
                name="email"
                placeholder="Email"
                minLength={13}
                maxLength={30}
                required
              ></input>
              <textarea
                className="contact-input contact-textarea"
                type="text"
                name="message"
                placeholder="Message"
                minLength={2}
                maxLength={100}
                required
              ></textarea>
              <button className="contact-btn-send" type="submit">
                Send
              </button>
            </form>
          </div>
          <footer className="Footer">
            <h4 className="footer-text">
              © 2023 Jaziz&apos;s Cleaning Service
            </h4>
          </footer>
          <div className={weekModal}>
            <WeekModalText />
            <img
              onClick={deActivateModalsWeek}
              className="close-icon"
              src={closeIcon}
              alt="a X icon to close modal"
            ></img>
          </div>
          <div className={DeepModal}>
            <DeepModalText />
            <img
              onClick={deActivateModalsDeep}
              className="close-icon"
              src={closeIcon}
              alt="a X icon to close modal"
            ></img>
          </div>
          <div className={overlay}></div>
        </>
      )}
    </div>
  );
}
