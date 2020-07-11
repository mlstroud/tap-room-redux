import { SELECT_KEG, CLEAR_KEG } from "../actions/ActionTypes";

export default (state = null, action) => {

  const { name, brand, price, abv, pints, id } = action;

  switch (action.type) {
    case SELECT_KEG:
      return {
        name: name,
        brand: brand,
        price: price,
        abv: abv,
        pints: pints,
        id: id
      }
    case CLEAR_KEG:
      return null;
    default:
      return state;
  }
}