import styled from 'styled-components';

const StyledToolButton = styled.button`
  position: relative;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-bottom: 10px;
`;

const StyledToolButtonIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { StyledToolButton, StyledToolButtonIcon };
