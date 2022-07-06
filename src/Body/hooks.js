import axios from "axios";
import { useEffect, useState } from "react";

export const useHooks = () => {
  const [data, setData] = useState([]);
  const [search, setSearchParams] = useState("#");
  const [searchHistory, setSearchHistory] = useState([]);
  const [key, setKey] = useState("trending");
  const [dataLoading, setDataLoading] = useState(false);

  const getGifs = async (key) => {
    setDataLoading(true);
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=C6BAoXk36WbWd6S73yaez997LBO3FSDa&q=${key}&limit=25&offset=0&rating=g&lang=en`
    );
    setData(response.data.data);
    setDataLoading(false);
  };

  const handleChange = (e) => {
    setSearchParams(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "#") setKey("trending");
      else {
        setSearchHistory([...searchHistory, search]);
        setKey(e.target.value.substring(1));
      }
    }
  };

  useEffect(() => {
    getGifs(key);
  }, [key]);

  return {
    data,
    search,
    searchHistory,
    dataLoading,
    handleChange,
    handleKeyDown,
  };
};
