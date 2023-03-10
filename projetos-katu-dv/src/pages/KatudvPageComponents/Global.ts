import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
        list-style: none;
    }

    :root{
        font-size: 62.5%;

        // Colors
        --white: #fff;
        --black: #000;
        --main-color: rgb(0, 1, 94, 0.78);
    }

    body{
        font-size: 1.6rem;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    img{
        width: 100%;
    }
`;