import React, { useState } from 'react';
import {
  StyledColorPickerContainer,
  StyledColorPickerButton,
  StyledPickerContainer,
} from './StyledColorPicker';
import { ChromePicker } from 'react-color';
import { useSelector, useDispatch } from 'react-redux';
import TypesApplicationState from 'types/TypesApplicationState';
import { default as selectedColorActions } from 'actions/selectedColor/actions';

const ColorPicker = () => {
  const dispatch = useDispatch();
  const { color } = useSelector((state: TypesApplicationState) => state.selectedColor);
  const [isShowColorPicker, setIsShowColorPicker] = useState(false);

  const handleColorChange = (color: any, event: any) => {
    dispatch(
      selectedColorActions.setSelectedColor({
        r: color.rgb.r,
        g: color.rgb.g,
        b: color.rgb.b,
      }),
    );
  };

  return (
    <StyledColorPickerContainer>
      <StyledColorPickerButton
        onClick={() => {
          setIsShowColorPicker(!isShowColorPicker);
        }}
        color={`rgb(${color.r}, ${color.g}, ${color.b})`}
      />
      {isShowColorPicker && (
        <StyledPickerContainer>
          <ChromePicker onChangeComplete={handleColorChange} color={color} disableAlpha={true} />
        </StyledPickerContainer>
      )}
    </StyledColorPickerContainer>
  );
};

export default ColorPicker;
