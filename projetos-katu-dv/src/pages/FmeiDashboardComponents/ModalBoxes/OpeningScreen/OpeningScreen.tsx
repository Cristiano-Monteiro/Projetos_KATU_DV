import { 
    OpeningScreenContainer, 
    OpeningScreenContent, 
    StartButton 
} from './OpeningScreen.styles';

import logoFmei from '../../FmeiDashboardAssets/imgs/logo-transp-fmei.png';

import upArrowIcon from '../../FmeiDashboardAssets/icons/up_arrow_icon.svg';

interface OpeningScreenProps{
    showMainContent: () => void,
};

export function OpeningScreen({ showMainContent }: OpeningScreenProps){
    const closeOpeningScreen = () => {
        document.getElementById('openingScreen')!.style.display = 'none';
        showMainContent();
    };

    return(
        <OpeningScreenContainer id='openingScreen'>
            <OpeningScreenContent>
                <figure>
                    <img src={logoFmei} alt="Logo do Facilita MEI" />
                </figure>
                <h1>FacilitaMEI</h1>
            </OpeningScreenContent>
            <StartButton
                id='startBttn'
                onClick={closeOpeningScreen}
            >
                <img
                    src={upArrowIcon} 
                    alt="Ícone de seta para cima"
                />
            </StartButton>
        </OpeningScreenContainer>
    );
};