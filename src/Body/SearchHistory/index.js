import React from "react";
import styles from "./styles.module.scss";

const SearchHistory = ({ searchHistory }) => {
  return (
    <div className={styles.main}>
      <h1>Search History</h1>
      <div className={styles.list}>
        {searchHistory.map((item, index) => {
          return (
            <div className={styles.listItem} key={index}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchHistory;
