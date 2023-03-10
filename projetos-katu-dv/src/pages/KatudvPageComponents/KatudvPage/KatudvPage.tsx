import { useState } from 'react';

import { Link } from 'react-router-dom';

import { GlobalStyle } from '../Global';

import { 
    KatudvPageContainer, 
    Navbar, 
    NavLinks, 
    SocialMediasKatu
} from './KatudvPage.styles';

import { Slides } from '../Slides/Slides';

import MenuIcon from '../../KatudvPageComponents/KatuAssets/icons/menu_icon.svg';
import CloseIcon from '../../KatudvPageComponents/KatuAssets/icons/close_icon.svg';

import FacebookIcon from '../../KatudvPageComponents/KatuAssets/icons/facebook-icon.png';
import TwitterIcon from '../../KatudvPageComponents/KatuAssets/icons/twitter-icon.png';
import InstagramIcon from '../../KatudvPageComponents/KatuAssets/icons/instagram-icon.png';
import LinkedinIcon from '../../KatudvPageComponents/KatuAssets/icons/linkedin-icon.png';

export default function KatudvPage(){
    const [openMenu, setOpenMenu] = useState(false);
    const currentYear = new Date().getFullYear();

    return(
        <KatudvPageContainer>
            <img 
                src={MenuIcon} 
                alt="Botão de menu" 
                className="MenuButton" 
                onClick={() => setOpenMenu(!openMenu)}
            />
            <Navbar openMenu={openMenu}>
                <img 
                    src={CloseIcon} 
                    alt="Botão de fechar menu" 
                    className="closeMenuButton" 
                    onClick={() => setOpenMenu(false)} 
                />
                <h1>KATU D.V</h1>
                <NavLinks>
                    <li>
                        <a href="/">INICIO</a>
                    </li>
                    <li>
                        <Link to='/facilitamei'>NOSSOS PRODUTOS</Link>
                    </li>
                    <li>
                        <a href="/">SOBRE NÓS</a>
                    </li>
                </NavLinks>
                <SocialMediasKatu>
                    <p className="copyright">
                        © Katu Data Visualization {currentYear}
                    </p>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/KatuDataVisualization">
                                <img src={FacebookIcon} alt="Link para o Facebook da Katu D.V" />
                            </a>
                        </li>
                        <li>
                            <a href="http://www.twitter.com/katudv">
                                <img src={TwitterIcon} alt="Link para o Twitter da Katu D.V" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/katudatavisualization/">
                                <img src={InstagramIcon} alt="Link para o Instagram da Katu D.V" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/katudatavisualization">
                                <img src={LinkedinIcon} alt="Link para o Linkedin da Katu D.V" />
                            </a>
                        </li>
                    </ul>
                </SocialMediasKatu>
            </Navbar>
            <Slides openMenu={openMenu}/>
            <GlobalStyle/>
        </KatudvPageContainer>
    );
};