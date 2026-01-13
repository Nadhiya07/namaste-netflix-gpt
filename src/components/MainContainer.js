import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import SecondaryContainer from "./SecondaryContainer";

const MainContainer = () => {
  const movieData = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movieData.length) return;

  const { original_title, overview, id } = movieData[0] || {};
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground trailerId={id} />
      <SecondaryContainer />
    </div>
  );
};

export default MainContainer;
