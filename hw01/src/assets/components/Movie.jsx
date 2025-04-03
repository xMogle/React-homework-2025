import React from "react";
import { movies } from "/src/assets/components/list";

const MovieList = () => {
  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>
          {movie.title} ({movie.year})
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
