import formReducer from "./form-visible-reducer";
import kegListReducer from "./keg-list-reducer";
import editReducer from "./editing-reducer";
import selectedKegReducer from "./selected-keg-reducer";
import { combineReducers } from "redux";
import * as c from "../actions/ActionTypes";

const rootReducer = combineReducers({
  masterKegList: kegListReducer,
  formVisible: formReducer,
  editing: editReducer,
  selectedKeg: selectedKegReducer
});

export default rootReducer;