import { 
    CalendarBoxContainer, 
    CalendarBoxContent, 
    DateRangeIconContainer, 
    InputDateContainer 
} from './CalendarBox.styles';

import BackButton from '../../Layout/BackButton/BackButton';
import SubmitButton from '../../Layout/SubmitButton/SubmitButton';

import dateRangeIcon from '../../FmeiDashboardAssets/icons/date_range_icon.svg';

interface CalendarBoxProps{
    backToHome: () => void,
};

export default function CalendarBox({ backToHome }: CalendarBoxProps){
    return(
        <CalendarBoxContainer>
            <CalendarBoxContent>
                <DateRangeIconContainer>
                    <img src={dateRangeIcon} alt="Ícone de intervalo de datas" />
                </DateRangeIconContainer>
                <BackButton backToHome={backToHome}/>
                <h2>Filtre suas informações</h2>
                <InputDateContainer>
                    <form action='#' method='post'>
                        <input 
                            type="date" 
                            name="inputDateStart" 
                            id="inputDateStart"
                            required
                        />
                        <input 
                            type="date" 
                            name="inputDateEnd" 
                            id="inputDateEnd"
                            required
                        />
                        <SubmitButton/>
                    </form>
                </InputDateContainer>
            </CalendarBoxContent>
        </CalendarBoxContainer>
    );
};