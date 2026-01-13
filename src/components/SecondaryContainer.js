import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movieList = useSelector((store) => store?.movies);
  // console.log("Now Playing Movies in SecondaryContainer:", nowPlayingMovies);

  return (
    <div>
      <MoviesList title="Now Playing" movieList={movieList?.nowPlayingMovies} />
      <MoviesList title="Popular Movies" movieList={movieList.popularMovies} />
      <MoviesList
        title="Top Rated Movies"
        movieList={movieList.topRatedMovies}
      />
      <MoviesList
        title="Upcoming Movies"
        movieList={movieList.upComingMovies}
      />
    </div>
  );
};

export default SecondaryContainer;
