import { useContext } from "react";
import style from "./tableData.module.css";
import ListContext from "../../../../../../context/data/ListContext";
import useModel from "../../../../../shared/modal/hooks/useModal";
import Modal from "../../../../../shared/modal";


const TableData = ({ title, date, cost, status, index }) => {
  const { dispatch } = useContext(ListContext);
  let {open,close,isOpen} = useModel()
  let isComplete = status=="complete"
  return (
    <>
    {isOpen && <Modal close={close} actionType="edit" title={title}/>}
    <tr className={ `${isComplete && style.tableDataRow}`}>
      <td className={style.tableDataCell}>
        <div className={style.checkboxWrapper}>
          <input className={style.checkbox} type="checkbox" id={`checkbox-${index}`} defaultChecked={isComplete} onClick={(e)=>dispatch({type:"listStatus",isComplete:e.target.checked,index})} />
          <label htmlFor={`checkbox-${index}`}>{title}</label>
        </div>
      </td>
      <td>{date}</td>
      <td>{cost}Tk</td>
      <td>{status}</td>
      <td className={style.tableDataCell}>
        <div className={style.actionBtnDiv}>
          <button className={style.actionBtn} onClick={() => { dispatch({ type: "print", index: index }) }}>
            <img src="/print.svg" alt="Print" />
          </button>
          {/* <button className={style.actionBtn} onClick={() => {
            console.log("eidt")
            open()
          }}>
            
            <img src="/edit.svg" alt="Edit" />
          </button> */}
          <button className={style.actionBtn} onClick={() => { dispatch({ type: "delete", index: index }) }}>
            <img src="/delete.svg" alt="Delete" />
          </button>
        </div>
      </td>
    </tr>
    </>
  );
}

export default TableData;
