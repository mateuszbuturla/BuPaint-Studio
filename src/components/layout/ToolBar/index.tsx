import React from 'react';
import { StyledToolBar } from './StyledToolBar';
import { ToolButton } from 'components/common';
import pencil from 'assets/icons/tools/pencil.svg';
import eraser from 'assets/icons/tools/eraser.svg';

const tools = [
  {
    name: 'Pencil',
    icon: pencil,
  },
  {
    name: 'Eraser',
    icon: eraser,
  },
];

const ToolBar = () => {
  return (
    <StyledToolBar>
      {tools.map((tool, index) => (
        <ToolButton key={index} icon={tool.icon} />
      ))}
    </StyledToolBar>
  );
};

export default ToolBar;
