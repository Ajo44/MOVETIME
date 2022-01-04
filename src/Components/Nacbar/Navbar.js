import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Navbar.css";
import { API_KEY } from "../../constants/constants";

function Navbar() {
  const [car, setCar] = useState("");
  const [two, setTwo] = useState([]);
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then(function (response) {
        if (car.length > 0) {
          let query = car.toLowerCase();
          for (const key in response.data.results) {
            let fruit = response.data.results[key].title;
            console.log(response.data.results[1].title);
            if (fruit.slice(0, query.length).indexof(query) !== -1) {
              setTwo((prev) => {
                return [...prev, response.data.results[key].title];
              });
            }
          }
        } else {
          setTwo([]);
        }
      });
  });
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="avatar"
      />
      <div className="right">
        <input
          type="text"
          placeholder="search here"
          onChange={(e) => setCar(e.target.value)}
          value={car}
        />
        <div className="searchresult">
          {two.map((data, index) => (
            <a href="#" key={index}>
              <div className="show">{data}</div>
            </a>
          ))}
        </div>
      </div>
      <img
        className="avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar3"
      />
    </div>
  );
}

export default Navbar;
