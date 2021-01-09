import styled from 'styled-components';

const StyledColorPickerContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  background-color: transparent;
  margin-bottom: 10px;
`;

interface StyledColorPickerButtonProps {
  color: string;
}

const StyledColorPickerButton = styled.button<StyledColorPickerButtonProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.color};
  cursor: pointer;
  outline: none;
  background-color: ${(props) => props.color};
`;

const StyledPickerContainer = styled.div`
  position: absolute;
  top: 25px;
  left: 25px;
`;

export { StyledColorPickerContainer, StyledColorPickerButton, StyledPickerContainer };
