import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import addUpcomingMovies from "../hooks/useUpcomingMovies";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  addUpcomingMovies();
  return (
    <div>
      <MainContainer />
      <Header />
    </div>
  );
};

export default Browse;
