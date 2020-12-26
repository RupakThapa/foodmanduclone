import React, { useState } from "react";
import "./Banner.css";
import food1 from "./images/food1.png";
import food2 from "./images/food2.png";
import food3 from "./images/food3.png";
import food4 from "./images/food2.png";

function Banner(props) {
  const [foodstate, setFoodState] = useState(false);

  const foodFunctionin = () => {
    setFoodState(true);
  };

  const foodFunctionout = () => {
    console.log("out focus");
    setFoodState(false);
  };

  return (
    <div className="banner">
      <img src={food1} className={foodstate ? "food1x" : "food1"} />
      <img src={food2} className={foodstate ? "food2x" : "food2"} />
      <img src={food3} className={foodstate ? "food3x" : "food3"} />
      <img src={food4} className={foodstate ? "food4x" : "food4"} />

      <div className="centerdiv">
        <h2>Order food from the widest range of restaurants.</h2>
        <form className="searchgrp">
          <input
            name="search"
            type="text"
            className="search"
            onFocus={foodFunctionin}
            onBlur={foodFunctionout}
            placeholder="Restaurant or Cuisine (leave it blank to browse all)"
          />
          <input type="submit" value="Find Restaurants" className="searchbtn" />
        </form>
      </div>
    </div>
  );
}

export default Banner;
