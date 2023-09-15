import React, { useContext, useMemo } from 'react';
import style from './display.module.css';
import TableData from './component/tableData';
import ListContext from '../../../../context/data/ListContext';

const Display = () => {
  const { listsState } = useContext(ListContext);

  const memoizedLists = useMemo(() => listsState, [listsState]);

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
          {memoizedLists.map(({ title, id, date, total,status }, index) => (
            <TableData title={title} date={date} cost={total} status={status} key={id} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
