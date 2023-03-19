import { useState } from "react";
import { GlobalStyle } from "../Global";

import { FmeiDashboardContainer, MobileNavbar } from "./FmeiDashboard.styles";

import { OpeningScreen } from "../ModalBoxes/OpeningScreen/OpeningScreen";
import MainContent from "../Layout/MainContent/MainContent";
import MainNavbar from "../Navbar/MainNavbar/MainNavbar";

import logoFmei from '../FmeiDashboardAssets/imgs/logo-transp-fmei.png';

export default function FmeiDashboard(){
    const [mainContent, setMainContent] = useState(false);
    const [idModal, setIdModal] = useState('Home');

    function backToHome(){
        setIdModal('Home');
    };
    
    function selectedModalBox(e: any){
        if(idModal === e.target.parentNode.id){
            setIdModal('Home');
        } else {
            setIdModal(e.target.parentNode.id);
        };
    };

    function showMainContent(){
        setMainContent(true);
    };
    
    return(
        <>
            <OpeningScreen 
                showMainContent={showMainContent}
            />
            {mainContent && (
                <FmeiDashboardContainer>
                    <MobileNavbar>
                        <figure>
                            <img src={logoFmei} alt="Logo do FacilitaMEI" />
                        </figure>
                    </MobileNavbar>
                    <MainContent
                        idModal={idModal}
                        backToHome={backToHome}
                    />
                    <MainNavbar
                        selectedModalBox={selectedModalBox}
                        idModal={idModal}
                    />
                </FmeiDashboardContainer>
            )}
            <GlobalStyle/>
        </>
    );
};