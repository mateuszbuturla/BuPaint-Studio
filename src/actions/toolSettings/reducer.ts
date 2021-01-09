import types from './types';

const INITIAL_STATE = {
  brushSize: 5,
};

const toolSettingsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.SET_TOOL_BRUSH_SIZE:
      return {
        ...state,
        brushSize: action.item,
      };
    default:
      return state;
  }
};

export default toolSettingsReducer;
