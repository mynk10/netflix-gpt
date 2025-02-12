import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedSeries } from "../utils/moviesSlice";

const useTopRatedSeries = () => {
  const dispatch = useDispatch();
  const topRatedSeries = useSelector((store) => store.movies.topRatedSeries);
  const getTopRatedSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedSeries(json.results));
  };

  useEffect(() => {
    !topRatedSeries && getTopRatedSeries();
  }, []);
};

export default useTopRatedSeries;
