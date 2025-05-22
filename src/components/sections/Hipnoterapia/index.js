import styled from "styled-components";
import { Container } from "../../common/Container";
import { Titulo } from "../../common/Titulo";
import { Subtitulo } from "../../common/Subtitulo";
import Card from "../../common/Card";
import { Paragrafo } from "../../common/Paragrafo";
import { Botao } from "../../common/Botao";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Section = styled.section`

    background:rgba(244, 221, 255, 0.26);
    color: #FFF;

    .hipnoterapia-container{
    text-align: center;
        padding: 10rem 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .subtitulo{
        font-size: 1rem;
        width:100%;
        margin: 2rem 0 5rem 0;
        text-align: center;
    }

    .barrinha-titulo{
        display: block;
        height: 3px;
        width: 50px;
        background-color: #756fb3;
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
        max-width:100%;
        margin: .5rem;
    }

    p{
        color:#756fb3;
        text-align: center;
        max-width: 100%;
    }

    @media screen and (max-width: 668px){
        margin-top: 5rem;
    }

`

const Hipnoterapia = () => {

    useEffect( ()=>{
        Aos.init({
            duration:1000,
            once: true
        })
    },[])

    return(
        <Section id="hipnoterapia">
            <Container className="hipnoterapia-container">
                <Titulo data-aos="fade-up">Hipnoterapia</Titulo>
                <span data-aos="fade-up" className="barrinha-titulo"></span>
                <Subtitulo data-aos="fade-up" className="subtitulo">
                    Estas são as ferramentas e linhas com que trabalho, de acordo com o perfil e os propósitos de cada pessoa.
                </Subtitulo>
                <CardsContainer>
                    <Card
                        img='./img/autoconhecimento.svg'
                        alt=''
                        titulo="Autoconhecimento"
                        subtitulo="Desenvolvimento e aprimoramento."
                        texto="É uma dinâmica terapêutica que promove a transformação e a elaboração de novas possibilidades para questões antigas, novas e obscuras do indivíduo, com o objetivo de ativar o processo de desenvolvimento saudável do Ser no caminho do seu aprimoramento pessoal."
                    />
                    <Card
                        img='./img/planta.svg'
                        alt=''
                        titulo="Redução do Estresse e Ansiedade"
                        subtitulo="Encontre Paz Interior e Equilíbrio"
                        texto="A hipnoterapia oferece técnicas eficazes para diminuir o estresse e a ansiedade, ajudando a criar um estado de calma e equilíbrio. Por meio de sessões focadas, é possível aprender a lidar melhor com os desafios do dia a dia, promovendo uma vida mais tranquila e harmoniosa."
                    />
                    <Card
                        img='./img/coracao.svg'
                        alt=''
                        titulo="Melhoria dos Relacionamentos"
                        subtitulo="Fortaleça suas Conexões"
                        texto="Ao trabalhar questões emocionais e padrões de comportamento, a hipnoterapia pode fortalecer a comunicação e a compreensão entre pessoas. Esse processo facilita a resolução de conflitos e a construção de relacionamentos mais saudáveis e gratificantes."
                    />
                    <Card
                        img='./img/escalar.svg'
                        alt=''
                        titulo="Superação de Traumas"
                        subtitulo="Cure o Passado, Viva o Presente"
                        texto="A hipnoterapia é uma ferramenta poderosa para acessar e tratar traumas profundamente enraizados. Com uma abordagem segura e compassiva, ajuda a liberar memórias dolorosas e promove a cura emocional, permitindo que o indivíduo avance com mais leveza e confiança."
                    />
                    <Card
                        img='./img/foguete.svg'
                        alt=''
                        titulo="Potencialização de Habilidades"
                        subtitulo="Desbloqueie seu Máximo Potencial"
                        texto="A hipnoterapia pode desbloquear o potencial latente, ajudando a desenvolver e aprimorar habilidades pessoais e profissionais. Ao reforçar a autoconfiança e a motivação, é possível alcançar novos patamares de desempenho e realização em diversas áreas da vida."
                    />
                </CardsContainer>
                <Chamada>
                    <Subtitulo data-aos="fade-up">Atendimento online.</Subtitulo>
                    <Paragrafo data-aos="fade-up">Veja como você pode melhorar sua qualidade de vida e suas relações pessoais e profissionais.</Paragrafo>
                    <Botao 
                            data-aos="fade-up" 
                            className="bt" 
                            href='https://wa.me/351931662209'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Quero ser atendido pela Dra. Daniela
                        </Botao>
                </Chamada>
            </Container>
        </Section>
    )
}

export default Hipnoterapia;