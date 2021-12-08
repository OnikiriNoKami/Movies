import { combineReducers } from "redux";

import trendingReducer from "./trending/trendingReducer";

const rootReducer = combineReducers({
  trending: trendingReducer,
});

export default rootReducer;
