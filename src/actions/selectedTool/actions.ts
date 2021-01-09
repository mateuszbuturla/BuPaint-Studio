import types from './types';
import ToolsEnum from 'enums/ToolsEnum';

const setSelectedTool = (item: ToolsEnum) => {
  return {
    type: types.SET_SELECTED_TOOL,
    item,
  };
};

export default {
  setSelectedTool,
};
