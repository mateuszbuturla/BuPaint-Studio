import types from './types';
import ToolsEnum from 'enums/ToolsEnum';

const INITIAL_STATE = {
  tool: ToolsEnum.PENCIL,
};

const selectedToolReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.SET_SELECTED_TOOL:
      return {
        ...state,
        tool: action.item,
      };
    default:
      return state;
  }
};

export default selectedToolReducer;
