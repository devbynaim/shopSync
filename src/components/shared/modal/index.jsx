import style from "./modal.module.css"
import AddItemElement from "../addItem"

const Modal = () => {
  return (
    <div className={style.modal}>
        
        <div className={`${style.container} container`}>
        <div className={style.closeDiv}>
            <h4 className={style.title}>My List</h4>
            <button className={style.closeBtn}>X</button>
        </div>
            <AddItemElement placeholder="custom item"/>
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
        </div>
    </div>
  )
}

export default Modal