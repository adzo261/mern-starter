import FETCH_DB_STATUS from '../constants/actionTypes';

const initialState = {
  status: undefined
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DB_STATUS:
      return {
        ...state,
        status: action.payload
      };
    default:
      return state;
  }
}
