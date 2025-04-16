import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: #0a0a0a;
    color: #ffffff;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #00ff83, #00a1ff);
    border-radius: 5px;
  }

  ::selection {
    background: #00ff83;
    color: #0a0a0a;
  }
`;

export default GlobalStyles;