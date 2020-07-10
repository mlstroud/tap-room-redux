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