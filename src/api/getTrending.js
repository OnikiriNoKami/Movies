import axios from "axios";
import { mediaTypes, timeWindow } from "./consts";
import { trendingSetAllData } from "../redux/reducers/trending/trendingActions";

export default async function getTrending({ page, mediaType, timeWindow }) {
  if (!page || page < 1) page = 1;
  const result = await axios.get(
    `https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?api_key=5f3882f0530348fb6bcf7c0afbfd5f3b&page=${page}`
  );

  return result;
}

export const getTrendingMovieWeek = (page) => async (dispatch) => {
  getTrending({ page, mediaType: mediaTypes.MOVIE, timeWindow: timeWindow.WEEK })
  .then(result => {
    dispatch(trendingSetAllData(result.data))
  })
  .catch(console.error)
};
