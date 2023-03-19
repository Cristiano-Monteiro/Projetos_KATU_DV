import { SubmitBttn } from './SubmitButton.styles';

import doneIcon from '../../FmeiDashboardAssets/icons/done_outline_icon.svg';

interface SubmitButtonProps{
    handleFileSubmit?: () => void,
};

function SubmitButton ({ handleFileSubmit }: SubmitButtonProps){
    return(
        <SubmitBttn
            type="button"
            onClick={handleFileSubmit}
        >
            <img src={doneIcon} alt="Ícone de finalizar ou terminar uma ação" />
        </SubmitBttn>
    );
};

export default SubmitButton;