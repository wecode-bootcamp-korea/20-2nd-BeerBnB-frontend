import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle` 
    ${reset}

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: Roboto, sans-serif;
    }

    a{
        text-decoration: none;
        color: inherit;
    }
    
    li{
      list-style: none;
    }

    input, button{
      border: none;
      color: inherit;
      background-color: transparent;
      font-family: inherit;
      outline: none;
    }

    
`;

export default GlobalStyle;
