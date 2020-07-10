import formReducer from "../../reducers/form-visible-reducer";

describe("formReducer", () => {

  test("Should return default state if there is no matching action type", () => {
    expect(formReducer(false, { type: null })).toEqual(false);
  });

  test("Should toggle form state to true", () => {
    expect(formReducer(false, { type: "TOGGLE_FORM" })).toEqual(true);
  });
});