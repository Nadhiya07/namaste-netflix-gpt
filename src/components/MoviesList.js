import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movieList }) => {
  const moviesList = movieList;
  if (!moviesList?.length) return null;
  return (
    <div>
      <h1>{title}</h1>
      <div className="overflow-x-scroll">
        <div className="flex">
          <div className="flex flex-row gap-4">
            {moviesList?.map((movie) => (
              <MovieCard key={movie.id} card={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
