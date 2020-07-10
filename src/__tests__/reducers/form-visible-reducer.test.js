import formReducer from "../../reducers/form-visible-reducer";
import * as c from "../../actions/ActionTypes";

describe("formReducer", () => {

  test("Should return default state if there is no matching action type", () => {
    expect(formReducer(false, { type: null })).toEqual(false);
  });

  test("Should toggle form state to true", () => {
    expect(formReducer(false, { type: c.TOGGLE_FORM })).toEqual(true);
  });
});