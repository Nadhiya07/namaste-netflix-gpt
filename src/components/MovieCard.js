import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ card }) => {
  return (
    <div className="w-40">
      <img src={IMG_CDN_URL + card} alt="" />
    </div>
  );
};

export default MovieCard;
