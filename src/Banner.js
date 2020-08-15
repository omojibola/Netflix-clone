import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  const API_KEY = "9c08ff065ba28890f933b6d52297d680";

  useEffect(() => {
    async function fetchData() {
      const movieApi = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
      const request = await axios.get(movieApi);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className='banner_contents'>
        <h1 className='banner_title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner_buttons'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>

        <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className='banner-fadeBottom'></div>
    </header>
  );
}

export default Banner;
