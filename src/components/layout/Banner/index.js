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
    background-image: url('./img/banner2.jpg');
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
        height: 100vh;
        background-size: cover;
        background-position: center;

      .fundo{
        background-size: contain;
        background-position-x: right;
        background-position-y: top;
        justify-content: end;
      }

      .fundo::after{
        width:100%;
        height:100%;
        content: '';
        display:block;
        position: absolute;
        background: rgb(239, 215, 255);
        background: linear-gradient(45deg, rgb(255, 255, 255) 0%, rgba(255,255,255,0) 100%);
        left:0;
        top:0;
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
        color: #7d7e7f;
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
            <Container className="fundo">
                    <h1 data-aos="fade-up">Autoconhecimento e Autodesenvolvimento</h1>
                    <h2 data-aos="fade-up">Descubra uma nova versão de si mesmo.</h2>
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
                        <span data-aos="fade-up">Consultas Online.</span>
                    </Div>
            </Container>
        </Section>
    )
}

export default Banner;