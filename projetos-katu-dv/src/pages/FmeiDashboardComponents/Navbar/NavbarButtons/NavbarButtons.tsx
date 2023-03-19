import { 
    NavbarList,
    NavbarItens,
} from './NavbarButtons.styles';

import homeIcon from '../../FmeiDashboardAssets/icons/home_icon.svg';
import calendarIcon from '../../FmeiDashboardAssets/icons/calendar_icon.svg';
import addIcon from '../../FmeiDashboardAssets/icons/add_icon.svg';

interface NavbarButtonsProps{
    selectedModalBox: any,
    idModal: any,
};

export default function NavbarButtons({selectedModalBox, idModal}: NavbarButtonsProps){
    const navbarButtonsData = [
        {
            srcIcon: homeIcon,
            altIcon: 'Ícone de início',
            id: 'Home'
        },
        {
            srcIcon: addIcon,
            altIcon: 'Ícone de adição da tabela de dados',
            id: 'InputFile'
        },
        {
            srcIcon: calendarIcon,
            altIcon: 'Ícone de calendário',
            id: 'Calendar'
        }
    ];

    return(
        <NavbarList>
            {navbarButtonsData.map((data) => {
                return(
                    <NavbarItens 
                        onClick={selectedModalBox} 
                        key={data.id} 
                        id={data.id}
                        idModal={idModal}
                        dataId={data.id}
                    >
                        <img 
                            src={data.srcIcon}
                            alt={data.altIcon}
                        />
                    </NavbarItens>
                );
            })}
        </NavbarList>
    );
};