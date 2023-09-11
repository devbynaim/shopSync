import styles from "./create.module.css";
const Create = () => {
  return (
    <div className={styles.addList}>
      <input
        className={styles.addListChild}
        type="text"
        placeholder="New Shopping List"
      />
      <button className={styles.iconPlusWrapper}>
        <img className={styles.iconPlus} alt="" src="add.svg" />
      </button>
    </div>
  );
}

export default Create

