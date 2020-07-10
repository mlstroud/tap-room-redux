import { TOGGLE_EDIT } from "../actions/ActionTypes";

export default (state = false, action) => {

  switch (action.type) {
    case TOGGLE_EDIT:
      return !state;
    default:
      return state;
  }
};