import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    :root{
        font-size: 62.5%;

        /*== project colors ==*/
        --main-color: #0B0F99;
        --secondary-color: #1016E0;
        --white: #fff;
        --black: #000;
        --light-gray: #e1e3ed;

        --main-border-radius: 2rem;
    }

    body{
        font-size: 1.6rem;
        background-color: var(--main-color);
    }

    body, html{
        width: 100%;
        height: 100vh;
    }
`;