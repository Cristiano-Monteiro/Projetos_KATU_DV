import styled from "styled-components";

export const Footer = styled.footer`
    background-color: #01015c;
    padding: 18rem 2rem 3rem;
    color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5rem;
    position: relative;

    .logoKatuDV{
        width: 17rem;

        div{
            width: 12rem;
            margin-bottom: 2rem;
        }
    }

    p{
        text-align: center;
        line-height: 3rem;
    }

    .copyright{
        align-self: center;
    }

    @media screen and (min-width: 630px){
        padding: 13rem 5rem 3rem;
    }

    @media screen and (min-width: 840px) {
        padding: 20rem 5rem 3rem;

        .logoKatuDV{
            width: 30rem;

            div{
                width: 15rem;
            }
        }

        p{
            text-align: left;
        }
    }
`;

export const SocialMedias = styled.div`
    display: flex;
    gap: 1rem;
    
    a{
        width: 5rem;
        height: 5rem;
        padding: 1rem;
        border-radius: 50%;
        transition: all .5s ease-in-out;
    }

    a:hover{
        box-shadow: 0 0 20px var(--secondary-color);
    }
`;

export const EarlyAccess = styled.section`
    width: 100%;
    max-width: 45rem;
    height: auto;
    padding: 3.5rem 1rem;
    border-radius: 20px;
    text-align: center;
    gap: 3rem;
    line-height: 3.3rem;
    background-image: linear-gradient(#0101a5, #0505f7);
    color: var(--white);
    align-self: center;
    position: absolute;
    top: -18rem;
    box-shadow: 0 0 15px var(--secondary-color);

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    a{
        border: 2px solid var(--white);
        padding: 1.5rem 5rem;
        border-radius: 20px;
        color: var(--white);
        font-weight: 900;
        transition: all .5s ease;
    }

    a:hover{
        background-color: var(--white);
        color: var(--main-color);
    }

    p{
        text-align: center;
    }

    @media screen and (min-width: 840px){
        max-width: 70rem;
        padding: 5rem 3rem;

        h2{
            font-size: 3rem;
        }

        p{
            font-size: 2rem;
        }
    }
`;