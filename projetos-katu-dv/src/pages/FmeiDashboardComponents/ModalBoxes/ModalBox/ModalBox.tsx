import InputFileBox from '../InputFileBox/InputFileBox';
import CalendarBox from '../CalendarBox/CalendarBox';

interface ModalBoxProps{
    idModal: string,
    backToHome: () => void,
};

export default function ModalBox({ idModal, backToHome }: ModalBoxProps){
    return(
        <>
            {idModal === 'Home' && null}
            {idModal === 'InputFile' && <InputFileBox backToHome={backToHome}/>}
            {idModal === 'Calendar' && <CalendarBox backToHome={backToHome}/>}
        </>
    );
};