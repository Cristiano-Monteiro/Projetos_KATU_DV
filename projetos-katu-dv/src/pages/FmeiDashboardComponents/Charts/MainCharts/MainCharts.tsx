import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from "highcharts/modules/exporting";
HighchartsExporting(Highcharts);

import { ChartContainer, Charts } from './MainCharts.styles';

import chartList from '../ChartExamples/ChartExamples';

function MainCharts(){
    return(
        <>
            <ChartContainer>
                <Charts>
                    {chartList.map((options: any) => {
                        return (
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={options}
                                containerProps={{className: 'chart'}}
                                key={options.key}
                            />
                        )
                    })}
                </Charts>
            </ChartContainer>
        </>
    );
};

export default MainCharts;