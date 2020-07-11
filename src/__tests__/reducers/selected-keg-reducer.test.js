import selectedKegReducer from "../../reducers/selected-keg-reducer";
import * as c from "../../actions/ActionTypes";
import { clearKeg } from "../../actions";

describe("selectedKegReducer", () => {

  const keg = {
    name: "Crikey IPA",
    brand: "Reuben's Brews",
    price: 6.99,
    abv: 6.8,
    pints: 124,
    id: 1
  };

  test("Should return default state if no action type is matched.", () => {
    expect(selectedKegReducer({}, { type: null })).toEqual({});
  });

  test("Should return null if keg is cleared.", () => {
    expect(selectedKegReducer(keg, { type: c.CLEAR_KEG })).toEqual(null);
  });

  test("Should return selected keg.", () => {

    const { name, brand, price, abv, pints, id } = keg;
    let action = {
      type: c.SELECT_KEG,
      name: name,
      brand: brand,
      price: price,
      abv: abv,
      pints: pints,
      id: id
    };
    expect(selectedKegReducer(null, action)).toEqual(keg);
  });
});