import * as actions from "../../actions";
import * as c from "../../actions/ActionTypes";

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
      type: c.ADD_KEG,
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
      type: c.DELETE_KEG,
      id: 1
    });
  });

  test("sellPint should create SELL_PINT action.", () => {
    expect(actions.sellPint(newKeg)).toEqual({
      type: c.SELL_PINT,
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
      type: c.TOGGLE_FORM
    });
  });

  test("toggleEdit should create TOGGLE_EDIT action.", () => {
    expect(actions.toggleEdit()).toEqual({
      type: c.TOGGLE_EDIT
    });
  });

  test("selectKeg should create SELECT_KEG action.", () => {
    const { name, brand, price, abv, pints, id } = newKeg;

    expect(actions.selectKeg(newKeg)).toEqual({
      type: c.SELECT_KEG,
      name: name,
      brand: brand,
      price: price,
      abv: abv,
      pints: pints,
      id: id
    });
  });
});