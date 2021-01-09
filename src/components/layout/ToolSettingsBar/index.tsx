import React from 'react';
import { StyledToolSettingsBar } from './StyledToolSettingsBar';
import { Slider } from 'components/common';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { default as toolSettingsActions } from 'actions/toolSettings/actions';
import TypesApplicationState from 'types/TypesApplicationState';

const ToolSettingsBar = () => {
  const dispatch = useDispatch();
  const { brushSize, brushOpacity } = useSelector(
    (state: TypesApplicationState) => state.toolSettings,
  );

  const handleChangeBrushSize = (e: React.ChangeEvent<HTMLButtonElement>) => {
    dispatch(toolSettingsActions.setToolBrushSize(Number(e.target.value)));
  };

  const handleChangeBrushOpacity = (e: React.ChangeEvent<HTMLButtonElement>) => {
    dispatch(toolSettingsActions.setToolBrushOpacity(Number(e.target.value)));
  };

  return (
    <StyledToolSettingsBar>
      <Slider
        id="toolSizeSlider"
        label="Brush size"
        onChange={handleChangeBrushSize}
        value={brushSize}
        min={1}
        max={200}
        additionalTextInput
      />
      <Slider
        id="toolOpacitySlider"
        label="Opacity"
        onChange={handleChangeBrushOpacity}
        value={brushOpacity}
        min={0}
        max={1}
        step={0.01}
        additionalTextInput
      />
    </StyledToolSettingsBar>
  );
};

export default ToolSettingsBar;
