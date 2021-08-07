import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

import "./welcome.styles.css";

const Welcome = () => {
  return (
    <div className="about-hum">
      <div className="about-hum__info-container">
        <div className="about-hum__info-container__logo">
          <Link to="/">
            <img src={logo} alt="hum-logo" />
          </Link>
        </div>
        <div className="about-hum__info-container__text">
          <div className="about-hum__info-container__text-heading">
            <p className="normal__text-heading">Playing</p>
            <p className="bold__text-heading">
              <span>Your</span> Mood
            </p>
            <p className="normal__text-heading">currently</p>
          </div>
          <div className="about_hum__info-container__para">
            <p>
              A platform designed to help you with the music based on your mood.
              Feel rhythmic to search your moody songs.
            </p>
          </div>
        </div>
      </div>
      <div className="about-hum__img-container"></div>
    </div>
  );
};

export default Welcome;
