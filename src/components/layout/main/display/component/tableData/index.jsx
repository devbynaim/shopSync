import style from "./tableData.module.css"
const TableData = ({title,date,cost,status}) => {
  return (
    <tr className={style.tr}>
    <td className={style.tdPaddingLeft}>
    <div className={style.checkWrapper}>
    <input className={style.checkbox} type="checkbox" name="" id="" />
    {title}
    </div>
    </td>
    <td>{date}</td>
    <td>{cost}TK</td>
    <td>{status}</td>
    <td className={style.tdPaddingRight}>
        <div className={style.actionBtnDiv}>
            <button className={style.actionBtn}><img src="/print.svg" alt="" /></button>
            <button className={style.actionBtn}><img src="/edit.svg" alt="" /></button>
            <button className={style.actionBtn}><img src="/delete.svg" alt="" /></button>
        </div>
    </td>
  </tr>
  )
}

export default TableData