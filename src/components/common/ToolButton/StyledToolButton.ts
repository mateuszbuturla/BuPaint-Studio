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

interface StyledToolButtonIconProps {
  active?: boolean;
}

const StyledToolButtonIcon = styled.img<StyledToolButtonIconProps>`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${(props) => (props.active ? 1 : 0.5)};
`;

export { StyledToolButton, StyledToolButtonIcon };
