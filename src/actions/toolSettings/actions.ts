import types from './types';

const setToolBrushSize = (item: number) => {
  return {
    type: types.SET_TOOL_BRUSH_SIZE,
    item,
  };
};

const setToolBrushOpacity = (item: number) => {
  return {
    type: types.SET_TOOL_BRUSH_OPACITY,
    item,
  };
};

export default {
  setToolBrushSize,
  setToolBrushOpacity,
};
