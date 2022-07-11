import search from "./searchReducer";
import trending from "./trendingReducer";
import searchHistory from "./searchHistoryReducer"
import { combineReducers } from "redux";

const reducers = {
  trending,
  search,
  searchHistory
};

export default combineReducers(reducers);
