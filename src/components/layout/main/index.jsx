import styles from "./main.module.css"
import AddList from "./create"
import Filter from "./filter"
import Display from "./display"
import ListState from "../../../context/data/ListState"

const Main = () => {
  return (
    <ListState>
      <div id={styles.main}>
        <div className="container">
           <AddList/>
           <Filter/>
           <Display/>
        </div>
    </div>
    </ListState>
  )
}

export default Main