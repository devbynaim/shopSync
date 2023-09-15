import { useState } from "react"

const useModel = () => {
    let [modal,setModal] = useState({status:false,title:""})
    const close = ()=> setModal(prev=>({status:false}))
    const open = (title)=> {
        setModal(prev=>({title,status:true}))
    }
    return {open,close,isOpen:modal.status,title:modal.title}
}

export default useModel