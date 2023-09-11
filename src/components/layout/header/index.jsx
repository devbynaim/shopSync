import styles from "./header.module.css";
const Header = () => {
  return (
    <div className={styles.topmenu}>
      <div className="container">
      <h4 className={styles.shopsync}>ShopSync</h4>
      </div>
    </div>
  );
}

export default Header