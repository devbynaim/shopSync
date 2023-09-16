import { useContext } from "react";
import styles from "./filter.module.css";
import ListContext from "../../../../context/data/ListContext";

const tags = ['all', 'low cost', 'high cost', 'running', 'complete'];

const Filter = () => {
  const { dispatchFilter, filterState } = useContext(ListContext);

  const handleFilter = (tag) => {
    if (filterState.includes(tag)) {
      dispatchFilter({ type: "filterRemove", tag });
    } else {
      dispatchFilter({ type: "filterAdd", tag });
    }
  };

  return (
    <div className={styles.filter}>
      <span className={styles.filters}>Filters</span>
      <div className={styles.tagParent}>
        {tags.map((tag) => (
          <div
            onClick={() => handleFilter(tag)}
            className={`${styles.tag1} ${filterState.includes(tag) && styles.active}`}
            key={tag}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
