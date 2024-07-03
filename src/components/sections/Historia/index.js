import styled from "styled-components";
import { Container } from "../../common/Container";
import { Paragrafo } from "../../common/Paragrafo";
import { Subtitulo } from "../../common/Subtitulo";

const DivHistoria = styled.div`
     background-color: #dbdddd;

     .titulo-mobile{
        display:none;
     }

     .historia-container{
        display: flex;
        aling-items: center;
        justify-content: center;
        gap: 2rem;

        .historia-textos{
            width:100%;
            max-width: 500px;
            display:flex;
            flex-direction: column;
            justify-content: center;
        }

        .historia-img{
            max-width:230px;
            display: flex;
            flex-direction: column;
            align-items: center;

            img{
                width:100%;
            }
        }
     }

     @media screen and (max-width: 768px){
        .historia-container{
            flex-direction: column-reverse;
            align-items: center;
        }

        .historia-img{
            max-width:100% !important;

            img{
                max-width:200px;
            }
        }

        .historia-textos{

            margin-top: 2rem;

            h3{
                display:none;
            }
        }

        .titulo-mobile{
            display:block;
            width: 100%;
        }
     }
`

const Historia = () => {
    return(
        <DivHistoria>
            <Container className="historia-container">
                <div className="historia-textos">
                    <Subtitulo>Dedico minha vida a ajudar as pessoas a se sentirem melhor e a crescerem pessoalmente.</Subtitulo>
                    <Paragrafo>Comecei minha carreira bem jovem, em São Paulo, e assim tive a oportunidade de vivenciar diferentes realidades no apoio e orientação a pessoas e profissionais.</Paragrafo>
                    <Paragrafo>Transitei por hospitais, institutos e Ongs, atuei no mercado corporativo como gestora e diretora social em multinacionais como a Volkswagen Caminhões, e tive a minha própria consultoria organizacional, focada no desenvolvimento humano de líderes e gestores.</Paragrafo>
                    <Paragrafo>Sempre me mantendo atualizada, realizei especializações em Psicologia Analítica, Psicologia Transpessoal, Desenvolvimento Humano, Estudos Biográficos, Pedagogia Curativa, balizados pela Antroposofia; e também, Gerontologia e Constelação Familiar. No conhecimento sobre gestores e executivos, me capacitei em Executive Coach, Life Coach e Coach Quântico (ICI: Integrated Coaching Institute) e Desenvolvimento de Líderes e Gestores (FGV).</Paragrafo>
                </div>
                <div className="historia-img">
                    <Subtitulo className="titulo-mobile">Dedico minha vida a ajudar as pessoas a se sentirem melhor e a crescerem pessoalmente.</Subtitulo>
                    <img src="./img/medica-corpo.webp" alt="Doutora Helena Diniz terapeuta clinica"></img>
                </div>
            </Container>
        </DivHistoria>
    )
}

export default Historia;