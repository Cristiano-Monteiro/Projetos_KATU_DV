import styled, { keyframes } from "styled-components";

const CalendarBoxAnimation = keyframes`
    from{
        opacity: 0;
        transform: translate(0, -3rem);
    }
    to{
        opacity: 1;
        transform: translate(0, 0);
    }
`;

export const CalendarBoxContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 805px){
        border-radius: var(--main-border-radius) 0 0 var(--main-border-radius);
    }
`;

export const CalendarBoxContent = styled.div`
    width: 90%;
    max-width: 40rem;
    height: 34rem;
    padding: 0 1rem 2rem;
    border-radius: var(--main-border-radius);
    background-color: var(--main-color);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    position: relative;

    animation: ${CalendarBoxAnimation} .5s ease-in-out;

    h2{
        color: #fff;
        text-align: center;
        border-bottom: 2px solid;
        font-size: 2rem;
    }

    @media screen and (min-width: 805px){
        right: 4rem;
    }
`;

export const DateRangeIconContainer = styled.figure`
    display: flex;
    width: 9rem;
    position: absolute;
    top: -3.5rem;

    img{
        width: 100%;
    }
`;

export const InputDateContainer = styled.div`
    width: 100%;
    max-width: 30rem;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: .5rem;

    form{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    input{
        width: 100%;
        height: 100%;
        border-radius: var(--main-border-radius);
        background-color: var(--secondary-color);
        border: none;
        color: #fff;
        font-size: 1.5rem;
        padding: 0 1rem;
        cursor: pointer;
    }
`;