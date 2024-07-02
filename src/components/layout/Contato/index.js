import styled from "styled-components";
import { Container } from "../../common/Container";
import { Titulo } from "../../common/Titulo";
import { Paragrafo } from "../../common/Paragrafo";
import Formulario from "../../common/Formulario";

const SecaoContato = styled.section`
    background-color: #F1F1F1;

    .container-contato{
        display:flex;
        gap: 2rem;
    }
`

const Informacoes = styled.div`
    display: flex;
    flex-direction: column;
    gap:1rem;

    .redes-sociais{
        display: flex;
        gap: 1rem;

        a{
            font-size: 1px;
            color: transparent;
            background-color: #42707e;
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
`

const ContainerForm = styled.div`
    width: 50%;
`

const Contato = ()=> {
    return(
        <SecaoContato>
            <Container>
                    <Titulo>Contato</Titulo>
                    <div className="container-contato">
                        <ContainerForm>
                            <Paragrafo>
                            Estou de portas e braços abertos para contribuir com o seu desenvolvimento e transformação por meio da terapia transpessoal, antroposófica e do processo biográfico. Agende sua sessão clicando nos botões espalhados pelo site ou, se preferir, utilize os campos abaixo ou o telefone.
                            </Paragrafo>
                            <Formulario />
                        </ContainerForm>
                        <Informacoes>
                            <ul className="info-contato">
                                <li>Rua Jaboticabeiras, 156 - Santissímo / RJ
                                    <span>(21) 99153-7608</span>
                                </li>
                                <li>
                                    <h5>Horario de Atentimento:</h5>
                                    <p>Segunda à Sexta, das 7h às 19h.</p>
                                    <p>Sábados das 8h às 12h.</p>
                                </li>
                            </ul>
                            <ul className="redes-sociais">
                                <li>
                                    <a href="https://" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                                </li>
                                <li>
                                    <a href="https://" target="_blank" rel="noopener noreferrer">Instagram</a>
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