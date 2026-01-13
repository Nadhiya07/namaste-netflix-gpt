import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import addUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
import GptSearchBar from "./GptSearchBar";
import { useSelector } from "react-redux";
const Browse = () => {
  const gptPage = useSelector((Store) => Store.gptSearchPage.gptPage);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  addUpcomingMovies();
  return (
    <div>
      {gptPage ? <GptSearchBar /> : <MainContainer />}

      <Header />
    </div>
  );
};

export default Browse;
