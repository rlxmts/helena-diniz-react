import styled from "styled-components";
import { Container } from "../../common/Container";
import { Titulo } from "../../common/Titulo";
import { Paragrafo } from "../../common/Paragrafo";
import Formulario from "../../common/Formulario";

const SecaoContato = styled.section`
    background-color: #F1F1F1;
`

const Contato = ()=> {
    return(
        <SecaoContato>
            <Container>
                <div>
                    <Titulo>Contato</Titulo>
                    <Paragrafo>
                    Estou de portas e braços abertos para contribuir com o seu desenvolvimento e transformação por meio da terapia transpessoal, antroposófica e do processo biográfico. Agende sua sessão clicando nos botões espalhados pelo site ou, se preferir, utilize os campos abaixo ou o telefone.
                    </Paragrafo>
                    <Formulario />
                </div>
            </Container>
        </SecaoContato>
    )
}

export default Contato;