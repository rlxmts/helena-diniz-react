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

            span{
                font-family:"Poppins";
                font-weight: bold;
                font-size: 16px;
                color: #7d7e7f;
                margin-bottom: 2rem;
            }
        }

        .historia-img{
            max-width:400px;
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
                max-width:300px;
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
                    <Subtitulo marginBottom="0">Dra. Daniela Milagre</Subtitulo>
                    <span>Médica especialista em Gastroenterologia e Clínica Médica</span>
                    <Paragrafo>Com ampla experiência no diagnóstico e tratamento de distúrbios digestivos, metabólicos e de sobrepeso, a Dra. Daniela atua de forma integrada para oferecer soluções que vão além dos sintomas.</Paragrafo>
                    <Paragrafo>Formada por [Universidade].</Paragrafo>
                    <Paragrafo>Atualização constante em Medicina Digestiva, Doenças Funcionais, Intolerâncias Alimentares e Obesidade</Paragrafo>
                </div>
                <div className="historia-img" data-aos="fade-left">
                    <Subtitulo className="titulo-mobile">Dra. Daniela Milagre</Subtitulo>
                    <img src="./img/daniela.png" alt="Doutora Helena Diniz terapeuta clinica"></img>
                </div>
            </Container>
        </DivHistoria>
    )
}

export default Historia;