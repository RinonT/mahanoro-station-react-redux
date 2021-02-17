import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        margin: 0;
        padding: 0;
        button {
            cursor: pointer;
        }
        a {
            text-decoration: none;
        }

        span {
            display: block;
        }
    }`;