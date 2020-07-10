import * as actions from "../../actions";

describe("Keg list actions", () => {

  const newKeg = {
    name: "Crikey IPA",
    brand: "Reuben's Brews",
    price: 6.99,
    abv: 6.8,
    pints: 124,
    id: 1
  };

  test("addKeg should create ADD_KEG action.", () => {
    expect(actions.addKeg(newKeg)).toEqual({
      type: "ADD_KEG",
      name: "Crikey IPA",
      brand: "Reuben's Brews",
      price: 6.99,
      abv: 6.8,
      pints: 124,
      id: 1
    });
  });

  test("deleteKeg should create DELETE_KEG action.", () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: "DELETE_KEG",
      id: 1
    });
  });

  test("sellPint should create SELL_PINT action.", () => {
    expect(actions.sellPint(newKeg)).toEqual({
      type: "SELL_PINT",
      name: "Crikey IPA",
      brand: "Reuben's Brews",
      price: 6.99,
      abv: 6.8,
      pints: 124,
      id: 1
    });
  });

  test("toggleForm should create TOGGLE_FORM action.", () => {
    expect(actions.toggleForm()).toEqual({
      type: "TOGGLE_FORM"
    });
  });
});