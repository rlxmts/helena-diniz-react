import styled from "styled-components"
import { Subtitulo } from "../../common/Subtitulo";
import { Paragrafo } from "../../common/Paragrafo";
import { Container } from "../../common/Container";

const SecaoMotivo = styled.section`

    .motivos-container{
        display: flex;
        flex-direction: column;
        align-items:center;
    }

    h3{
        font-size: 1.5rem;
        margin: 0;
    }
    h4{
        font-size: 2.5rem;
        color: #42707e;
        margin-bottom: 2rem;
        text-align: center;
    }

    p{
        max-width: 100%;
        text-align: center;
        margin-bottom: 4rem;
    }

    ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
    }

    li{
        background-color: #42707e;
        color: #FFF;
        padding: 1rem;
        width: 170px;
        text-align: center;
        border-radius: 20px;
    }

    @media screen and (max-width: 668px){
        h4{
            font-size: 2rem;
            margin-top:1rem;
        }

        ul{
            gap:5px;
        }
        li{
            width: 160px;
        }
    }
`


const Motivos = ()=> {
   
    const problemas = ['Vícios', 'Ansiedade', 'Depressão', 'Compulsões', 'Ciclo Repetitivos', 'Fobias'];
    
    return(
        <SecaoMotivo>
            <Container className="motivos-container">
                <Subtitulo>Para Quem É Essa Terapia?</Subtitulo>
                <h4>A Terapia Breve Com Base Em Neurociência</h4>
                <Paragrafo>É indicada quando já não há uma razão ou lógica aparente para a permanência do sofrimento. E neste momento você está diante de uma oportunidade de passar por uma terapia de caráter corretivo para queixas e sofrimentos específicos, principalmente quando já se tentou resolver de todas as maneiras usando a razão, tentando estratégias comportamentais, treinamentos cognitivos, que não funcionam. Quem sofre tem pressa!                
                </Paragrafo>
                <ul>
                    {problemas.map( (item)=> {
                        return(
                            <li key={item}>{item}</li>
                        )
                    })}
                </ul>
            </Container>
        </SecaoMotivo>
    )
}

export default Motivos;