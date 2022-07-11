import axios from "axios";
import { SEARCH, SEARCH_ERROR, SEARCH_SUCCESS } from "../constants";

export const searchGifs = (keyword) => {
  return (dispatch) => {
    dispatch({ type: SEARCH });

    axios({
      method: "GET",
      url: `https://api.giphy.com/v1/gifs/search?api_key=C6BAoXk36WbWd6S73yaez997LBO3FSDa&q=${keyword}&limit=25&offset=0&rating=g&lang=en`,
    })
      .then((result) => {
        dispatch({ type: SEARCH_SUCCESS, payload: result.data.data });
      })
      .catch((error) => {
        dispatch({ type: SEARCH_ERROR, payload: error });
      });
  };
};
