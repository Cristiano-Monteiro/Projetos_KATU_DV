import styled, { keyframes } from "styled-components";

const animationOpeningScreenContent = keyframes`
    from{
        transform: translateX(-2rem);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
`;

const startButtonAnimation = keyframes`
    from{
        opacity: 1;
        transform: translate3d(0, -15px, 0);
    }
    to{
        opacity: 1;
        transform: translate3d(0, 15px, 0);
    }
`;

export const OpeningScreenContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: var(--main-color);
    z-index: 2;
    transition: opacity .5s ease;

    @media screen and (min-width: 805px){
        gap: 4.5rem;
    }
`;

export const OpeningScreenContent = styled.div`
    width: 80%;
    max-width: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    figure{
        width: 65%;
        opacity: 0;
        animation: ${animationOpeningScreenContent} .7s ease-in-out .5s forwards;
    }

    figure img{
        width: 100%;
    }

    h1{
        color: #fff;
        font-size: 10vw;
        opacity: 0;
        animation: ${animationOpeningScreenContent} .7s ease-in-out 1s forwards;
    }

    @media screen and (min-width: 370px){
        h1{
            font-size: 3rem;
        }
    }

    @media screen and (min-width: 805px){
        max-width: 32rem;
        flex-direction: row;

        h1{
            font-size: 2.7rem;
        }
    }
`;

export const StartButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: var(--main-color);
    border-radius: var(--main-border-radius);
    width: 10rem;
    height: 8rem;
    position: absolute;
    bottom: 2rem;
    transition: opacity .5s ease-in-out;
    overflow: hidden;
    opacity: 0;
    animation: ${startButtonAnimation} 1s ease-in 1.5s infinite alternate;

    img{
        width: 100%;
    }

    @media screen and (min-width: 805px){
        position: static;
        transition: .3s ease-in-out;
        width: 7rem;
        height: 6rem;
    }
`;