import rootReducer from "../../reducers/index";

describe("rootReducer", () => {

  test("Should return default state if no matching action type.", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      selectedKeg: null,
      formVisible: false,
      editing: false,
    });
  });
});