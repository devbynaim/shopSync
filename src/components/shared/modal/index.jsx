import style from "./modal.module.css";
import AddItemElement from "../addItem";

const Modal = () => {
  return (
    <div className={style.modal}>
      <div className={`${style.container} container`}>
        <div className={style.closeDiv}>
          <h4 className={style.title}>My List</h4>
          <button className={style.closeBtn}>X</button>
        </div>
        <AddItemElement placeholder="custom item" />
        <ul className={style.tag}>
          <li>Tomato</li>
          <li>Mango</li>
          <li>Orange</li>
          <li>Apple</li>
          <li>Potato</li>
          <li>Fish</li>
          <li>Chicken</li>
          <li>Apple</li>
          <li>Juce</li>
        </ul>
        <div className={style.tableWrapper}>
          <table className={style.table}>
            <thead className={style.thead}>
              <tr>
                <th className={style.thPaddingLeft}>Item</th>
                <th>Quantiry</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td className={style.thPaddingLeft}>Big New Apple</td>
                <td>1KG</td>
                <td>100TK</td>
                <td><img src="/delete.svg" alt="" /></td>
                
              </tr>
            <tr>
                <td className={style.thPaddingLeft}>Big New Apple</td>
                <td>1KG</td>
                <td>100TK</td>
                <td><img src="/delete.svg" alt="" /></td>
                
              </tr>
            <tr>
                <td className={style.thPaddingLeft}>Big New Apple</td>
                <td>1KG</td>
                <td>100TK</td>
                <td><img src="/delete.svg" alt="" /></td>
                
              </tr>
            <tr>
                <td className={style.thPaddingLeft}>Big New Apple</td>
                <td>1KG</td>
                <td>100TK</td>
                <td><img src="/delete.svg" alt="" /></td>
                
              </tr>
            <tr>
                <td className={style.thPaddingLeft}>Big New Apple</td>
                <td>1KG</td>
                <td>100TK</td>
                <td><img src="/delete.svg" alt="" /></td>
                
              </tr>
            <tr>
                <td className={style.thPaddingLeft}>Big New Apple</td>
                <td>1KG</td>
                <td>100TK</td>
                <td><img src="/delete.svg" alt="" /></td>
                
              </tr>
            </tbody>
          </table>
          <div className={style.payDiv}>
            <p>Total Cost 100TK</p>
            <button className={style.checkoutBtn}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
