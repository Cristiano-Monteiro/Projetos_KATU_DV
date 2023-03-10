import styled, { keyframes } from "styled-components";

const SlidesContainerAnimation = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

interface SlidesContainerProps {
    openMenu: boolean,
    slideImg: any,
};

export const SlidesContainer = styled.header<SlidesContainerProps>`
    width: 100%;
    height: 100vh;

    background-image: url(${props => props.slideImg.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: ${props => props.slideImg.bgSize};

    position: relative;
    transition: left .5s ease;
    left: ${props => props.openMenu ? '70%' : '0%'};

    animation: ${SlidesContainerAnimation} .5s ease-in-out;

    @media screen and (min-width: 768px){
        left: 0%;
    }
`;

export const SlidesButtonContainer = styled.div`
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    @media screen and (min-width: 768px){
        gap: 1rem;
    }
`;

export const SlideButton = styled.button`
    border: 2px solid var(--white);
    background-color: transparent;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color .5s ease-in-out;

    &:hover{
        background-color: var(--white);
    }

    @media screen and (min-width: 768px){
        width: 2.4rem;
        height: 2.4rem;
    }
`;