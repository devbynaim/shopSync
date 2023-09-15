import { useEffect } from "react";
import AddItemElement from "../../../shared/addItem";
import Modal from "../../../shared/modal";
import useModel from "../../../shared/modal/hooks/useModal";
const Create = () => {
  let {open,close,isOpen,title} = useModel()
  return (
    <>
    <AddItemElement placeholder= "Shopping List Name" open={open} />
    {isOpen && <Modal close={close} actionType="add" title={title}/>}
    </>
  );
}

export default Create

