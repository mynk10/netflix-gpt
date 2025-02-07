import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedSeries } from "../utils/moviesSlice";

const useTopRatedSeries = () => {
  const dispatch = useDispatch();
  const getTopRatedSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedSeries(json.results));
  };

  useEffect(() => {
    getTopRatedSeries();
  }, []);
};

export default useTopRatedSeries;
