import types from './types';

const INITIAL_STATE = {
  title: 'BuPaint Studio',
};

const titleReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.SET_TITLE:
      return {
        ...state,
        title: `BuPaint Studio | ${action.item}`,
      };
    default:
      return state;
  }
};

export default titleReducer;
