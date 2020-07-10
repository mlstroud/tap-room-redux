import formReducer from "./form-visible-reducer";
import kegListReducer from "./keg-list-reducer";
import editReducer from "./editing-reducer";
import selectedKegReducer from "./selected-keg-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  masterKegList: kegListReducer,
  selectedKeg: selectedKegReducer,
  formVisible: formReducer,
  editing: editReducer
});

export default rootReducer;