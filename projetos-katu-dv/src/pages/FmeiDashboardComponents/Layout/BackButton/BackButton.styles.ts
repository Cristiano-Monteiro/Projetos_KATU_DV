import styled from "styled-components";

export const BackIcon = styled.figure`
    width: 5rem;
    display: flex;
    border-radius: 50%;
    padding: .7rem;
    position: absolute;
    top: .5rem;
    left: .5rem;
    cursor: pointer;
    transition: background-color .3s ease-in-out;

    img{
        width: 100%;
    }

    @media screen and (min-width: 805px){
        width: 4rem;
        padding: .3rem;
    }
`;