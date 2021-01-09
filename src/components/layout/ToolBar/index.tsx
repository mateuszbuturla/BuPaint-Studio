import React from 'react';
import { StyledToolBar } from './StyledToolBar';
import ToolsEnum from 'enums/ToolsEnum';
import { ToolButton } from 'components/common';
import pencil from 'assets/icons/tools/pencil.svg';
import eraser from 'assets/icons/tools/eraser.svg';

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
];

const ToolBar = () => {
  return (
    <StyledToolBar>
      {tools.map((tool, index) => (
        <ToolButton key={index} icon={tool.icon} tool={tool.tool} />
      ))}
    </StyledToolBar>
  );
};

export default ToolBar;
