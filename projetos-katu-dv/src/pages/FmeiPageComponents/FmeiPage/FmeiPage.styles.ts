import styled, { css, keyframes } from "styled-components";

const elementShowingAnimation = keyframes`
    from{
        opacity: 0;
        transform: translate3d(0, -30px, 0);
    }
    to{
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;

const elementOpacityAnimation = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

const MenuOptionsAnimation = keyframes`
    to{
        opacity: 1;
    }
`;

const NavBarAnimation = keyframes`
    from{
        display: none;
        opacity: 0;
        transform: translate3d(0, -18vh, 0);
    }
    to{
        display: flex;
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;

export const FmeiPageContainer = styled.div`
    width: 100%;
    height: 100%;
`;

interface NavbarProps {
    navbarFixedDisplay: boolean,
    navbarAnimationOn: boolean,
};

export const NavBar = styled.nav<NavbarProps>`
    width: 100%;
    height: 11rem;
    border-bottom: 1px solid var(--white);
    background-color: var(--main-color);
    padding: 0 3.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    opacity: 0;
    animation: ${elementOpacityAnimation} 2.5s ease-in-out forwards;

    ${props => props.navbarAnimationOn && css`
        animation: ${elementOpacityAnimation} .8s ease-in-out forwards;
    `}

    position: ${props => props.navbarFixedDisplay ? 'fixed' : 'absolute'};

    ${props => props.navbarFixedDisplay && css`
        animation: ${NavBarAnimation} .8s ease-in-out forwards;
    `}
`;

export const LogoKatuDV = styled.div`
    width: max-content;
`;

export const MenuButton = styled.div`
    width: max-content;
    cursor: pointer;

    @media screen and (min-width: 825px) {
        display: none;
    }
`;

interface MenuOptionsProps{
    showMenuOptions: boolean,
}

export const MenuOptions = styled.div<MenuOptionsProps>`
    display: ${props => props.showMenuOptions ? 'flex' : 'none'};;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1.5rem;
    gap: 1.5rem;
    position: absolute;
    border-bottom: 1px solid #fff;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgba(0,0,55,.4);
    opacity: 0;
    animation: ${MenuOptionsAnimation} .5s ease-in-out forwards;

    a{
        background-color: var(--white);
        color: var(--main-color);
        border: 2px solid #fff;
        padding: 2rem 3.5rem;
        border-radius: 4rem;
        font-weight: 900;
    }

    @media screen and (min-width: 825px){
        display: flex;
        width: auto;
        position: static;
        padding: 0;
        border: 0;
        background-color: transparent;
        
        a{
            background-color: transparent;
            color: var(--white);
            transition: all .5s ease;
        }

        a:hover{
            background-color: var(--white);
            color: var(--main-color);
        }
    }
`;

export const Introduction = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: var(--linear-gradient);
    color: var(--white);
    text-align: center;
    position: relative;
    padding: 12rem 0 20rem;

    .container{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
        width: 100%;
        max-width: 35rem;
        padding-top: 2rem;
    }

    h1{
        opacity: 0;
        font-size: 4rem;
        animation: ${elementShowingAnimation} 1.5s ease .5s forwards;
    }

    .headerText{
        line-height: 3rem;
        opacity: 0;
        animation: ${elementShowingAnimation} 1.5s ease .7s forwards;
    }

    a{
        border: 2px solid var(--white);
        padding: 3rem 7rem;
        border-radius: 4rem;
        color: var(--white);
        font-weight: 900;
        transition: all .5s ease;

        opacity: 0;
        animation: ${elementShowingAnimation} 1.5s ease .9s forwards;
    }

    a:hover{
        background-color: var(--white);
        color: var(--main-color);
    }

    p:last-child{
        opacity: 0;
        animation: ${elementShowingAnimation} 1.5s ease 1s forwards;
    }

    @media screen and (min-width: 705px) {
        .container{
            max-width: 55rem;
        }

        h1{
            font-size: 5rem;
        }
    }
`;

export const LogoFmei = styled.div`
    width: 100%;
    max-width: 22rem;
    animation: ${elementShowingAnimation} 1.5s ease;
`;

export const ScreenshotDashboardFmei = styled.div`
    position: absolute;
    top: 78%;
    width: 100%;
    max-width: 46rem;

    @media screen and (min-width: 825px) {
        max-width: 70rem;
    }

    @media screen and (min-width: 1024px) {
        max-width: 85rem;
    }
`;

export const KeyIndicatorsText = styled.div`
    width: 100%;
    height: auto;
    padding: 5rem 2rem;
    background-image: linear-gradient(#0000ff, #2222ff);
    display: flex;
    align-items: center;
    justify-content: center;

    h2{
        width: 45rem;
        color: var(--white);
        text-align: center;
        text-shadow: 1rem 0.6rem 1.3rem #000;
        line-height: 3.5rem;
    }

    @media screen and (min-width: 825px) {
        h2{
            width: 60rem;
            font-size: 4rem;
            line-height: 5rem;
        }
    }
`;

const BttnToTopAnimation = keyframes`
    from{opacity: 0;}
    to{opacity: .5;}
`;

export const BttnToTop = styled.div`
    border-radius: 50%;
    padding: .5rem;
    width: 5rem;
    height: 5rem;
    background-color: var(--secondary-color);
    cursor: pointer;
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    opacity: .5;
    transition: opacity .5s ease;
    animation: ${BttnToTopAnimation} .5s ease-in-out;

    &:hover{
        opacity: 1;
    }
`;