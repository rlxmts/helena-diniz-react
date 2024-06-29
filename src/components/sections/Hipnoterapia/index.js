import styled from "styled-components"
import { Container } from "../../common/Container"
import { Titulo } from "../../common/Titulo"
import { Subtitulo } from "../../common/Subtitulo"

const Section = styled.section`

    .hipnoterapia-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .subtitulo{
        font-size: .9rem;
        width:100%;
        margin: 2rem 0;
    }

    span{
        display: block;
        height: 3px;
        width: 50px;
        background-color: #42707e;
        margin-top: .5rem;
    }
`

const ListaCards = styled.div`
    
`


const Hipnoterapia = () => {
    return(
        <Section>
            <Container className="hipnoterapia-container">
                <Titulo>Hipnoterapia</Titulo>
                <span></span>
                <Subtitulo className="subtitulo">
                    Estas são as ferramentas e linhas com que trabalho, de acordo com o perfil e os propósitos de cada pessoa.
                </Subtitulo>
                <ListaCards>

                </ListaCards>
            </Container>
        </Section>
    )
}

export default Hipnoterapia;