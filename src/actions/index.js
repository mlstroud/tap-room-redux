export const addKeg = (keg) => {
  const { name, brand, price, abv, pints, id } = keg;

  return {
    type: "ADD_KEG",
    name: name,
    brand: brand,
    price: price,
    abv: abv,
    pints: pints,
    id: id
  };
}

export const deleteKeg = id => ({
  type: "DELETE_KEG",
  id
});

export const sellPint = (keg) => {
  const { name, brand, price, abv, pints, id } = keg;

  return {
    type: "SELL_PINT",
    name: name,
    brand: brand,
    price: price,
    abv: abv,
    pints: pints,
    id: id
  };
};

export const toggleForm = () => ({
  type: "TOGGLE_FORM"
});

export const toggleEdit = () => ({
  type: "TOGGLE_EDIT"
});

export const selectKeg = id => ({
  type: "SELECT_KEG",
  id
});