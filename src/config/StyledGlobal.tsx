import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  body {
    overflow-x: hidden;
    background-color: #383838;
  }
`;

interface Props {
  children: any;
}

const theme = {
  colors: {
    bg: '#383838',
    lightBG: '#4E4E4E',
    color: '#fff',
  },
};

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    {children}
    <GlobalStyle />
  </ThemeProvider>
);

export default Theme;
