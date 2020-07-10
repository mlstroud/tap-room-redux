import formReducer from "./form-visible-reducer";
import kegListReducer from "./keg-list-reducer";
import editReducer from "./editing-reducer";
import selectedKegReducer from "./selected-keg-reducer";
import { combineReducers } from "redux";
import * as c from "../actions/ActionTypes";

// const rootReducer = combineReducers({
//   masterKegList: kegListReducer,
//   selectedKeg: selectedKegReducer(masterKegList),
//   formVisible: formReducer,
//   editing: editReducer
// });

const rootReducer = (state, action) => {
  // const kegList = kegListReducer(state, action);
  // const edit = editReducer();
  // const visible = formReducer();

  switch (action.type) {
    case c.ADD_KEG:
    case c.DELETE_KEG:
    case c.SELL_PINT:
      return {
        masterKegList: kegListReducer(state, action)
      }
    case c.SELECT_KEG:
      return {
        selectedKeg: selectedKegReducer(state.masterKegList, action)
      }
    case c.TOGGLE_EDIT:
      return {
        editing: editReducer(state, action)
      }
    case c.TOGGLE_FORM:
      return {
        formVisible: formReducer(state, action)
      }
    default:
      const kegList = kegListReducer(state, action);
      return {
        masterKegList: kegListReducer(state, action),
        selectedKeg: selectedKegReducer(kegList, action),
        editing: editReducer(false, action),
        formVisible: formReducer(false, action)
      }
  }
}

export default rootReducer;