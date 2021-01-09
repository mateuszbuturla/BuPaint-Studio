import styled from 'styled-components';

const StyledToolSettingsBar = styled.div`
  width: 200px;
  height: auto;
  position: fixed;
  top: 0px;
  left: 40px;
  background-color: ${(props) => props.theme.colors.lightBG};
  padding: 10px 0px;
`;

export { StyledToolSettingsBar };
