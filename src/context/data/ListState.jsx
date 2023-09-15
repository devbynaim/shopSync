import { useReducer } from "react";
import ListContext from "./ListContext";
import uniqid from "uniqid"
import printPdf from "../../utils";

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, {...action.payload,date: new Date().toLocaleDateString(),id: uniqid(),status:"runing"}];
    case "delete":
      return state.filter((_, index) => index !== action.index);
    case "print":
      printPdf(state[action.index])
      return state
    case "listStatus":{
      state[action.index].status = action.isComplete?"complete":"running"
      return [...state]
    }
    default:
      return state;
  }
};

const ListState = ({ children }) => {
  const [listsState, dispatch] = useReducer(reducer, []);
  return (
    <ListContext.Provider value={{ listsState, dispatch }}>
      {children}
    </ListContext.Provider>
  );
}

export default ListState;