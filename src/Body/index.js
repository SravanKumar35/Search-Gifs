import { CircularProgress, OutlinedInput } from "@mui/material";
import GiphyCard from "./GiphyCard";
import { useHooks } from "./hooks";
import SearchHistory from "./SearchHistory";
import styles from "./styles.module.scss";

const Body = () => {
  const {
    data,
    search,
    searchHistory,
    handleChange,
    handleKeyDown,
    dataLoading,
  } = useHooks();

  return (
    <div className={styles.body}>
      <div className={styles.input}>
        <OutlinedInput
          sx={{ fontSize: "24px", fontWeight: "bold", paddingLeft: "20px " }}
          type="text"
          value={search}
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
          {dataLoading ? (
            <div className={styles.loading}>
              <CircularProgress />
            </div>
          ) : (
            data.map((item, index) => {
              return <GiphyCard data={item} key={index} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
