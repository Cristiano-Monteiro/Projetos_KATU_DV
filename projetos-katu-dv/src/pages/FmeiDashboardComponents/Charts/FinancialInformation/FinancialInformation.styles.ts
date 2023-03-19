import styled from "styled-components";

export const FinancialInformationContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 10rem;
    max-height: 10rem;
`;

export const FinancialInformationWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    gap: 1.2rem;
    
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    &::-webkit-scrollbar{
        display: none;
    }

    @media screen and (min-width: 450px){
        padding: 0 4rem;
    }

    @media screen and (min-width: 640px){
        padding: 0 8rem;
    }

    @media screen and (min-width: 805px){
        padding: 0 .8rem;
        justify-content: center;
    }
`;