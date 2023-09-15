import { useContext } from "react";
import style from "./tableData.module.css";
import ListContext from "../../../../../../context/data/ListContext";

const TableData = ({ title, date, cost, status, index }) => {
  const { dispatch } = useContext(ListContext);

  return (
    <tr className={style.tableDataRow}>
      <td className={style.tableDataCell}>
        <div className={style.checkboxWrapper}>
          <input className={style.checkbox} type="checkbox" id={`checkbox-${index}`} />
          <label htmlFor={`checkbox-${index}`}>{title}</label>
        </div>
      </td>
      <td>{date}</td>
      <td>{cost}TK</td>
      <td>{status}</td>
      <td className={style.tableDataCell}>
        <div className={style.actionBtnDiv}>
          <button className={style.actionBtn} onClick={() => { dispatch({ type: "print", index: index }) }}>
            <img src="/print.svg" alt="Print" />
          </button>
          <button className={style.actionBtn} onClick={() => { dispatch({ type: "edit", index: index }) }}>
            <img src="/edit.svg" alt="Edit" />
          </button>
          <button className={style.actionBtn} onClick={() => { dispatch({ type: "delete", index: index }) }}>
            <img src="/delete.svg" alt="Delete" />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default TableData;
