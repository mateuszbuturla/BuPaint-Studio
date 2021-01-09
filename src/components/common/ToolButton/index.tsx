import React from 'react';
import { StyledToolButton, StyledToolButtonIcon } from './StyledToolButton';
import ToolsEnum from 'enums/ToolsEnum';
import { useDispatch } from 'react-redux';
import { default as selectedToolActions } from 'actions/selectedTool/actions';

interface Props {
  icon: string;
  tool: ToolsEnum;
  active?: boolean;
}

const ToolButton = ({ icon, tool, active }: Props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectedToolActions.setSelectedTool(tool));
  };

  return (
    <StyledToolButton onClick={handleClick}>
      <StyledToolButtonIcon src={icon} active={active} />
    </StyledToolButton>
  );
};

export default ToolButton;
