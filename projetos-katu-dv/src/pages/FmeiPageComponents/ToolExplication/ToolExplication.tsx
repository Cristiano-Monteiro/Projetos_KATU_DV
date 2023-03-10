import { 
    IllustrativeImage, 
    LogoAndText, 
    ScreenshotMobile, 
    ToolExplicationContainer 
} from './ToolExplication.styles';

import ScreenshotDashboardMobile from '../../FmeiPageComponents/FmeiAssets/imgs/screenshot_dashboard_mobile.png';

import IllustrativeImage1 from '../../FmeiPageComponents/FmeiAssets/imgs/imagem_ilustrativa_1.png';
import IllustrativeImage2 from '../../FmeiPageComponents/FmeiAssets/imgs/imagem_ilustrativa_2.png';

import BarChartIcon from '../../FmeiPageComponents/FmeiAssets/icons/bar_chart_icon.svg';
import MonitoringIcon from '../../FmeiPageComponents/FmeiAssets/icons/monitoring_icon.svg';
import TouchAppIcon from '../../FmeiPageComponents/FmeiAssets/icons/touch_app_icon.svg';

export function ToolExplication(){
    return(
        <ToolExplicationContainer>
            <section data-animation='toRight'>
                <LogoAndText>
                    <img 
                        src={BarChartIcon} 
                        alt="logo ilustrativa" 
                        className="logo_ilustrativa"
                    />
                    <h2>Muitos dados, poucas informações.</h2>
                    <p>
                        Inúmeros dados acabam se perdendo de vista, o que significam?
                        O que podem inferir? Várias informações são perdidas.
                    </p>
                </LogoAndText>
                <IllustrativeImage>
                    <img 
                        src={IllustrativeImage1} 
                        alt="imagens de tabelas de dados e de um funcionario"
                    />
                </IllustrativeImage>
            </section>
            <section data-animation='toRight'>
                <LogoAndText>
                    <img 
                        src={MonitoringIcon} 
                        alt="logo ilustrativa" 
                        className="logo_ilustrativa"
                    />
                    <h2>Entenda seus dados.</h2>
                    <p>
                        Para evitar se perder em tabelas comumente se recorre a gráficos,
                        através deles podemos observar de maneira pânoramica a situação 
                        para determinarmos a melhor decisão a se tomar, infelizmente esse
                        passo requer estudo, análise de dados, contratação de mão de obra ou 
                        instalação de um software que necessita de treinamento.
                    </p>
                </LogoAndText>
                <IllustrativeImage>
                    <img 
                        src={IllustrativeImage2} 
                        alt="imagem de um gráfico ilustrativo e de duas pessoas conversando."
                    />
                </IllustrativeImage>
            </section>
            <section data-animation='toRight'>
                <ScreenshotMobile>
                    <img 
                        src={ScreenshotDashboardMobile} 
                        alt="imagem da ferramenta Facilita MEI na versão mobile"
                    />
                </ScreenshotMobile>
                <LogoAndText>
                    <img 
                        src={TouchAppIcon} 
                        alt="logo ilustrativa" 
                        className="logo_ilustrativa"
                    />
                    <h2>Resolva tudo isso com um clique.</h2>
                    <p>
                        A ferramenta FacilitaMEI te entrega um Dashboard de fácil entendimento com todas as informações 
                        necessárias para você ter controle total de seu negócio a partir de qualquer tabela que você esteja 
                        utilizando em apenas um clique.
                    </p>
                </LogoAndText>
            </section>
        </ToolExplicationContainer>
    );
};
