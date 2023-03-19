import styled, { keyframes } from "styled-components";

const inputFileBoxAnimation = keyframes`
    from{
        opacity: 0;
        transform: translate(0, -3rem);
    }
    to{
        opacity: 1;
        transform: translate(0, 0);
    }
`;

export const InputFileBoxContainer = styled.div`
    background-color: rgba(0, 0, 0, .6);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 805px){
        border-radius: var(--main-border-radius) 0 0 var(--main-border-radius);
    }
`;

export const InputFileBoxContent = styled.div`
    width: 90%;
    max-width: 40rem;
    height: 30rem;
    padding: 4rem 1rem;
    border-radius: var(--main-border-radius);
    background-color: var(--main-color);
    animation: ${inputFileBoxAnimation} .5s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 1.5rem;
    position: relative;

    form{
        width: 100%;
        max-width: 30rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2.5rem;

        input{
            padding: 2rem;
            background-color: var(--secondary-color);
            border-radius: var(--main-border-radius);
            color: #fff;
            width: 100%;
            cursor: pointer;
        }
    }

    @media screen and (min-width: 805px){
        right: 4rem;
    }
`;

// Icons styles

export const UploadFileIcon = styled.figure`
    width: 9rem;
    display: flex;
    justify-content: center;
    position: absolute;
    top: -3.5rem;

    img{
        width: 100%;
    }
`;

export const AttachFileAddIcon = styled.figure`
    width: 100%;
    max-width: 3rem;
    display: flex;
    justify-content: center;

    img{
        width: 100%;
    }
`;

// ============

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #fff;

    h2{
        color: #fff;
        text-align: center;
        font-size: 5vw;
    }

    @media screen and (min-width: 450px){
        h2{
            font-size: 2rem;
        }
    }
`;