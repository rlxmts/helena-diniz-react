import styled from "styled-components";
import { Botao } from "../../common/Botao";
import { Container } from "../../common/Container";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Section = styled.section`

    height: 100vh;
    position: relative;
    // background: rgb(218,232,240);
    // background: linear-gradient(275deg, rgba(218,232,240,1) 50%, rgba(223,234,241,1) 100%);
    background: rgb(255,239,239);
background: linear-gradient(180deg, rgba(255,239,239,1) 40%, rgba(255,255,255,0) 100%);

    .fundo{
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        background-image: url('./img/helena.webp');
        background-repeat: no-repeat;
        background-size: 430px;
        background-position-x: right;
        background-position-y: bottom;
        height:100%;
        padding: 0 10%;
    }

    h1,h2{position:realtive; z-index:1;}

    h1{
        font-size: 3rem;
        font-weight: 300;
        max-width: 500px;
        color: #42707e;
        color: #7d0304;
        line-height: 3rem;
    }
    
    h2{
        color: #7d7e7f;
        margin: 2rem 0;
        font-size: 1.2rem;
        font-weight: 300;
    }

    @media screen and (max-width: 668px){
        padding-top: 5rem;
        height: 80vh;

      .fundo{
        padding: 2rem 2rem 3rem 2rem;
        background-image: url('./img/helena.webp');
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
        background: rgb(255,255,255);
        background: linear-gradient(0deg, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 50%);
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