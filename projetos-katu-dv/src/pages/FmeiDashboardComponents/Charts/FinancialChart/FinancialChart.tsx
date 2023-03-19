import { 
    FinancialInformation, 
    FinancialInformationText,
    Money, 
} from './FinancialChart.styles';

interface FinancialChartProps{
    nameChart: string,
    srcImg: string,
    altImg: string,
};

function FinancialChart({nameChart, srcImg, altImg}: FinancialChartProps){
    return(
        <FinancialInformation>
            <figure>
                <img src={srcImg} alt={altImg} />
            </figure>
            <FinancialInformationText>
                <h1>{nameChart}</h1>
                <Money>
                    R$<span>00.000</span>
                </Money>
            </FinancialInformationText>
        </FinancialInformation>
    );
};

export default FinancialChart;