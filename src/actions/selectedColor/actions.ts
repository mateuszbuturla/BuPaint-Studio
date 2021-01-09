import types from './types';

const setSelectedColor = (item: any) => {
  return {
    type: types.SET_SELECTED_COLOR,
    item,
  };
};

export default {
  setSelectedColor,
};
