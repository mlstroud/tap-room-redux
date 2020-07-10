import formReducer from "./form-visible-reducer";
import kegListReducer from "./keg-list-reducer";
import editReducer from "./editing-reducer";
import selectedKegReducer from "./selected-keg-reducer";
import { combineReducers } from "redux";

// const rootReducer = combineReducers({
//   masterKegList: kegListReducer,
//   selectedKeg: selectedKegReducer(masterKegList),
//   formVisible: formReducer,
//   editing: editReducer
// });

const rootReducer = (state, action) => {
  switch (action.type) {
    case "ADD_KEG":
    case "DELETE_KEG":
    case "SELL_PINT":
      return {
        masterKegList: kegListReducer(state, action)
      }
    case "SELECT_KEG":
      return {
        selectedKeg: selectedKegReducer(state.masterKegList, action)
      }
    case "TOGGLE_EDIT":
      return {
        editing: editReducer(state, action)
      }
    case "TOGGLE_FORM":
      return {
        formVisible: formReducer(state, action)
      }
    default:
      return {
        masterKegList: kegListReducer(state, action),
        selectedKeg: selectedKegReducer(state.masterKegList, action),
        editing: editReducer(state.editing, action),
        formVisible: formReducer(state.formVisible, action)
      }
  }
}

export default rootReducer;