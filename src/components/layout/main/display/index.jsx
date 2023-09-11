import React from 'react'
import style from "./display.module.css"
import TableData from './component/tableData'
const Display = () => {
  return (
    <div className={style.tableWrapper}>
      <table className={style.table}>
    <thead className={style.thead}>
      <tr>
        <th className={style.thPaddingLeft}>Shopping List</th>
        <th>Date</th>
        <th>Cost</th>
        <th className={style.thPaddingRight}>Status</th>
      </tr>
    </thead>
    <tbody>
     <TableData title={"my shopping list"} date={"01/04/2023"} cost={100} status={"complete"}/>
     <TableData title={"test title"} date={"01/04/2023"} cost={100} status={"complete"}/>
     <TableData title={"test title"} date={"01/04/2023"} cost={100} status={"complete"}/>
    </tbody>
  </table>
    </div>
  )
}

export default Display