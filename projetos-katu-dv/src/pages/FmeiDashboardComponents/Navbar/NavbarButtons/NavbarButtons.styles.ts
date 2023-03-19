import styled, { css } from "styled-components";

const Active = 'var(--secondary-color)';

const NotActive = 'var(--main-color)';

export const NavbarList = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;

    @media screen and (min-width: 805px){
        flex-direction: column;
        justify-content: start;
        align-items: center;
        gap: 2rem;
        margin-top: 2.5rem;
    }
`;

interface NavbarItensProps{
    dataId: string,
    idModal: string,
};

export const NavbarItens = styled.li<NavbarItensProps>`
    cursor: pointer;
    width: 5rem;
    height: 100%;
    padding: .8rem;
    display: flex;
    justify-content: center;

    background-color: ${props => (props.dataId === props.idModal ? Active : NotActive)};

    ${props => (props.dataId !== props.idModal) ? css`
        &:hover{
            transition: filter .3s ease-in-out;
            filter: brightness(.8);
        }
    ` : null};
    
    img{
        width: 100%;
    }

    @media screen and (min-width: 805px){
        height: auto;
        border-radius: var(--main-border-radius);
    }
`;