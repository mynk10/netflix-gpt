import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative  z-20">
        <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated Series"} movies={movies.topRatedSeries} />
        <MovieList title={"Popular Series"} movies={movies.popularSeries} />
      </div>
    </div>
  );
};

export default SecondaryComponent;
