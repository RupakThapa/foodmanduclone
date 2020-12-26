import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./Featured.css";
import Card from "./Card.js";
import datax from "./restaurantdata.js";

function Featured(props) {
  return (
    <div>
      <div className="container featuredtop">
        <p className="ft700 sectiontitlesmall">FEATURED RESTAURANTS</p>
        <p className="featureview">
          View All
          <ArrowForwardIcon />
        </p>
      </div>
      <div className="container featurecards">
        {datax.map((item) => (
          <Card name={item.name} image={item.image} />
        ))}
      </div>
    </div>
  );
}

export default Featured;
