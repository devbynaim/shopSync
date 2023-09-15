import { useContext, useState } from "react";
import styles from "./filter.module.css";
import uniqid from "uniqid"
import ListContext from "../../../../context/data/ListContext";
const tags = ['Date','cost','runnig','complete']
const Filter = () => {
  const [filters,setFilter] = useState([])
  const {dispatch,listsState} = useContext(ListContext)
  return (
    <div className={styles.filter}>
      <span className={styles.filters}>Filters</span>
      <div className={styles.tagParent}>
        {tags.map(tag=>{
          return <div className={`${styles.tag1} ${filters.indexOf(tag)!=-1 && styles.active}`} key={uniqid()}>
          <div className={styles.egg}>{tag}</div>
        </div>
        })}
      </div>
    </div>
  );
};

export default Filter;
