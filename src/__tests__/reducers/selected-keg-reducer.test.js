import selectedKegReducer from "../../reducers/selected-keg-reducer";

describe("selectedKegReducer", () => {

  let action;

  let kegList = {
    1: {
      name: "Crikey IPA",
      brand: "Reuben's Brews",
      price: 6.99,
      abv: 6.8,
      pints: 124,
      id: 1
    },
    2: {
      name: "Hazealicious IPA",
      brand: "Reuben's Brews",
      price: 6.99,
      abv: 6.0,
      pints: 124,
      id: 2
    }
  };

  test("Should return default state if no action type matches", () => {
    expect(selectedKegReducer({}, { type: null })).toEqual({});
  });

  test("Should return selected keg from state.", () => {

    action = {
      type: "SELECT_KEG",
      id: 1
    };

    expect(selectedKegReducer(kegList, action)).toEqual({
      name: "Crikey IPA",
      brand: "Reuben's Brews",
      price: 6.99,
      abv: 6.8,
      pints: 124,
      id: 1
    });
  });
});