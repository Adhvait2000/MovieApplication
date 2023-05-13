import { useState, useEffect } from "react";


import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {

  //State to hold the vaoue of the search input
  const [searchTerm, setSearchTerm] = useState("");

  //State to hold the list of movies fetched from the API
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //initial search when the component starts up
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    //fetching movie data from the API
    const response = await fetch(`${API_URL}&s=${title}`);

    //update the list of movies in the state
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
