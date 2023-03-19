import { 
    Navbar,
    NavbarButtonsContainer 
} from './MainNavbar.styles';

import NavbarButtons from '../NavbarButtons/NavbarButtons';

import logoFmei from '../../FmeiDashboardAssets/imgs/logo-transp-fmei.png';

interface MainNavbarProps{
    selectedModalBox: any,
    idModal: any,
};

export default function MainNavbar({selectedModalBox, idModal}: MainNavbarProps){
    return(
        <Navbar>
            <figure>
                <img src={logoFmei} alt="Logo do FacilitaMEI" />
            </figure> 
            <NavbarButtonsContainer>
                <NavbarButtons
                    selectedModalBox={selectedModalBox}
                    idModal={idModal}
                />
            </NavbarButtonsContainer>
        </Navbar>
    );
};