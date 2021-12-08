import trendingTypes from "./trendingTypes";

const defaultState = {
  page: 1,
  movies: [],
  totalPages: "",
  totalMovies: "",
};

const trendingReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case trendingTypes.SET_MOVIES:
      return { ...state, movies: payload };
    case trendingTypes.SET_PAGE:
      return { ...state, page: payload };
    case trendingTypes.SET_TOTAL_DATA:
      return { ...state, totalPages: payload.total_pages, total_movies: payload.total_results };
    case trendingTypes.SET_ALL:
      return {
        page: payload.page,
        movies: payload.results,
        totalPages: payload.total_pages,
        totalMovies: payload.total_results,
      };
    case trendingTypes.DROP_MOVIES:
      return defaultState;
    default:
      return state;
  }
};

export default trendingReducer;
