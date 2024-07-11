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

    background: #ffefef;
    box-shadow: 0px 0px 10px #00000070;

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

        // p,h2, li{
        //     color: #FFF;
        // }

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
        <SecaoSobre id="sobre">
            <Container>
                <div className="sobre-container">
                    <Titulo data-aos="fade-up">Olá! <br></br>Seja bem-vindo,<br></br>eu sou Helena Diniz.</Titulo>
                    <div>
                        <Paragrafo data-aos="fade-up">Como hipnoterapeuta, ofereço uma abordagem completa para promover o bem-estar e o crescimento pessoal. Trabalho com atendimentos individuais, além de ministrar cursos e vivências que facilitam o desenvolvimento humano, o autoconhecimento e a melhoria da qualidade de vida. Minha missão é auxiliar você a:</Paragrafo>

                        <ul>
                            <li data-aos="fade-up">Ampliar a visão sobre si e seu momento.</li>
                            <li data-aos="fade-up">Obter equilíbrio nas crises de relacionamento.</li>
                            <li data-aos="fade-up">Desenvolver autoconfiança frente aos acontecimentos da época.</li>
                            <li data-aos="fade-up">Reduzir o estresse e ansiedade do dia a dia.</li>
                            <li data-aos="fade-up">Despertar qualidades e potencialidades no caminho profissional.</li>
                        </ul>
                        <Botao 
                            data-aos="fade-up" 
                            className="bt" 
                            href='https://wa.me/351931662209'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Agende seu Atendimento
                        </Botao>
                    </div>
                </div>
            </Container>
            <Historia />
        </SecaoSobre>
    )
}

export default Sobre;