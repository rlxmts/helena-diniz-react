import styled from "styled-components"
import { Container } from "../../common/Container"
import { Titulo } from "../../common/Titulo"
import { Subtitulo } from "../../common/Subtitulo"
import Card from "../../common/Card"
import { Paragrafo } from "../../common/Paragrafo"
import { Botao } from "../../common/Botao"

const Section = styled.section`

    background-color: #719aac;
    color: #FFF;

    h2{
        color:#FFF;
    }

    .hipnoterapia-container{
        padding: 10rem 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .subtitulo{
        font-size: 1rem;
        width:100%;
        margin: 2rem 0 5rem 0;
        color: #FFF;
        text-align: center;
    }

    .barrinha-titulo{
        display: block;
        height: 3px;
        width: 50px;
        background-color: #FFF;
        margin-top: .5rem;
    }

    @media screen and (max-width: 668px){
        .hipnoterapia-container{
            padding: 5rem 1.5rem;
        }

        .subtitulo{
            margin: 1rem 0 2rem 0;
        }
    }
`

const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5rem;
    justify-content: center;
`

const Chamada = styled.div`
    width:100%;
    max-width: 800px;
    border-top: 1px solid #ffffff24;
    padding: 2rem;
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    align-items:center;

    h3{
        text-align: center;
        color: #FFF;
        max-width:100%;
    }

    p{
        color: #FFF;
        text-align: center;
        max-width: 100%;
    }

    @media screen and (max-width: 668px){
        margin-top: 5rem;
    }

`

const Hipnoterapia = () => {
    return(
        <Section>
            <Container className="hipnoterapia-container">
                <Titulo>Hipnoterapia</Titulo>
                <span className="barrinha-titulo"></span>
                <Subtitulo className="subtitulo">
                    Estas são as ferramentas e linhas com que trabalho, de acordo com o perfil e os propósitos de cada pessoa.
                </Subtitulo>
                <CardsContainer>
                    <Card
                        img='./img/sol.svg'
                        alt=''
                        titulo="Autoconhecimento"
                        subtitulo="Desenvolvimento e aprimoramento."
                        texto="É uma dinâmica terapêutica que promove a transformação e a elaboração de novas possibilidades para questões antigas, novas e obscuras do indivíduo, com o objetivo de ativar o processo de desenvolvimento saudável do Ser no caminho do seu aprimoramento pessoal."
                    />
                    <Card
                        img='./img/sol.svg'
                        alt=''
                        titulo="Autoconhecimento"
                        subtitulo="Desenvolvimento e aprimoramento."
                        texto="É uma dinâmica terapêutica que promove a transformação e a elaboração de novas possibilidades para questões antigas, novas e obscuras do indivíduo, com o objetivo de ativar o processo de desenvolvimento saudável do Ser no caminho do seu aprimoramento pessoal."
                    />
                    <Card
                        img='./img/sol.svg'
                        alt=''
                        titulo="Autoconhecimento"
                        subtitulo="Desenvolvimento e aprimoramento."
                        texto="É uma dinâmica terapêutica que promove a transformação e a elaboração de novas possibilidades para questões antigas, novas e obscuras do indivíduo, com o objetivo de ativar o processo de desenvolvimento saudável do Ser no caminho do seu aprimoramento pessoal."
                    />
                    <Card
                        img='./img/sol.svg'
                        alt=''
                        titulo="Autoconhecimento"
                        subtitulo="Desenvolvimento e aprimoramento."
                        texto="É uma dinâmica terapêutica que promove a transformação e a elaboração de novas possibilidades para questões antigas, novas e obscuras do indivíduo, com o objetivo de ativar o processo de desenvolvimento saudável do Ser no caminho do seu aprimoramento pessoal."
                    />
                    <Card
                        img='./img/sol.svg'
                        alt=''
                        titulo="Autoconhecimento"
                        subtitulo="Desenvolvimento e aprimoramento."
                        texto="É uma dinâmica terapêutica que promove a transformação e a elaboração de novas possibilidades para questões antigas, novas e obscuras do indivíduo, com o objetivo de ativar o processo de desenvolvimento saudável do Ser no caminho do seu aprimoramento pessoal."
                    />
                </CardsContainer>
                <Chamada>
                    <Subtitulo>Sessões semanais on-line ou presenciais com 1 hora de duração.</Subtitulo>
                    <Paragrafo>Veja como você pode melhorar sua qualidade de vida e suas relações pessoais e profissionais.</Paragrafo>
                    <Botao>Agende Seu Atendimento</Botao>
                </Chamada>
            </Container>
        </Section>
    )
}

export default Hipnoterapia;