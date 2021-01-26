import {ADD_LIST_ITEM, CLEAR_LIST_ITEM} from '../types/ListTypes';

const INITIAL_STATE = {
  selectedItems: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_LIST_ITEM:
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
      };
    case CLEAR_LIST_ITEM:
      return {
        ...state,
        selectedItems: [],
      };
    default:
      return state;
  }
};
