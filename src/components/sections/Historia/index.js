import styled from "styled-components";
import { Container } from "../../common/Container";
import { Paragrafo } from "../../common/Paragrafo";
import { Subtitulo } from "../../common/Subtitulo";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";



const DivHistoria = styled.div`
     background-color: #dbdddd;
     background-color: #fff;

     .titulo-mobile{
        display:none;
     }

     .historia-container{
        display: flex;
        align-items: end;
        justify-content: center;
        gap: 2rem;
        padding: 10rem 1.5rem 0 1.5rem;

        .historia-textos{
            width:100%;
            max-width: 500px;
            display:flex;
            flex-direction: column;
            justify-content: center;
            padding-bottom: 3rem;
        }

        .historia-img{
            max-width:300px;
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
            border-bottom: 1px solid #756fb3;

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

    useEffect( ()=>{
        Aos.init({
            duration:1000,
            once: true
        })
    },[])

    return(
        <DivHistoria>
            <Container className="historia-container">
                <div className="historia-textos" data-aos="fade-right">
                    <Subtitulo>Bem-vinda ao meu espaço dedicado ao bem-estar e à transformação pessoal!</Subtitulo>
                    <Paragrafo>Sou natural do Brasil e fazem oito anos que experimento a vida na Europa. Já visitei um total de nove países e morei em três, sendo sendo atualmente residente na  Bélgica. Conheci muitas culturas e historias. Se me perguntassem o que eu mais adoro fazer, com certeza eu diria colecionar historias.</Paragrafo>
                    <Paragrafo>Essa vivencia me ensinou que nessa vida há mais felicidade em servir. E por muito tempo busquei superar os meus próprios desafios, as minhas questões internas e com certeza desapegar do passado. Queria lidar com a vida de maneira mais leve.</Paragrafo>
                    <Paragrafo>Explorei diversas práticas e métodos seguros de tratamento. Estudei diversos livros, áudios, vídeos e cursos. Até que encontrei a hipnoterapia, minha verdadeira paixão, minha missão de vida. E como alguém que tinha sido muito servida, senti que era hora de retribuir, ajudando outros a viver a vida que procuram. </Paragrafo>
                </div>
                <div className="historia-img" data-aos="fade-left">
                    <Subtitulo className="titulo-mobile">Dedico minha vida a ajudar as pessoas a se sentirem melhor e a crescerem pessoalmente.</Subtitulo>
                    <img src="./img/daniela.png" alt="Doutora Helena Diniz terapeuta clinica"></img>
                </div>
            </Container>
        </DivHistoria>
    )
}

export default Historia;