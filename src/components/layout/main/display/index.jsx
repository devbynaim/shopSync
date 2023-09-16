import React, { useContext, useMemo } from 'react';
import style from './display.module.css';
import TableData from './component/tableData';
import ListContext from '../../../../context/data/ListContext';
import { sortByProperty } from '../../../../utils';

const Display = () => {
  const { listsState, filterState } = useContext(ListContext);

  const memoizedLists = useMemo(() => listsState, [listsState]);
  const sortBy = filterState.includes("low cost") ? "low" : "high";
  const memoizedListsSorted = ['low cost','high cost'].some(tag=>filterState.includes(tag))?sortByProperty(memoizedLists,'total',sortBy):memoizedLists


  

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
          {memoizedListsSorted.map(({ title, id, date, total,status }, index) => {
            if(filterState.includes('all')){
              return <TableData title={title} date={date} cost={total} status={status} key={id} index={index} />
            }else if(filterState.includes(status)){
              return <TableData title={title} date={date} cost={total} status={status} key={id} index={index} />
            }
            
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
