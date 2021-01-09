import types from './types';

const INITIAL_STATE = {
  color: {
    r: 0,
    g: 0,
    b: 0,
  },
};

const selectedColorReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.SET_SELECTED_COLOR:
      return {
        ...state,
        color: action.item,
      };
    default:
      return state;
  }
};

export default selectedColorReducer;
