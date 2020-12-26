import React from "react";
import logo from "./logo.jpg";
import "./Header.css";

function Header(props) {
  const displayalert = () => {
    alert("Site is still being devloped.");
  };
  return (
    <div className="navbar container">
      <img src={logo} className="logo" />

      <button type="submit" className="btn btn-outline" onClick={displayalert}>
        LOGIN
      </button>
    </div>
  );
}

export default Header;
