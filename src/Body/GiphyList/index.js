import { CircularProgress } from "@mui/material";
import React from "react";

import GiphyCard from "./GiphyCard";
import styles from "./styles.module.scss";

const GiphyList = ({ data }) => {
  const { data: list, loading } = data;
  return (
    <div className={styles.list}>
      {loading ? (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      ) : list?.length > 0 ? (
        list?.map((item, index) => {
          return <GiphyCard data={item} key={index} />;
        })
      ) : (
        <div className={styles.loading}>
          <span>No Data for this keyword</span>
        </div>
      )}
    </div>
  );
};

export default GiphyList;
