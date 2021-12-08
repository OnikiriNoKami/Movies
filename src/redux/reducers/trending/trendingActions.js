import trendingTypes from "./trendingTypes";

export const trendingSetAllData = (data) => ({type: trendingTypes.SET_ALL, payload: data});
export const trendingSetMovies = (movies) => ({type: trendingTypes.SET_MOVIES, payload: movies});
export const trendingDropMovies = () => ({type: trendingTypes.DROP_MOVIES});
export const trendingSetPage = (page) => ({type: trendingTypes.SET_PAGE, payload: page});
export const trengingSetTotalData = ({total_pages, total_results}) => ({type: trendingTypes.SET_TOTAL_DATA, payload: {total_pages, total_results}})
