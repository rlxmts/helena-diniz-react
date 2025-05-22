import styled from "styled-components";
import { Container } from "../../common/Container";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ContainerCitacao = styled.section`
    background-color: #eceff1;
    background-image: url('./img/zen.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;

    &:after{
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background-color: #ffffffb8;
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .citacao-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        position: relative;
        z-index: 1;
    }

    .autor{
        color:#756fb3;
    }
`

const Frase = styled.q`
    display: block;
    text-align: center;
    font-size: 2rem;
    color: #756fb3;
    font-style: italic;
    max-width: 800px;

    @media screen and (max-width: 768px){
        font-size: 1.2rem;
    }

`

const Citacao = ()=> {

    useEffect( ()=>{
        Aos.init({
            duration:1000,
            once: true
        })
    },[])

    return(
        <ContainerCitacao>
            <Container className="citacao-container">
                <Frase  data-aos="fade-up">Não posso esperar que algo mude lá fora na vida social se eu mesmo não me puser em movimento.</Frase>
                <span className="autor" data-aos="fade-up">- Rudolf Steiner, fundador da Antroposofia</span>
            </Container>
        </ContainerCitacao>
    )
}

export default Citacao;