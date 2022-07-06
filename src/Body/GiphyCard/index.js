import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadIcon from "@mui/icons-material/Download";
import LinkIcon from "@mui/icons-material/Link";
import styles from "./styles.module.scss";

const GiphyCard = ({ data }) => {
  const openWindow = () => {
    window.open(data?.url);
  };
  return (
    <div className={styles.card} onClick={openWindow}>
      <span className={styles.title}>{data?.title}</span>
      <img src={data?.images?.preview_gif?.url} alt={data?.title} />
      <div className={styles.actionIcons}>
        <FavoriteIcon onClick={openWindow} className={styles.icon} />
        <DownloadIcon onClick={openWindow} className={styles.icon} />
        <LinkIcon onClick={openWindow} className={styles.icon} />
      </div>
    </div>
  );
};

export default GiphyCard;
