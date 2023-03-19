import styled from "styled-components";

export const Navbar = styled.nav`
    width: 100vw;
    height: 6rem;
    background-color: var(--main-color);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 1rem;
    z-index: 1;

    figure{
        display: none;
        width: 4rem;
        height: 4rem;
        position: relative;
    }

    figure img{
        width: 100%;
    }

    @media screen and (min-width: 805px){
        width: 7.5rem;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        padding: 1.5rem 1rem;

        figure{
            display: flex;
        }

        figure::after{
            content: '';
            display: block;
            width: 5rem;
            height: .2rem;
            background-color: #fff;
            position: absolute;
            bottom: -1rem;
            left: -.5rem;
            border-radius: 6rem;
        }
    }
`;

export const NavbarButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    @media screen and (min-width: 805px){
        width: 80%;
        height: 100%;
    }
`;