import styled from "styled-components";
import { Botao } from "../../common/Botao";
import { Container } from "../../common/Container";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Section = styled.section`
    position: relative;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    background-image: url('img/banner2.jpg' );
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center ;
    height:100vh;
    padding: 0 10%;

    &::before{
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(88deg, rgba(255, 255, 255, 1) 20%, rgba(255, 212, 249, 0) 71%);
    z-index: 1;
    }

    h1,h2{position:relative; z-index:999;}

    h1{
        font-size: 3rem;
        font-weight: 300;
        max-width: 500px;
        color: #756fb3;
        line-height: 3rem;
    }
    
    h2{
        color: #7d7e7f;
        margin: 2rem 0;
        font-size: 1.2rem;
        font-weight: 300;
    }

    @media screen and (max-width: 668px){
        padding: 0;
        justify-content: end;
        height: 100svh;
        background-image: url('img/bannerdani.jpg');
        background-size: cover;
        background-position: center;
        &::before{
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(0deg, rgba(255, 255, 255, 1) 20%, rgba(255, 212, 249, 0) 71%);
            z-index: 1;
        }
      h1{
        font-size: 1.8rem;
        line-height: 2rem;
      }

      h2{
        margin: 1rem 0;
      }
    }
      
`

const Div = styled.div`

    width: fit-content;
    position:relative;
    z-index: 1;
    span{   
        display: block;
        width: 100%;
        margin-left: 1rem;
        font-family: "Poppins";
        font-size: .7rem;
        color:#7d7e7f; 
    }

`

const Banner = ()=> {

    useEffect( ()=>{
        Aos.init({
            duration:1000,
            once: true
        })
    },[])

    return(
        <Section id="inicio">
            <Container mobilePadding="1rem 2rem" className="fundo">
                    <h1 data-aos="fade-up">Especialista em Gastroenterologia e Clínica Médica</h1>
                    <h2 data-aos="fade-up">Agende sua consulta com a Dra. Daniela</h2>
                    <Div>
                        <Botao 
                            data-aos="fade-up" 
                            className="bt" 
                            href='https://wa.me/351931662209'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Agende seu Atendimento
                        </Botao>
                        <span data-aos="fade-up">Atendimento online ou presencial</span>
                    </Div>
            </Container>
        </Section>
    )
}

export default Banner;