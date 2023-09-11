import styles from "./addItemElement.module.css";
const AddItemElement = ({placeholder,btnHandler}) => {
  return (
    <div className={styles.addList}>
      <input
        className={styles.addListChild}
        type="text"
        placeholder={placeholder}
      />
      <button onClick={()=>btnHandler} className={styles.iconPlusWrapper}>
        <img className={styles.iconPlus} alt="" src="add.svg" />
      </button>
    </div>
  );
}

export default AddItemElement

