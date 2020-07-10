import kegListReducer from "../../reducers/keg-list-reducer";

describe("kegListReducer", () => {

  let action;

  const keg = {
    name: "Crikey IPA",
    brand: "Reuben's Brews",
    price: 6.99,
    abv: 6.8,
    pints: 124,
    id: 1
  };

  test("Should return default state if no matching action type.", () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test("Should add new keg to masterKegList", () => {

    const { name, brand, price, abv, pints, id } = keg;
    action = {
      type: "ADD_KEG",
      name: name,
      brand: brand,
      price: price,
      abv: abv,
      pints: pints,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        abv: abv,
        pints: pints,
        id: id
      }
    });
  });

  test("Should edit an existing keg to have new properties.", () => {

    const { name, brand, price, abv, pints, id } = keg;
    action = {
      type: "ADD_KEG",
      name: "Hazealicious IPA",
      brand: brand,
      price: price,
      abv: 6.0,
      pints: pints,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name: "Hazealicious IPA",
        brand: brand,
        price: price,
        abv: 6.0,
        pints: pints,
        id: id
      }
    });
  });
});