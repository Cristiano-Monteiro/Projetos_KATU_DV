import styled from "styled-components";

export const SubmitBttn = styled.button`
    width: 100%;
    height: 6rem;
    border-radius: var(--main-border-radius);
    background-color: var(--main-color);
    border: none;
    cursor: pointer;
    transition: background-color .4s ease-in-out;

    &:hover{
        background-color: var(--secondary-color);
    }
`;