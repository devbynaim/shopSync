import { useReducer } from "react";
import ListContext from "./ListContext";
import uniqid from "uniqid";
import printPdf from "../../utils";
import {readFromLocalStorage, writeToLocalStorage } from "../../localStorage/storage";

const stateReducer = (state, action) => {
  let nextState = []
  switch (action.type) {
    case "add":
        nextState = [
        ...state,
        {
          ...action.payload,
          date: new Date().toLocaleDateString(),
          id: uniqid(),
          status: "running",
        },
      ]
      writeToLocalStorage("listsState",nextState)
      return nextState;
    case "delete":
      nextState = state.filter((_, index) => index !== action.index)
      writeToLocalStorage("listsState",nextState)
      return nextState;
    case "print":
      printPdf(state[action.index]);
      return state;
    case "listStatus":
      return state.map((item, index) =>
        index === action.index
          ? { ...item, status: action.isComplete ? "complete" : "running" }
          : item
      );
    default:
      return state;
  }
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "filterAdd":
      if (action.tag === "all") {
        return ["all"];
      } else {
        const isTag = action.tag =="high cost"|| action.tag =="low cost"
        !isTag && state.includes('all')&&state.splice(state.indexOf('all'),1)
        const withoutOppositeTags = (tag) => {
          const oppositeTags = {
            complete: "running",
            running: "complete",
            "low cost": "high cost",
            "high cost": "low cost",
          };

          return state.filter((currentTag) => currentTag !== oppositeTags[tag]);
        };

        if (state.includes(action.tag)) {
          return withoutOppositeTags(action.tag);
        }

        return [...withoutOppositeTags(action.tag), action.tag];
      }

    case "filterRemove":
      if (action.tag === "all") {
        return ["all"];
      } else {
        return state.filter((tag) => tag !== action.tag);
      }

    default:
      return state;
  }
};

const ListState = ({ children }) => {
  const [listsState, dispatch] = useReducer(stateReducer, readFromLocalStorage("listsState"));
  const [filterState, dispatchFilter] = useReducer(filterReducer, ["all"]);
  return (
    <ListContext.Provider
      value={{ listsState, filterState, dispatch, dispatchFilter }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListState;
