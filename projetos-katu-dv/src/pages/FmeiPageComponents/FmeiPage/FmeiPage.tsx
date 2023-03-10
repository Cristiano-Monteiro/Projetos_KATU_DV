import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { GlobalStyle } from '../Global';

import { 
    FmeiPageContainer, 
    NavBar, 
    LogoKatuDV,
    MenuButton, 
    MenuOptions,
    Introduction,
    LogoFmei,
    ScreenshotDashboardFmei,
    KeyIndicatorsText,
    BttnToTop
} from './FmeiPage.styles';

import { ToolExplication } from '../ToolExplication/ToolExplication';
import { KeyIndicators } from '../KeyIndicators/KeyIndicators';
import { PageFooter } from '../PageFooter/PageFooter';

import LogoKatu from '../../FmeiPageComponents/FmeiAssets/imgs/logo_katu_dv.png';
import LogoFMEI from '../../FmeiPageComponents/FmeiAssets/imgs/logo_facilita_mei.png';

import ScreenshotDashboard from '../../FmeiPageComponents/FmeiAssets/imgs/screenshot_dashboard.png';
import MenuIcon from '../../FmeiPageComponents/FmeiAssets/icons/icon_menu.svg';
import UpArrowIcon from '../../FmeiPageComponents/FmeiAssets/icons/up_arrow_icon.svg';

export default function FmeiPage(){
    const [showBttnToTop, setShowBttnToTop] = useState(false);
    const [showMenuOptions, setShowMenuOptions] = useState(false);
    const [navbarFixedDisplay, setNavbarFixedDisplay] = useState(false);
    const [navbarAnimationOn, setNavbarAnimationOn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY >= 600){
                setShowBttnToTop(true);
            } else {
                setShowBttnToTop(false);
            };
        });
    }, []);

    useEffect(() => {
        const animationElements = document.querySelectorAll('[data-animation]');

        function animationOnPage(){
            const windowTop = window.pageYOffset + (window.innerHeight * 0.70);
            animationElements.forEach((element: any) => {
                if(windowTop > element.offsetTop){
                    element.classList.add('animate');
                } else {
                    element.classList.remove('animate');
                };
            });
        };
        
        window.addEventListener('scroll', () => animationOnPage());
    }, []);

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('nav');
        if(navbar != undefined){
            if(window.scrollY >= navbar.offsetHeight){
                setNavbarFixedDisplay(true);
                setNavbarAnimationOn(true);
            } else {
                setNavbarFixedDisplay(false);
            };
        };
    });

    return(
        <FmeiPageContainer>    
            <NavBar 
                navbarFixedDisplay={navbarFixedDisplay}
                navbarAnimationOn={navbarAnimationOn}
            >
                <LogoKatuDV>
                    <Link to='/'>
                        <img src={LogoKatu} alt="logo da startup Katu D.V" />
                    </Link>
                </LogoKatuDV>
                <MenuButton onClick={() => setShowMenuOptions(!showMenuOptions)}>
                    <img src={MenuIcon} alt="botão de menu" />
                </MenuButton>
                <MenuOptions showMenuOptions={showMenuOptions}>
                    <Link to='/'>Página Inicial</Link>
                    <a href="https://forms.gle/DkQ4BqauTgTkmpv56">Ter Acesso Antecipado</a>
                </MenuOptions>
            </NavBar>
            <Introduction>
                <div className='container'>
                    <LogoFmei>
                        <img 
                            src={LogoFMEI} 
                            alt="logo do Facilita MEI"
                        />
                    </LogoFmei>
                    <h1>FacilitaMEI</h1>
                    <p className="headerText">
                        Visão geral de seu negócio a um clique de distância.
                        Clique abaixo para ter acesso antecipado ao produto.
                    </p>
                    <a href="https://forms.gle/DkQ4BqauTgTkmpv56">Clique Aqui</a>
                    <p>Oferta válida por tempo limitado.</p>
                </div>
                <ScreenshotDashboardFmei data-animation='toBottom'>
                    <img 
                        src={ScreenshotDashboard} 
                        alt="imagem da ferramenta Facilita MEI"
                    />
                </ScreenshotDashboardFmei>
            </Introduction>
            <ToolExplication/>
            <KeyIndicatorsText>
                <h2>Tenha indicadores chaves que ajudam a você tomar a melhor decisão para seu negócio.</h2>
            </KeyIndicatorsText>
            <KeyIndicators/>
            <PageFooter/>
            {showBttnToTop && (
                <BttnToTop onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <img 
                        src={UpArrowIcon} 
                        alt="botão de voltar para o topo/início da página"
                    />
                </BttnToTop>
            )}
            <GlobalStyle/>
        </FmeiPageContainer>
    );
};