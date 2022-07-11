import { SEARCH, SEARCH_ERROR, SEARCH_SUCCESS } from "../constants";
import INITIAL_STATE from "../initialState";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE.search, action = {}) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
