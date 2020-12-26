import React from "react";
import fresh from "./images/foodmandu_fresh.png";

function Grocery(props) {
  return (
    <div className="fresh container">
      <p className="ft700 sectiontitlesmall">FOODMANDU FRESH</p>
      <img className="freshimage" src={fresh} />
    </div>
  );
}

export default Grocery;
