import React, { useState, useEffect } from "react";
import moviecard from "./moviecard";
import "./App.css";

const API_URL = "https://www.boredapi.com/api/activity";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>Your favorite show </h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Find something to watch"
        />
        <button onClick={() => searchMovies(searchTerm)}>Search</button>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (<moviecard movie={movie}/>))}
        </div>
      ) : (
          <div className="container">
          {movies.map((movie) => (<moviecard movie={movie}/>))}
        </div>
      )}
    </div>
  );
};

export default App;