import { SlideContainer, SlideContent } from "./Slide.styles";

interface SlideProps {
    h2Text: string,
    pText: string,
    aHref: string,
};

export function Slide({ h2Text, pText, aHref}: SlideProps){
    return(
        <SlideContainer>
            <SlideContent>
                <h2>{h2Text}</h2>
                <p>{pText}</p>
                <a href={aHref}>
                    SAIBA MAIS
                </a>
            </SlideContent>
        </SlideContainer>
    );
};