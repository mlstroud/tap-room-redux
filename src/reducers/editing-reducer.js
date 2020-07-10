import { TOGGLE_EDIT, NO_EDIT } from "../actions/ActionTypes";

export default (state = false, action) => {

  switch (action.type) {
    case TOGGLE_EDIT:
      return !state;
    case NO_EDIT:
      return false;
    default:
      return state;
  }
};