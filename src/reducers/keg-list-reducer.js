export default (state = {}, action) => {

  const { name, brand, price, abv, pints, id } = action;

  switch (action.type) {
    case "ADD_KEG":
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          abv: abv,
          pints: pints,
          id: id
        }
      });
    case "DELETE_KEG":
      const newState = { ...state };
      delete newState[id];
      return newState;
    case "SELL_PINT":
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          abv: abv,
          pints: pints - 1,
          id: id
        }
      });
    default:
      return state;
  }
}