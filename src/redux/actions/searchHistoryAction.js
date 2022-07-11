import { ADD_SEARCH_ITEM } from "../constants"

export const addSearchHistoryItem = (keyword) => {
  return (dispatch) => {
  dispatch({type: ADD_SEARCH_ITEM, payload: keyword})
  }
}