import axios from "axios";
import { TRENDING, TRENDING_ERROR, TRENDING_SUCCESS } from "../constants";

export const trendingGifs = (keyword) => {
  return (dispatch) => {
    dispatch({ type: TRENDING });

    axios({
      method: "GET",
      url: `https://api.giphy.com/v1/gifs/search?api_key=C6BAoXk36WbWd6S73yaez997LBO3FSDa&q=${keyword}&limit=25&offset=0&rating=g&lang=en`,
    })
      .then((result) => {
        dispatch({ type: TRENDING_SUCCESS, payload: result.data.data });
      })
      .catch((error) => {
        dispatch({ type: TRENDING_ERROR, payload: error });
      });
  };
};
