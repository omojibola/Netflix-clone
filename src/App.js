import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  const API_KEY = "9c08ff065ba28890f933b6d52297d680";
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={`/discover/tv?api_key=${API_KEY}&with_networks=213`}
        isLargeRow
      />
      <Row
        title='Trending Now'
        fetchUrl={`/trending/all/week?api_key=${API_KEY}&language=en-US`}
      />
      <Row
        title='Top Rated'
        fetchUrl={`/movie/top_rated?api_key=${API_KEY}&language=en-US`}
      />
      <Row
        title='Action Movies'
        fetchUrl={`/discover/movie?api_key=${API_KEY}&with_genres=28`}
      />
      <Row
        title='Comedy Movies'
        fetchUrl={`/discover/movie?api_key=${API_KEY}&with_genres35`}
      />
      <Row
        title='Horror Movies'
        fetchUrl={`/discover/movie?api_key=${API_KEY}&with_genres=27`}
      />
      <Row
        title='Romance Movies'
        fetchUrl={`/discover/movie?api_key=${API_KEY}&with_genres=10749`}
      />
      <Row
        title='Documentaries'
        fetchUrl={`/discover/movie?api_key=${API_KEY}&with_genres=99`}
      />
    </div>
  );
}

export default App;
