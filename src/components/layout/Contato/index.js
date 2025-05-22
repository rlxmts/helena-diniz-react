import styled from "styled-components";
import { Container } from "../../common/Container";
import { Titulo } from "../../common/Titulo";
import { Paragrafo } from "../../common/Paragrafo";
import Formulario from "../../common/Formulario";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const SecaoContato = styled.section`
    background-color: #F1F1F1;
    box-shadow: 0px 0px 10px #0000004f;
    position: relative;

    .contato-titulo{
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .container-contato{
        display:flex;
        gap: 2rem;
        flex-wrap: wrap;
        justify-content: space-between;
    }


    @media screen and (max-width:768px){
        
        .container-contato{
            flex-direction: column;
            align-items: center;
        }

        .container-titulo{
            width:100%;
            max-width:500px;
            margin: 0 auto;
        }

    }
`

const Informacoes = styled.div`
    display: flex;
    flex-direction: column;
    gap:1rem;
    width:45%;

    .redes-sociais{
        display: flex;
        gap: 1rem;

        a{
            font-size: 1px;
            color: transparent;
            background-color: #42707e;
            background-color: #756fb3;
            display:block;
            height: 40px;
            width:40px;
            border-radius: 50%;
            position: relative;

            &:after{
                content: '';
                width: 25px;
                height: 25px;
                display:block;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-position: center;
                background-size: contain;
                background-reapeat: no-reapeat;
            }
        }

        li:nth-child(1) a:after{background-image: url('./img/wpp.png');}
        li:nth-child(2) a:after{
            background-image: url('./img/instagram.png');
            height: 20px;
            width: 20px;
        }
        li:nth-child(3) a:after{
            background-image: url('./img/email.png');
            height: 20px;
            width: 20px;
        }   
    }

    .info-contato{

        display:flex;
        flex-direction: column;
        gap: 1rem;

        li:nth-child(1){
            max-width: 500px;
            font-size: 1.5rem;

            span{
                display:block;
                font-size: 1.2rem;
                margin: .5rem 0;
                padding-bottom: 1rem;
                border-bottom: 1px solid #DCDCDC;
            }
        }

        h5{
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
    }

    @media screen and (max-width: 768px){
        width:100%;
        max-width:500px;
        margin:0 auto;

        .info-contato{
            li, h5{
                font-size: 1.3rem !important;
            }
        }
    }
`

const ContainerForm = styled.div`
    width: 50%;

    @media screen and (max-width: 768px) {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
    } 

`

const Contato = ()=> {

    useEffect( ()=>{
        Aos.init({
            duration:1000,
            once: true
        })
    },[])

    return(
        <SecaoContato id="contato">
            <Container>
                    <div className="container-titulo">
                        <Titulo className="contato-titulo">Contato</Titulo>
                    </div>
                    <div className="container-contato">
                        <ContainerForm data-aos="fade-right">
                            <Paragrafo>
                            Estou de portas e braços abertos para contribuir com o seu desenvolvimento e transformação por meio da Hipnoterapia. Agende sua sessão clicando nos botões espalhados pelo site ou, se preferir, utilize os campos abaixo ou o telefone.
                            </Paragrafo>
                            <Formulario />
                        </ContainerForm>
                        <Informacoes>
                            <ul className="info-contato"  data-aos="fade-left">
                                <li>Contato@helenediniz.com
                                    <span>+351 931 662 209 (Numero - Portugal) </span>
                                </li>
                                <li>
                                    <h5>Horario de Atentimento:</h5>
                                    <p>Segunda à Sexta, das 7h às 19h.</p>
                                    <p>Sábados das 8h às 12h.</p>
                                </li>
                            </ul>
                            <ul className="redes-sociais" data-aos="fade-left">
                                <li>
                                    <a href='https://wa.me/351931662209' target="_blank" rel="noopener noreferrer">WhatsApp</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/hhelenadiniz/" target="_blank" rel="noopener noreferrer">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://" target="_blank" rel="noopener noreferrer">E-mail</a>
                                </li>
                            </ul>
                        </Informacoes>
                    </div>
            </Container>
        </SecaoContato>
    )
}

export default Contato;