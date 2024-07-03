import styled from "styled-components";
import { Paragrafo } from "../Paragrafo";
import { Subtitulo } from "../Subtitulo";

const CardContainer = styled.div`
    background-color: #FFF;
    width: 100%;
    max-width: 900px;
    border-radius: 20px;
    border: 1px solid #dcdcdc;
    padding: 3rem 5rem;
    box-shadow: 0px 0px 10px #0000001f;

    p{
        max-width: 850px;
    }

    h5{
        color: #999999;
    }

    @media screen and (max-width: 668px){
        padding: 2rem;
    }
`

const CabecalhoCard = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 0;
    padding: 2rem 0 3rem 0;
    border-bottom: 1px solid #DCDCDC;
    margin-bottom: 2rem;

    h3{
        margin-bottom: 0;
    }

    @media screen and (max-width: 668px){
        flex-direction: column;
        padding: 0 0 1rem 0;
        gap:1rem;
    }
`

const Card = ({img, alt, titulo, subtitulo, texto}) => {
    return(
        <CardContainer>
            <CabecalhoCard>
               <img src={img} alt={alt}></img>
                <div>
                    <Subtitulo>{titulo}</Subtitulo>
                    <h5>{subtitulo}</h5>
                </div>
            </CabecalhoCard>
            <Paragrafo>{texto}</Paragrafo>
        </CardContainer>
    )
}

export default Card;