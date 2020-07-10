import editingReducer from "../../reducers/editing-reducer";

describe("editingReducer", () => {
  test("Should return default state if there is matching action type.", () => {
    expect(editingReducer(false, { type: null })).toEqual(false);
  });
});