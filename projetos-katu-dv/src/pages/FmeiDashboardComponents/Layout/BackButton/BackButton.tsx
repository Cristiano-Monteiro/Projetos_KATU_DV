import { BackIcon } from './BackButton.styles';

import backIcon from '../../FmeiDashboardAssets/icons/arrow_back_icon.svg';

interface BackButtonProps{
    backToHome: () => void,
};

function BackButton({ backToHome }: BackButtonProps){
    return(
        <BackIcon
            onClick={backToHome}
        >
            <img src={backIcon} alt="Ícone de voltar ou retornar na página" />
        </BackIcon>
    );
};

export default BackButton;