import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 mx-5 rounded-lg overflow-hidden">  
      <img alt=" movie poster" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
