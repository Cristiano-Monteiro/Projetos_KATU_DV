import styled from "styled-components";

export const KeyIndicatorsContainer = styled.section`
    width: 100%;
    height: auto;
    padding: 2rem 2rem 21rem;
    background-color: var(--dark-gray);
    display: flex;
    align-items: center;
    justify-content: center;
    
    .organizerBox{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4rem;
    }

    section{
        width: 100%;
        max-width: 50rem;
        padding: 3.5rem 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: var(--white);
        border-radius: 20px;
        text-align: left;
        line-height: 3rem;
        box-shadow: var(--box-shadow);

        div{
            width: 7rem;
            height: 7rem;
            padding: 1rem;
            border-radius: 50%;
            background-color: #efefef;
            box-shadow: var(--box-shadow-icon);
        }
    }

    section:hover{
        box-shadow: 9px 9px 10px gray;
    }

    @media screen and (min-width: 580px){
        .organizerBox{
            flex-direction: row;
            flex-wrap: wrap;
        }

        section{
            max-width: 25rem;
            height: 42rem;
        }
    }

    @media screen and (min-width: 1110px){
        padding: 2rem 0 21rem;

        .organizerBox{
            max-width: 110rem;
        }

        section{
            max-width: 33rem;
        }
    }
`;