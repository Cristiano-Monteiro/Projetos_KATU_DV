import styled, { keyframes } from "styled-components";

const SlideContentAnimation = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

const SlideContainerAnimation = keyframes`
    from{
        opacity: .7;
    }
    to{
        opacity: 1;
    }
`;

export const SlideContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--main-color);
    animation: ${SlideContainerAnimation} 1s ease-in-out;
`;

export const SlideContent = styled.section`
    width: 82%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
    color: var(--white);

    animation: ${SlideContentAnimation} 1.5s ease-in-out;
    
    h2{
        line-height: 4rem;
        font-size: 3.2rem;
    }
    
    p{
        line-height: 2.5rem;
        font-size: 1.8rem;
    }
    
    a{
        background-color: var(--white);
        color: var(--black);
        width: 100%;
        padding: 2rem 0;
        font-weight: 900;
        transition: all .5s ease-in-out;
    }

    a:hover{
        background-color: rgb(0, 172, 172);
        color: var(--white);
    }

    @media screen and (min-width: 768px){
        width: 100%;
        max-width: 60rem;

        h2{
            font-size: 4.8rem;
            line-height: 6.5rem;
        }

        p{
            font-size: 2rem;
            line-height: 3rem;
        }

        a{
            width: 18rem;
        }
    }
`;