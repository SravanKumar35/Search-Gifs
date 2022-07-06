import React from "react";
import HideImageIcon from "@mui/icons-material/HideImage";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <HideImageIcon sx={{ fontSize: 80 }} />
      </div>
      <span>Hello, Giphy</span>
    </div>
  );
};

export default Header;
