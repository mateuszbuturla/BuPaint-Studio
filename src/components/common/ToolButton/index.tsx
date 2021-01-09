import React from 'react';
import { StyledToolButton, StyledToolButtonIcon } from './StyledToolButton';
import ToolsEnum from 'enums/ToolsEnum';
import { useDispatch } from 'react-redux';
import { default as selectedToolActions } from 'actions/selectedTool/actions';

interface Props {
  icon: string;
  tool: ToolsEnum;
}

const ToolButton = ({ icon, tool }: Props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectedToolActions.setSelectedTool(tool));
  };

  return (
    <StyledToolButton onClick={handleClick}>
      <StyledToolButtonIcon src={icon} />
    </StyledToolButton>
  );
};

export default ToolButton;
