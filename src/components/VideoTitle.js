import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-36 px-16 bg-gradient-to-r from-black via-transparent to-transparent">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <p className="w-1/4 mt-4 text-white">{overview}</p>

      <div className="flex gap-2 mt-4 ">
        <button className="bg-white rounded-lg px-12 py-4 hover:bg-opacity-70 font-semibold text-black">
          Play
        </button>
        <button className="bg-gray-400 text-white rounded-lg px-10 py-4 font-semibold hover:bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
