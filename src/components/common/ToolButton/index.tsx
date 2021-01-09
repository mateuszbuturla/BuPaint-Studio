import React from 'react';
import { StyledToolButton, StyledToolButtonIcon } from './StyledToolButton';

interface Props {
  icon: string;
}

const ToolButton = ({ icon }: Props) => {
  return (
    <StyledToolButton>
      <StyledToolButtonIcon src={icon} />
    </StyledToolButton>
  );
};

export default ToolButton;
