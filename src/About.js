import React from "react";
import "./About.css";

function About(props) {
  return (
    <div className="about">
      <div className="aboutsection">
        <div className="overlay">
          <h2 className="whitetext">About Us</h2>

          <p className="whitetext ft300">
            Foodmandu is the fastest, easiest and most convenient way to enjoy
            the best food of your favourite restaurants <br /> at home, at the
            office or wherever you want to.
          </p>
          <br />
          <p className="whitetext ft300">
            We know that your time is valuable and sometimes every minute in the
            day counts. That’s why we <br />
            deliver! So you can spend more time doing the things you love.
          </p>

          <button className="btn btn-green">LEARN MORE</button>
        </div>
      </div>
    </div>
  );
}

export default About;
