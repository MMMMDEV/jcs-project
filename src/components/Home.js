import React, { useEffect, useState } from "react";
import logo from "../images/Logo.png";
import duster from "../images/duster.png";
import spray from "../images/spray-bottle.png";
import Review from "./Review.js";
import left from "../images/left.svg";
import right from "../images/right.svg";
import closeIcon from "../images/close.svg";
import DeepModalText from "./DeepModalText";
import WeekModalText from "./WeekModalText";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [reviewData, setReviewData] = useState(null);
  const [count, setCount] = useState(0);
  const [weekModal, setWeekModal] = useState("weekModal");
  const [DeepModal, setDeepModal] = useState("deepModal");
  const [overlay, setOverlay] = useState("overlay-all");
  const [classActiveModalWeek, setclassActiveModalWeek] = useState(false);
  const [classActiveModalDeep, setclassActiveModalDeep] = useState(false);
  const { ref: refServices, inView: servicesIsVisible } = useInView();
  const { ref: refReviews, inView: reviewsIsVisible } = useInView();
  const { ref: refForm, inView: formIsVisible } = useInView();

  function addCount() {
    if (count < 3) {
      setCount(count + 1);
    } else if (count === 3) {
      setCount(count - 1);
    }
  }

  function subCount() {
    if (count > 0) {
      setCount(count - 1);
    } else if (count === 0) {
      setCount(3);
    }
  }

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
    (async function () {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8000/reviews");
        const data = await response.json();
        setReviewData(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

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
            <a className="contact-link" href="#form-container">
              Contact me
            </a>
          </header>
          <div className="Hero">
            <h1 className="hero-text">
              &quot;Where only shine, Is left behind&quot;
            </h1>
            <button className="hero-cta-btn">Get a quick estimate!</button>
            <div className="overlay"></div>
          </div>
          <div
            ref={refServices}
            className={`${"Services"} ${servicesIsVisible ? "inViewX" : ""}`}
          >
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
                <h3 className="deep-clean-title">Deep cleaning</h3>
                <p className="deep-clean-paragraph">
                  One time cleaning done with more precision, for those bigger
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
          </div>
          <div
            className={`${"Reviews"} ${reviewsIsVisible ? "inViewX" : ""}`}
            ref={refReviews}
          >
            {reviewData != null && (
              <>
                <div className="btn-container">
                  <button className="btn-slide btn-left" onClick={subCount}>
                    <img
                      className="arrow"
                      src={left}
                      alt="arrow facing left"
                    ></img>
                  </button>
                </div>
                <div className="review-container">
                  <Review
                    name={reviewData[0].name}
                    serviceType={reviewData[0].serviceType}
                    message={reviewData[0].message}
                    rating={reviewData[0].rating}
                    id={0}
                    chosen={count}
                    newClass="show"
                  />
                  <Review
                    name={reviewData[1].name}
                    serviceType={reviewData[1].serviceType}
                    message={reviewData[1].message}
                    rating={reviewData[1].rating}
                    id={1}
                    chosen={count}
                    newClass="show"
                  />
                  <Review
                    name={reviewData[2].name}
                    serviceType={reviewData[2].serviceType}
                    message={reviewData[2].message}
                    rating={reviewData[2].rating}
                    id={2}
                    chosen={count}
                    newClass="show"
                  />
                  <Review
                    name={reviewData[3].name}
                    serviceType={reviewData[3].serviceType}
                    message={reviewData[3].message}
                    rating={reviewData[3].rating}
                    id={3}
                    chosen={count}
                    newClass="show"
                  />
                </div>
                <div className="btn-container">
                  <button className="btn-slide btn-right" onClick={addCount}>
                    <img
                      className="arrow"
                      src={right}
                      alt="arrow facing left"
                    ></img>
                  </button>
                </div>
              </>
            )}
          </div>
          <div
            ref={refForm}
            className={`${"form-container"} ${formIsVisible ? "inViewX" : ""}`}
            id="form-container"
          >
            <h2 className="form-title">Contact</h2>
            <p className="form-text">
              In case of any specific questions feel free to reach out us!
            </p>
            <form
              className="form"
              action="https://formsubmit.co/your@email.com"
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
          <div className={overlay}></div>
        </>
      )}
    </div>
  );
}
