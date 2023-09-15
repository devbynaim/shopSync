import { useContext, useEffect, useState } from "react";
import uniqid from 'uniqid';
import ListContext from "../../../context/data/ListContext";
import AddItemElement from "../addItem";
import style from "./modal.module.css";

const defaultList = {
  name: "",
  quantity: "1KG",
  price: 100,
  id: uniqid()
};

const tag = ['tomato', 'orange', 'apple', 'vandi', 'potato'];

const Modal = ({ close, title,actionType="add" }) => {
  const [lists, setList] = useState([]);
  const [totalcost, setTotalcost] = useState(0);
  const { dispatch } = useContext(ListContext);
  const isEdit = actionType=="add"?"checkout":"update"
  const handleChange = (e, index) => {
    let key = e.target.name;
    let value = e.target.value;
    setList(prevList => {
      let updatedList = [...prevList];
      updatedList[index] = { ...prevList[index], [key]: value };
      return updatedList;
    });
  };

  const handleItemClick = (index) => {
    addItem(index);
  };

  const handleDelete = (index) => {
    setList(preList => {
      const upList = [...preList];
      upList.splice(index, 1);
      return upList;
    });
  };

  const handelCustomItem = (inputValue) => {
    addItem(0, inputValue);
  };

  function addItem(index, value) {
    let newItem = { ...defaultList, id: uniqid(), name: value ?? tag[index] };
    setList(preList => ([...preList, newItem]));
  }

  function action(){
    dispatch({
      type: actionType,
      payload: {
        title: title,
        lists: lists,
        total: totalcost
      }
    });
    close();
  }

  useEffect(() => {
    let total = lists.reduce((acc, { price }) => {
      acc = parseFloat(acc) + parseFloat(price);
      return acc;
    }, 0);
    setTotalcost(total);
  }, [lists]);

  return (
    <div className={style.modal}>
      <div className={`${style.container} container`}>
        <div className={style.closeDiv}>
          <h4 className={style.title}>{title}</h4>
          <button onClick={close} className={style.closeBtn}>X</button>
        </div>
        <AddItemElement placeholder="custom item" btnHandler={handelCustomItem} />
        <ul className={style.tag}>
          {tag.map((item, index) => <li key={uniqid()} onClick={() => handleItemClick(index)}>{item}</li>)}
        </ul>
        <div className={style.tableWrapper}>
          <table className={style.table}>
            <thead className={style.thead}>
              <tr>
                <th className={style.thPaddingLeft}>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                lists.map((list, index) => {
                  return <tr key={list.id}>
                    <td className={style.thPaddingLeft}>{list.name}</td>
                    <td><input onChange={(e) => handleChange(e, index)} type="text" name="quantity" id="" value={list.quantity} /></td>
                    <td><input onChange={(e) => handleChange(e, index)} type="number" name="price" id="" value={list.price} /></td>
                    <td><img src="/delete.svg" alt="" onClick={() => handleDelete(index)} /></td>
                  </tr>
                })
              }
            </tbody>
          </table>
          <div className={style.payDiv}>
            <p>Total Cost {totalcost}TK</p>
            <button className={style.checkoutBtn} onClick={action}>{actionType=="add"?"checkout":"update"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
