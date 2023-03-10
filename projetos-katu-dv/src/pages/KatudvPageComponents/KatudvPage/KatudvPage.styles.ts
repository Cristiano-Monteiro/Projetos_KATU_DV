import styled, { keyframes } from "styled-components";

export const KatudvPageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;

    .MenuButton{
        width: 5rem;
        position: absolute;
        top: 1.5rem;
        left: 1.5rem;
        cursor: pointer;
        z-index: 1;
    }

    @media screen and (min-width: 768px){
        .MenuButton{
            display: none;
        }
    }
`;

interface NavbarProps {
    openMenu: boolean,
};

const NavbarAnimation = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

export const Navbar = styled.nav<NavbarProps>`
    background-color: var(--white);
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 6.5rem 0rem 0;
    z-index: 2;

    position: absolute;
    transition: left .5s ease;
    left: ${props => props.openMenu ? '0%' : '-100vw'};

    animation: ${NavbarAnimation} 2s ease-in-out;

    .closeMenuButton{
        width: 5rem;
        position: absolute;
        top: 1.5rem;
        left: 1.5rem;
        cursor: pointer;
    }

    img{
        width: 10%;
    }

    h1{
        font-size: 3.8rem;
    }

    @media screen and (min-width: 768px) {
        width: 25rem;
        left: 0%;
        position: static;

        .closeMenuButton{
            display: none;
        }
    }
`;

export const NavLinks = styled.ul`
    width: 25rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    margin-top: 8rem;
    margin-bottom: 6rem;

    a{
        display: inline-block;
    }

    a::after{
        content: '';
        display: block;
        width: 100%;
        height: .3rem;
        background-color: var(--black);
        border-radius: 50px;
        transform: scale(0);
        transition: transform .5s ease;
    }

    a:hover::after{
        transform: scale(1);
    }

    li a{
        color: var(--black);
        font-weight: 900;
        letter-spacing: .2rem;
    }
`;

export const SocialMediasKatu = styled.section`
    width: 25rem;
    height: auto;
    text-align: center;

    .copyright{
        font-size: 1.3rem;
        margin-bottom: 1.7rem;
    }

    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    ul li{
        width: 1.8rem;
    }

    ul li a{
        display: flex;
    }
    
    ul li a img{
        width: 100%;
        height: auto;
    }

    ul li a img:hover{
        transform: translate3d(0, -5px, 0);
    }

    @media screen and (min-width: 768px){
        position: absolute;
        bottom: 4rem;
    }
`;