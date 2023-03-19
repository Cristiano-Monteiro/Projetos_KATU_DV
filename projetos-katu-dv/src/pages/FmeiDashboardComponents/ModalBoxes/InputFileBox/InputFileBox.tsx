import { 
    AttachFileAddIcon, 
    InputFileBoxContainer, 
    InputFileBoxContent, 
    TextContainer, 
    UploadFileIcon,
} from './InputFileBox.styles';

import BackButton from '../../Layout/BackButton/BackButton';
import SubmitButton from '../../Layout/SubmitButton/SubmitButton';

import uploadFileIcon from '../../FmeiDashboardAssets/icons/upload_file_icon.svg';
import attachFileAddIcon from '../../FmeiDashboardAssets/icons/attach_file_add_icon.svg';

interface InputFileBoxProps{
    backToHome: () => void,
};

export default function InputFileBox({ backToHome }: InputFileBoxProps){
    function handleFileSubmit(){
        const inputFile = document.getElementById("fileInput") as HTMLInputElement;
        
        const file = inputFile.files![0];
        
        if(file != undefined){
            const formData = new FormData();
        
            formData.append('file', file);
        
            const optionsFetch = {
                method: 'POST',
                body: formData,
            };
        
            fetch('http://152.67.42.101:4009/entradaDeDados', optionsFetch)
                .then(resp => resp.json())
                .then(respJson => {
                    console.log(respJson);
                    window.alert('ARQUIVO ENVIADO COM SUCESSO!');
                })
                .catch(err => console.log(err));
        } else {
            window.alert('Arquivo vazio! Adicione a sua tabela no campo abaixo.');
        };
    };

    return(
        <InputFileBoxContainer>
            <InputFileBoxContent>
                <UploadFileIcon>
                    <img src={uploadFileIcon} alt="Ícone de enviar arquivo" />
                </UploadFileIcon>
                <BackButton backToHome={backToHome}/>
                <TextContainer>
                    <h2>Adicione sua Tabela</h2>
                    <AttachFileAddIcon>
                        <img src={attachFileAddIcon} alt="Ícone de anexar arquivo" />
                    </AttachFileAddIcon>
                </TextContainer>
                <form 
                    method="post" 
                    encType='multipart/form-data' 
                    id='fileForm'
                >
                    <input
                        type="file" 
                        name="dataTable" 
                        id="fileInput"
                        required
                    />
                    <SubmitButton handleFileSubmit={handleFileSubmit}/>
                </form>
            </InputFileBoxContent>
        </InputFileBoxContainer>
    );
};