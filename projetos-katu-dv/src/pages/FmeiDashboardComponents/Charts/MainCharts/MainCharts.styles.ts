import styled from "styled-components";

export const ChartContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 805px){
        padding: 0;
        min-height: 45rem;
    }
`;

export const Charts = styled.div`
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

    .chart{
        display: flex;
        min-width: 80%;
        height: 100%;
        text-align: center;
        border-radius: var(--main-border-radius);
        background-color: #fff;
        overflow: hidden;
        scroll-snap-align: center;
    }

    .chart:first-child{
        margin-left: 10vw;
    }

    .chart:last-child{
        margin-right: 10vw;
    }

    @media screen and (min-width: 805px){
        flex-wrap: wrap;
        justify-content: center;
        gap: .8rem;
        overflow-y: auto;

        .chart{
            width: 49%;
            min-width: 0;
            height: 49%;
        }

        .chart:first-child{
            margin-left: 0;
        }

        .chart:last-child{
            margin-right: 0;
        }
    }
`;