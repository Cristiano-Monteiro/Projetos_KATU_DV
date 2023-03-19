import styled from "styled-components";

export const FinancialInformation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 80%;
    height: 100%;
    text-align: center;
    border-radius: var(--main-border-radius);
    background-color: var(--secondary-color);
    gap: .5rem;
    padding: 0 1rem;
    color: #fff;

    scroll-snap-align: center;

    figure{
        width: 6rem;

        img{
            width: 100%;
        }
    }

    &:first-child{
        margin-left: 10vw;
    }

    &:last-child{
        margin-right: 10vw;
    }

    @media screen and (min-width: 450px){
        min-width: 70%;
    }

    @media screen and (min-width: 805px){
        width: 100%;
        min-width: 0rem;

        &:first-child{
            margin-left: 0;
        }

        &:last-child{
            margin-right: 0;
        }
    }
`;

export const FinancialInformationText = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 9rem;
`;

export const Money = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    font-weight: bold;
    width: 100%;
    gap: .5rem;
`;