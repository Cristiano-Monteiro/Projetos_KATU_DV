import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
    }

    :root{
        font-size: 62.5%;
        --linear-gradient: linear-gradient(to bottom,#01015c, #0505f7);
        --box-shadow: 9px 9px 10px lightgray;
        --box-shadow-icon: 3px 3px 10px lightgray;
        // Project Colors
        --main-color: #00008a;
        --secondary-color: #0505f7;
        --white: #fff;
        --light-gray: #f3f3f377;
        --dark-gray: #efefef;
    }

    body{
        font-size: 1.6rem;
        width: 100%;
        height: 100%;
        background-color: var(--main-color);
    }

    img{
        width: 100%;
    }

    [data-animation]{
        opacity: 0;
        transition: all 1.2s ease;
    }

    [data-animation='toRight']{
        transform: translate3d(-50px,0,0);
    }

    [data-animation='toBottom']{
        transform: translate3d(0,-50px,0);
    }

    [data-animation].animate{
        opacity: 1;
        transform: translate3d(0px,0px,0px);
    }
`;