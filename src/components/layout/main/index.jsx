import styles from "./main.module.css"
import AddList from "./create"
import Filter from "./filter"
import Display from "./display"

const Main = () => {
  return (
    <div id={styles.main}>
        <div className="container">
           <AddList/>
           <Filter/>
           <Display/>
        </div>
    </div>
  )
}

export default Main