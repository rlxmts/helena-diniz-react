import styled from "styled-components";
import { Botao } from "../../common/Botao";
import { Container } from "../../common/Container";

const Section = styled.section`

    height: 100vh;
    position: relative;
    background: rgb(218,232,240);
    background: linear-gradient(275deg, rgba(218,232,240,1) 50%, rgba(223,234,241,1) 100%);

    .fundo{
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        background-image: url('./img/medica.webp');
        background-repeat: no-repeat;
        background-size: 500px;
        background-position-x: right;
        background-position-y: bottom;
        height:100%;
        padding: 0 10%;
    }

    h1{
        font-size: 3rem;
        font-weight: 300;
        max-width: 500px;
        color: #42707e;
        line-height: 3rem;
    }
        h2{
            color: #7d7e7f;
            margin: 2rem 0;
            font-size: 1.2rem;
            font-weight: 300;
        }
`

const Div = styled.div`

    width: fit-content;

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
    return(
        <Section>
            <Container className="fundo">
                    <h1>Autoconhecimento e Autodesenvolvimento</h1>
                    <h2>Terapia Antroposófica, Transpessoal e Mindfulness</h2>
                    <Div>
                        <Botao href="https://">Agende seu Atendimento</Botao>
                        <span>Presencial ou Online.</span>
                    </Div>
            </Container>
        </Section>
    )
}

export default Banner;