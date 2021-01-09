import styled from 'styled-components';

const StyledToolBar = styled.div`
  width: 40px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.lightBG};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;

export { StyledToolBar };
