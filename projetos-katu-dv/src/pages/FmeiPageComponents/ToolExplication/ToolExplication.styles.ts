import styled from "styled-components";

export const ToolExplicationContainer = styled.section`
    background-color: var(--dark-gray);
    width: 100%;
    height: auto;
    padding: 10rem 2rem 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    section{
        background-color: var(--white);
        border-radius: 20px 20px 0 0;
        width: 100%;
        max-width: 60rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: var(--box-shadow);
    }

    section:hover{
        box-shadow: 9px 9px 10px gray;
    }

    @media screen and (min-width: 825px) {
        padding: 23rem 2rem 2.5rem;

        section{
            flex-direction: row;
            max-width: 80rem;
            gap: 1rem;
            height: 50rem;
        }
    }

    @media screen and (min-width: 1024px) {
        padding: 32rem 2rem 2.5rem;

        section{
            max-width: 98rem;
            height: max-content;
        }
    }
`;

export const LogoAndText = styled.div`
    padding: 1rem;
    text-align: left;
    line-height: 3.5rem;
    flex: 1;

    img{
        width: 7rem;
        background-color: var(--dark-gray);
        border-radius: 50%;
        padding: 1rem;
        box-shadow: var(--box-shadow-icon);
    }

    h2{
        margin-bottom: 1rem;
        line-height: 4.5rem;
    }

    @media screen and (min-width: 825px) {
        h2{
            font-size: 3rem;
        }
    }

    @media screen and (min-width: 1024px) {
        h2{
            font-size: 4rem;
        }
    }
`;

export const IllustrativeImage = styled.div`
    width: 100%;
    max-width: 45rem;
    flex: 1;
`;

export const ScreenshotMobile = styled(IllustrativeImage)``;