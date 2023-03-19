import { 
    FinancialInformationContainer, 
    FinancialInformationWrapper, 
} from './FinancialInformation.styles';

import attachMoneyIcon from '../../FmeiDashboardAssets/icons/FinancialInformationIcons/attach_money_icon.svg';
import moneyOffIcon from '../../FmeiDashboardAssets/icons/FinancialInformationIcons/money_off_icon.svg';
import balanceIcon from '../../FmeiDashboardAssets/icons/FinancialInformationIcons/balance_icon.svg';

import FinancialChart from '../FinancialChart/FinancialChart';

function FinancialInformation(){
    const FinancialChartData = [
        {
            name: 'Receita',
            icon: attachMoneyIcon,
            alt: 'Ícone de Receita Financeira',
            key: 1
        },
        {
            name: 'Despesa',
            icon: moneyOffIcon,
            alt: 'Ícone de Despesa Financeira',
            key: 2
        },
        {
            name: 'Saldo',
            icon: balanceIcon,
            alt: 'Ícone de Saldo Financeiro',
            key: 3
        }
    ];

    return(
        <FinancialInformationContainer>
            <FinancialInformationWrapper>
                {FinancialChartData.map((data) => {
                    return(
                        <FinancialChart
                            nameChart={data.name}
                            srcImg={data.icon}
                            altImg={data.alt}
                            key={data.key}
                        />
                    );
                })}
            </FinancialInformationWrapper>
        </FinancialInformationContainer>
    );
};

export default FinancialInformation;