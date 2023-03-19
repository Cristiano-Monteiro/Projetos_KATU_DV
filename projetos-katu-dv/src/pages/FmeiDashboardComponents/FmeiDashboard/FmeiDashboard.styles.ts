import styled, { keyframes } from "styled-components";

const containerAnimation = keyframes`
    to{
        opacity: 1;
    }
`;

export const FmeiDashboardContainer = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: var(--main-color);
    opacity: 0;
    animation: ${containerAnimation} .7s ease-in-out forwards;

    @media screen and (min-width: 805px){
        flex-direction: row-reverse;
    }
`;

export const MobileNavbar = styled.section`
    width: 100vw;
    height: 5rem;
    background-color: var(--main-color);
    display: flex;
    align-items: center;
    padding: 1.5rem;
    z-index: 1;

    figure{
        width: 4rem;
        height: 4rem;
        position: relative;
    }

    figure img{
        width: 100%;
    }

    @media screen and (min-width: 805px){
        display: none;
    }
`;