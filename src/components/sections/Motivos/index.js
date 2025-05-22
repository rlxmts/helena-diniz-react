import styled from "styled-components"
import { Subtitulo } from "../../common/Subtitulo";
// import { Paragrafo } from "../../common/Paragrafo";
import { Container } from "../../common/Container";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const SecaoMotivo = styled.section`

    .motivos-container{
        display: flex;
        flex-direction: column;
        align-items:center;
        text-align: center;
    }

    h3{
        font-size: 1.5rem;
        margin: 0;
    }
    h4{
        font-size: 2.5rem;
        color: #42707e;
        color: #756fb3;
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
        background-color: #756fb3;
        color: #FFF;
        padding: 1rem;
        width: 100%;
        max-width: 400px;
        text-align: center;
        border-radius: 20px;
        display:flex;
        align-items: center;
        justify-content:center;
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
            width:100%;
        }
    }
`


const Motivos = ()=> {

    useEffect( ()=>{
        Aos.init({
            duration:1000,
            once: true
        })
    },[])
   
    const problemas = ['Avaliação clínica detalhada', 'Exames específicos para intolerâncias alimentares e desequilíbrios gastrointestinais', 'Diagnóstico preciso de doenças digestivas e metabólicas', 'Estratégias seguras e eficazes para emagrecimento saudável', 'Acompanhamento com escuta ativa, empatia e foco em resultado'];
    
    return(
        <SecaoMotivo id="especialidades">
            <Container className="motivos-container">
                <Subtitulo data-aos="fade-up">Como funciona o atendimento</Subtitulo>
                <h4 data-aos="fade-up">Consulta médica focada em você. Não no seu sintoma.</h4>
                {/* <Paragrafo data-aos="fade-up">É indicada quando já não há uma razão ou lógica aparente para a permanência do sofrimento. E neste momento você está diante de uma oportunidade de passar por uma terapia de caráter corretivo para queixas e sofrimentos específicos, principalmente quando já se tentou resolver de todas as maneiras usando a razão, tentando estratégias comportamentais, treinamentos cognitivos, que não funcionam. Quem sofre tem pressa!                
                </Paragrafo> */}
                <ul>
                    {problemas.map( (item)=> {
                        return(
                            <li data-aos="fade-right" key={item}>{item}</li>
                        )
                    })}
                </ul>
            </Container>
        </SecaoMotivo>
    )
}

export default Motivos;