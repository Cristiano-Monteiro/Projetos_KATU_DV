import styled from "styled-components";

export const MainPageContent = styled.section`
    width: 100%;
    height: 100%;
    background-color: var(--light-gray);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
    padding: 1rem 0;

    @media screen and (min-width: 805px){
        padding: .8rem 0;
        border-radius: var(--main-border-radius) 0 0 var(--main-border-radius);
    }
`;