import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularSeries } from "../utils/moviesSlice";

const usePopularSeries = () => {
  const dispatch = useDispatch();
  const getPopularSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularSeries(json.results));
  };

  useEffect(() => {
    getPopularSeries();
  }, []);
};

export default usePopularSeries;
