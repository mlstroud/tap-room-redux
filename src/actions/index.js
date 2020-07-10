import * as c from "./ActionTypes";

export const addKeg = (keg) => {
  const { name, brand, price, abv, pints, id } = keg;

  return {
    type: c.ADD_KEG,
    name: name,
    brand: brand,
    price: price,
    abv: abv,
    pints: pints,
    id: id
  };
}

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const sellPint = (keg) => {
  const { name, brand, price, abv, pints, id } = keg;

  return {
    type: c.SELL_PINT,
    name: name,
    brand: brand,
    price: price,
    abv: abv,
    pints: pints,
    id: id
  };
};

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const toggleEdit = () => ({
  type: c.TOGGLE_EDIT
});

export const selectKeg = (keg) => {
  const { name, brand, price, abv, pints, id } = keg;

  return {
    type: c.SELECT_KEG,
    name: name,
    brand: brand,
    price: price,
    abv: abv,
    pints: pints,
    id: id
  }
}

export const clearKeg = () => ({
  type: c.CLEAR_KEG
});

export const noEdit = () => ({
  type: c.NO_EDIT
});