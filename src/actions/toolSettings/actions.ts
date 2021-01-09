import types from './types';

const setToolBrushSize = (item: number) => {
  return {
    type: types.SET_TOOL_BRUSH_SIZE,
    item,
  };
};

export default {
  setToolBrushSize,
};
