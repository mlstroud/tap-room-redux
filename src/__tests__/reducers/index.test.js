import rootReducer from "../../reducers/index";
import { createStore } from "redux";
import formReducer from "../../reducers/form-visible-reducer";
import kegListReducer from "../../reducers/keg-list-reducer";
import editReducer from "../../reducers/editing-reducer";
import selectedKegReducer from "../../reducers/selected-keg-reducer";

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test("Should return default state if no matching action type.", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      selectedKeg: null,
      formVisible: false,
      editing: false,
    });
  });

  test("Check if initial state of formReducer matches rootReducer.", () => {
    expect(store.getState().formVisible).toEqual(formReducer(undefined, { type: null }));
  });
});