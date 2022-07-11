/* eslint-disable import/no-anonymous-default-export */
import { ADD_SEARCH_ITEM } from "../constants";
import INITIAL_STATE from "../initialState";

export default function (state = INITIAL_STATE.searchHistory, action = {}) {
  switch (action.type) {
    case ADD_SEARCH_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}
