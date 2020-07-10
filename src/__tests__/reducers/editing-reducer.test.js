import editingReducer from "../../reducers/editing-reducer";
import * as c from "../../actions/ActionTypes";

describe("editingReducer", () => {
  test("Should return default state if there is matching action type.", () => {
    expect(editingReducer(false, { type: null })).toEqual(false);
  });

  test("Should toggle editing state to true.", () => {
    expect(editingReducer(false, { type: c.TOGGLE_EDIT })).toEqual(true);
  });
});