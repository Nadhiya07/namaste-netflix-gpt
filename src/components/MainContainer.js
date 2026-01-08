import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movieData = useSelector((store) => store.movie?.movies);
  if (!movieData.length) return;

  const { original_title, overview, id } = movieData[0] || {};
  console.log("Movie Data in MainContainer:", movieData);
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground trailerId={id} />
    </div>
  );
};

export default MainContainer;
