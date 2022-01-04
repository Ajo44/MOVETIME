import axios from "../axios";
import React, { useState, useEffect } from "react";
import "./rowpost.css";
import { API_KEY, img_url } from "../../constants/constants";
import YouTube from "react-youtube";

function Rowpost(props) {
  const [movies, setMovies] = useState([]);
  const [id, setId] = useState("");
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        // console.log(response.data.results);
        setMovies(response.data.results);
        //console.log(props.url);
      });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setId(response.data.results[0]);
        } else {
          console.log("array empty");
        }
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smalPoster" : "poster"}
            alt=""
            src={`${img_url + obj.backdrop_path}`}
          />
        ))}
      </div>
      {id && <YouTube opts={opts} videoId={id.key} />}
    </div>
  );
}

export default Rowpost;
