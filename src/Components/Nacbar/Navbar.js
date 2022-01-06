import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Navbar.css";
import { API_KEY } from "../../constants/constants";

function Navbar() {
  const [car, setCar] = useState("");
  const [two, setTwo] = useState([]);
  const [sugg, setSugg] = useState([]);
  useEffect(() => {
    if (car.length > 0) {
      axios
        .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
        .then((res) => res.data.results)
        .then((responsedata) => {
          let query = car.toLowerCase();
          for (const key in responsedata) {
            let fruit = responsedata[key].title
              ? responsedata[key].title
              : responsedata[key].original_name.toLowerCase();

            console.log(fruit);
            if (fruit.slice(0, query.length).indexOf(query) !== -1) {
              setTwo((prev) => {
                return [...prev, responsedata[key].title];
              });
            }
          }
        });
    }
  }, [car]);
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
            <a href="http://localhost:3000/" key={index}>
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
