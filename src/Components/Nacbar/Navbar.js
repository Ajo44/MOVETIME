import React from "react";
import "./Navbar.css";
import movie from "../Banner/Banner";

function Navbar(props) {
  console.log(props.data);
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="avatar"
      />
      <div className="right">
        <input type="text" placeholder="search here" />
        {props.data}
        <img
          className="avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar3"
        />
      </div>
    </div>
  );
}

export default Navbar;
