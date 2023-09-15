import { useState } from "react";
import styles from "./addItemElement.module.css";

const AddItemElement = ({ placeholder, btnHandler, open }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const inputHandler = (e) => {
    const { value } = e.target;
    setInputValue(value);
    setError(""); // Clear any previous error message
  };

  const btClickHandler = () => {
    if (!inputValue.trim()) {
      setError("Please enter a valid value."); // Display an error message
      return;
    }

    if (open) {
      open(inputValue);
    } else {
      btnHandler(inputValue);
    }

    setInputValue("");
    setError(""); // Clear the error message after successful action
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.addList} ${error && styles.error}`} >
        <input
          className={styles.addListChild}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={inputHandler}
        />
        <button onClick={btClickHandler} className={styles.iconPlusWrapper}>
          <img className={styles.iconPlus} alt="" src="add.svg" />
        </button>
      </div>
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export default AddItemElement;
