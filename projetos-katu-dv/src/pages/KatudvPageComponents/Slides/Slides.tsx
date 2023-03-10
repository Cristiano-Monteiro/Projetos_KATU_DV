import { useState } from "react";
import { Slide } from "../Slide/Slide";
import { SlideButton, SlidesButtonContainer, SlidesContainer } from "./Slides.styles";

import KatuImg from '../../KatudvPageComponents/KatuAssets/imgs/logo_katu_dv.png';
import FmeiImg from '../../KatudvPageComponents/KatuAssets/imgs/logo_facilitaMEI.png';

const SlideDatas = [
    {
        id: 1,
        h2Text: 'Somos uma startup focada em visualização de dados',
        pText: 'Descomplicamos todo o processo para você',
        aHref: '/',
        img: KatuImg,
        bgSize: '65rem',
    },
    {
        id: 2,
        h2Text: 'Conheça o FacilitaMEI',
        pText: 'Tenha controle de seus dados e planilhas com nossa ferramenta de visualização a um clique',
        aHref: '/facilitamei',
        img: FmeiImg,
        bgSize: '40rem',
    },
];

interface SlidesProps {
    openMenu: boolean,
};

export function Slides({ openMenu }: SlidesProps){
    const [slideId, setSlideId] = useState(1);

    const time = 7000;

    let slideTimeout = setTimeout(changeSlide, time);

    function changeSlide(){
        if(slideId < SlideDatas.length){
            setSlideId(prev => slideId + 1);
        } else {
            setSlideId(prev => 1);
        };
    };

    function resetTimeout(){
        clearTimeout(slideTimeout);
    };

    function currentSlideImg() {
        let imgData = {};
        SlideDatas.map((data) => {
            if(data.id === slideId){
                imgData = data;
            };
        });
        return imgData;
    };

    const slideImg = currentSlideImg();

    return(
        <SlidesContainer 
            openMenu={openMenu}
            slideImg={slideImg}
        >
            {SlideDatas.map((data) => {
                if(data.id === slideId){
                    return(
                        <Slide
                            h2Text={data.h2Text}
                            pText={data.pText}
                            aHref={data.aHref}
                            key={data.id}
                        />
                    );
                };
            })}
            <SlidesButtonContainer>
                {SlideDatas.map((data) => {
                    return(
                        <SlideButton
                            key={data.id}
                            onClick={() => {
                                resetTimeout();
                                setSlideId(data.id);
                            }}
                        />
                    );
                })}
            </SlidesButtonContainer>
        </SlidesContainer>
    );
};