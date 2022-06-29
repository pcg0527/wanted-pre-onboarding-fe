import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
 
  *,
  *::after,
  *::before {
   box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }


  body {
    line-height: 1;
    font-weight: 400;
  }
`;

export default GlobalStyles;
