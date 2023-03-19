import { MainPageContent } from './MainContent.styles';

import FinancialInformation from '../../Charts/FinancialInformation/FinancialInformation';
import MainCharts from '../../Charts/MainCharts/MainCharts';

import ModalBox from '../../ModalBoxes/ModalBox/ModalBox';

interface MainContentProps{
    idModal: string,
    backToHome: () => void,
};

function MainContent({ idModal, backToHome }: MainContentProps){
    return(
        <MainPageContent>
            <FinancialInformation/>
            <MainCharts/>
            <ModalBox 
                idModal={idModal}
                backToHome={backToHome}
            />
        </MainPageContent>
    );
};

export default MainContent;