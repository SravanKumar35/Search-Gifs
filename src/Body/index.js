import { OutlinedInput } from "@mui/material";
import { connect } from "react-redux";

import { useHooks } from "./hooks";
import SearchHistory from "./SearchHistory";
import styles from "./styles.module.scss";
import {
  searchGifs,
  trendingGifs,
  addSearchHistoryItem,
} from "../redux/actions";
import GiphyList from "./GiphyList";

const Body = (props) => {
  const {
    trending,
    search,
    searchHistory,
    searchGifs,
    trendingGifs,
    addSearchHistoryItem,
  } = props;
  
  const { keyword, key, handleChange, handleKeyDown } = useHooks(
    searchGifs,
    trendingGifs,
    addSearchHistoryItem
  );

  return (
    <div className={styles.body}>
      <div className={styles.input}>
        <OutlinedInput
          sx={{ fontSize: "24px", fontWeight: "bold", paddingLeft: "20px " }}
          type="text"
          value={keyword}
          onChange={(e) => {
            if (e.target.value.length > 0) {
              handleChange(e);
            }
          }}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.searchHistory}>
          <SearchHistory searchHistory={searchHistory} />
        </div>
        <div className={styles.list}>
          <GiphyList data={key === "trending" ? trending : search} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  trending: state.trending,
  search: state.search,
  searchHistory: state.searchHistory,
});

const mapDispatchToProps = {
  searchGifs,
  trendingGifs,
  addSearchHistoryItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
