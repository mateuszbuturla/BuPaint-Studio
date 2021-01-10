import React from 'react';
import { StyledToolBar } from './StyledToolBar';
import ToolsEnum from 'enums/ToolsEnum';
import { ToolButton, ColorPicker } from 'components/common';
import pencil from 'assets/icons/tools/pencil.svg';
import eraser from 'assets/icons/tools/eraser.svg';
import colorPicker from 'assets/icons/tools/colorPicker.svg';
import { useSelector } from 'react-redux';
import TypesApplicationState from 'types/TypesApplicationState';

const tools = [
  {
    name: 'Pencil',
    icon: pencil,
    tool: ToolsEnum.PENCIL,
  },
  {
    name: 'Eraser',
    icon: eraser,
    tool: ToolsEnum.ERASER,
  },
  {
    name: 'Color picker',
    icon: colorPicker,
    tool: ToolsEnum.COLOR_DROPPER,
  },
];

const ToolBar = () => {
  const { tool: selectedTool } = useSelector((state: TypesApplicationState) => state.selectedTool);

  return (
    <StyledToolBar>
      {tools.map((tool, index) => (
        <ToolButton
          key={index}
          icon={tool.icon}
          tool={tool.tool}
          active={tool.tool === selectedTool}
        />
      ))}
      <ColorPicker />
    </StyledToolBar>
  );
};

export default ToolBar;
