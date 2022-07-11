import { TRENDING, TRENDING_ERROR, TRENDING_SUCCESS } from "../constants";
import INITIAL_STATE from "../initialState";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE.trending, action = {}) {
  switch (action.type) {
    case TRENDING:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case TRENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case TRENDING_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
}
