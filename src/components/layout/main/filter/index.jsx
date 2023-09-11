import styles from "./filter.module.css";
const Filter = () => {
  return (
    <div className={styles.filter}>
      <span className={styles.filters}>Filters</span>
      <div className={styles.tagParent}>
        <ul className={styles.tag}>
          <div className={styles.egg}>Date</div>
        </ul>
        <div className={styles.tag1}>
          <div className={styles.egg}>Cost</div>
        </div>
        <div className={styles.tag2}>
          <div className={styles.egg}>Running</div>
        </div>
        <div className={styles.tag3}>
          <div className={styles.egg}>Complete</div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
