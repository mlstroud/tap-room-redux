import kegListReducer from "../../reducers/keg-list-reducer";

describe("kegListReducer", () => {

  test("Should return default state if no matching action type.", () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
});