import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/MovieSlice";
const VideoBackground = ({ trailerId }) => {
  const trailerIdToUse = useSelector((store) => store?.movies?.trailerVideo);
  const dispatch = useDispatch();
  const getMoviewTrailer = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        trailerId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const data = await response.json();
    const filerData = data?.results?.filter(
      (trailer) => trailer.type === "Trailer"
    );
    const trailerData = filerData?.length ? filerData[0] : data?.results[0];
    dispatch(addTrailerVideo(trailerData));
  };

  useEffect(() => {
    getMoviewTrailer();
  }, []);
  if (!trailerIdToUse) return null;
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerIdToUse.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
