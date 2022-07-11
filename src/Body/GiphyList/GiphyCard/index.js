import React from "react";
import Tooltip from "@mui/material/Tooltip";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadIcon from "@mui/icons-material/Download";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import styles from "./styles.module.scss";
import { useHooks } from "./hooks";

const GiphyCard = ({ data }) => {
  const { isCopied, openWindow, handleCopy, handleMouseLeave, downloadImage } =
    useHooks(data);

  return (
    <div className={styles.card} onMouseLeave={handleMouseLeave}>
      <span className={styles.title}>{data?.title}</span>
      <img src={data?.images?.preview_gif?.url} alt={data?.title} />
      <div className={styles.actionIcons}>
        <FavoriteIcon onClick={openWindow} className={styles.icon} />
        <DownloadIcon onClick={downloadImage} className={styles.icon} />
        <Tooltip title={isCopied ? "Copied" : "Copy Link"}>
          <ContentCopyIcon onClick={handleCopy} className={styles.icon} />
        </Tooltip>
      </div>
    </div>
  );
};

export default GiphyCard;
