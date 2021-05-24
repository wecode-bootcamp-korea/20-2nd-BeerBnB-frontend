import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle` 
    ${reset}
    
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    input, button{
      outline: none;
      border: none;
      font-family: inherit;
      color: inherit;
    }
    li{
      list-style: none;
    }
    body {
        font-family: Roboto, sans-serif;
        font-size: 16px;
    }
`;

export default GlobalStyle;
