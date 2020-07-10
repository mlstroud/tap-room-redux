import { SELECT_KEG } from "../actions/ActionTypes";

export default (state = {}, action) => {

  const { id } = action;

  switch (action.type) {
    case SELECT_KEG:
      const selectedKeg = state[id];
      return selectedKeg;
    default:
      return null;
  }
}