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

    background:rgba(244, 221, 255, 0.26);
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
            width:50%;
        }

        h2{
            text-align: end;
            font-size: 3rem;
            font-weight: 300;
            align-self: flex-start;
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
            gap:1rem;
            div{
                width:100%;
                text-aling: center;
            }

            div:nth-child(2) a{
                margin: 1rem auto;
            }
        }

        h2{
            text-align:start !important;
            font-size: 2rem !important;
        }            
    }
`
const Span = styled.span`
 font-size: 20px;
 font-weight: bold;
 margin-bottom: -1rem;
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
                    <Titulo data-aos="fade-up">Você sente que seu corpo está tentando te dizer algo?</Titulo>
                    <div>
                        <Paragrafo data-aos="fade-up">Desconfortos intestinais, dificuldade para emagrecer e reações alimentares não são normais — são sinais que precisam ser investigados.
                        </Paragrafo>

                            <Span className="fade-up">Você sente que:</Span>
                        <ul>
                            <li data-aos="fade-up">Já tentou de tudo para emagrecer e nada funciona?</li>
                            <li data-aos="fade-up">Vive estufado(a), com azia, gases ou intestino desregulado?</li>
                            <li data-aos="fade-up">Come certos alimentos e passa mal, mas não sabe exatamente o que te faz mal?</li>
                            <li data-aos="fade-up">Tem cansaço frequente, dores de cabeça ou até acne sem explicação?</li>                           
                            <span style={{fontFamily: 'Poppins', fontSize:'14px'}}>Muitos desses sintomas podem estar relacionados à saúde do seu intestino e ao funcionamento do seu metabolismo.</span>
                        </ul>
                        <Botao 
                            data-aos="fade-up" 
                            className="bt" 
                            href='https://wa.me/351931662209'
                            target="_blank"
                            rel="noopener noreferrer"
                            margin='0'
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