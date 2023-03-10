import { EarlyAccess, Footer, SocialMedias } from "./PageFooter.styles";

import { Link } from "react-router-dom";

import LogoKatu from '../../FmeiPageComponents/FmeiAssets/imgs/logo_katu_dv.png';

import TwitterIcon from '../../FmeiPageComponents/FmeiAssets/icons/twitter_icon.png';
import FacebookIcon from '../../FmeiPageComponents/FmeiAssets/icons/facebook_icon.png';

export function PageFooter(){
    const currentYear = new Date().getFullYear();
    
    return(
        <Footer>
            <EarlyAccess>
                <div>
                    <h2>Comece agora a ter controle sobre seus dados</h2>
                    <p>
                        Faça parte de nosso acesso antecipado e tenha a ferramenta assim que estiver 
                        disponivel.
                    </p>
                    <a href="https://forms.gle/DkQ4BqauTgTkmpv56">Clique Aqui</a>
                </div>
            </EarlyAccess>
            <div className="logoKatuDV">
                <div>
                    <Link to='/'>
                        <img 
                            src={LogoKatu} 
                            alt="Logo da startup Katu D.V"
                        />
                    </Link>
                </div>
                <p>Somos uma startup de visualização de dados.</p>
            </div>
            <SocialMedias>
                <a href="https://twitter.com/katudv">
                    <img 
                        src={TwitterIcon} 
                        alt="Twitter da Katu D.V"
                    />
                </a>
                <a href="https://www.facebook.com/KatuDV">
                    <img 
                        src={FacebookIcon} 
                        alt="Facebook da Katu D.V"
                    />
                </a>
            </SocialMedias>
            <p className="copyright">
                Copyright ©{currentYear} All rights reserved. This template is made by Katu D.V
            </p>
        </Footer>
    );
};