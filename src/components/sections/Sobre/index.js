import styled from "styled-components";
import { Container } from "../../common/Container"
import { Paragrafo } from "../../common/Paragrafo";
import { Titulo } from "../../common/Titulo";
import { Botao } from "../../common/Botao";
import Historia from "../Historia";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const SecaoSobre = styled.section`

    background: rgb(86,123,134);
    background: linear-gradient(180deg, rgba(86,123,134,1) 50%, rgba(93,129,141,1) 100%);

    .sobre-container{
        display:flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        div{
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        h2{
            text-align: end;
            font-size: 3rem;
            font-weight: 300;
            align-self: flex-start;
        }

        p, h2, li{
            color: #FFF;
        }

        ul{
            padding-left: 1.2rem;
        }

        ul li{
            list-style-type: disc;
            margin-bottom: .5rem;
        }
    }

    @media screen and (max-width: 768px){

        .sobre-container{
            flex-direction: column;
        }

        h2{
            margin:0 auto;
            text-align:start !important;
            font-size: 2rem !important;
        }
    }
`
const Sobre = ()=> {

    useEffect( ()=> {
        Aos.init({
            duration: 1000,
            once: true
        });
    }, [])
    return(
        <SecaoSobre>
            <Container>
                <div className="sobre-container">
                    <Titulo data-aos="fade-up">Olá! <br></br>Seja bem-vindo,<br></br>eu sou Helena Diniz.</Titulo>
                    <div>
                        <Paragrafo data-aos="fade-up">Atuo como Terapeuta Antroposófica, Transpessoal, Aconselhadora Biográfica, e Instrutora de Mindfulness. Realizo atendimentos individuais ou em grupos, cursos diversos e vivências que contribuem com o desenvolvimento humano, o autoconhecimento e qualidade de vida. Minha proposta de trabalho é ajudar você a:</Paragrafo>

                        <ul>
                            <li data-aos="fade-up">Ampliar a visão sobre si, seu momento e biografia.</li>
                            <li data-aos="fade-up">Obter equilíbrio nas crises de relacionamento.</li>
                            <li data-aos="fade-up">Desenvolver autoconfiança frente aos acontecimentos da época.</li>
                            <li data-aos="fade-up">Reduzir o estresse e ansiedade do dia a dia.</li>
                            <li data-aos="fade-up">Despertar qualidades e potencialidades no caminho profissional.</li>
                        </ul>
                        <Botao  data-aos="fade-up"> Agende seu Atendimento</Botao>
                    </div>
                </div>
            </Container>
            <Historia />
        </SecaoSobre>
    )
}

export default Sobre;