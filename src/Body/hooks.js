
import { useEffect, useState } from "react";

export const useHooks = (searchGifs, trendingGifs, addSearchHistoryItem) => {
  const [keyword, setKeyword] = useState("#");
  const [key, setKey] = useState("trending");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "#") setKey("trending");
      else {
        addSearchHistoryItem(keyword)
        setKey(e.target.value.substring(1));
      }
    }
  };

  useEffect(() => {
    if (key === "trending") {
      trendingGifs(key);
    } else {
      searchGifs(key)
    }
    
  }, [key, searchGifs, trendingGifs]);

  return {
    keyword,
    handleChange,
    handleKeyDown,
    key,
  };
};
