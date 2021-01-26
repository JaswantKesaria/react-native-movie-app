import {SEARCH_START, SEARCH_END} from '../types/HomeTypes';

const INITIAL_STATE = {
  searchText: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_START:
      return {
        ...state,
        searchText: action.payload,
        loading: true
      };
    case SEARCH_END:
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  }
};
