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
                    <Subtitulo>Dedico minha vida a ajudar as pessoas a se sentirem melhor e a crescerem pessoalmente.</Subtitulo>
                    <Paragrafo>Desde jovem, iniciei minha jornada profissional, sempre com o objetivo de evoluir e aprimorar minhas habilidades como terapeuta. Hoje, moro na Bélgica e me dedico diariamente a ser uma profissional melhor, com a missão de ajudar o máximo de pessoas possível e me tornar uma referência na área.</Paragrafo>
                    <Paragrafo>Embora resida na Europa, meu compromisso é contribuir significativamente para a saúde e bem-estar de pessoas no Brasil e em Portugal. Através de consultas online, dedico-me a oferecer suporte terapêutico de alta qualidade, visando sempre a melhoria da qualidade de vida e o desenvolvimento pessoal de meus clientes.</Paragrafo>
                    <Paragrafo>Convido você a embarcar em uma jornada de cura e transformação. Ao tratar o passado, podemos desbloquear o presente e abrir portas para um futuro cheio de possibilidades. Não deixe que antigas barreiras limitem seu potencial. Com minha ajuda, você pode superar obstáculos e conquistar grandes coisas. Tome a iniciativa hoje e permita-se viver a vida plena e realizadora que você merece.</Paragrafo>
                </div>
                <div className="historia-img" data-aos="fade-left">
                    <Subtitulo className="titulo-mobile">Dedico minha vida a ajudar as pessoas a se sentirem melhor e a crescerem pessoalmente.</Subtitulo>
                    <img src="./img/medica-corpo.webp" alt="Doutora Helena Diniz terapeuta clinica"></img>
                </div>
            </Container>
        </DivHistoria>
    )
}

export default Historia;