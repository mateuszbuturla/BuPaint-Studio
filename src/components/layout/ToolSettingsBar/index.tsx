import React from 'react';
import { StyledToolSettingsBar } from './StyledToolSettingsBar';
import { Slider } from 'components/common';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { default as toolSettingsActions } from 'actions/toolSettings/actions';
import TypesApplicationState from 'types/TypesApplicationState';

const ToolSettingsBar = () => {
  const dispatch = useDispatch();
  const { brushSize } = useSelector((state: TypesApplicationState) => state.toolSettings);

  const handleChangeBrushSize = (e: React.ChangeEvent<HTMLButtonElement>) => {
    dispatch(toolSettingsActions.setToolBrushSize(Number(e.target.value)));
  };

  return (
    <StyledToolSettingsBar>
      <Slider
        id="toolSizeSlider"
        label="Brush size"
        onChange={handleChangeBrushSize}
        value={brushSize}
        additionalTextInput
      />
    </StyledToolSettingsBar>
  );
};

export default ToolSettingsBar;
