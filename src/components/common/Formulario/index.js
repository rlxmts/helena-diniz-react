import styled from "styled-components";
import Input from "../Input"
import { Botao } from "../Botao";
import { Textarea } from "../Textarea";

const SecaoFormulario = styled.form`
    display:flex;
    flex-direction: column;
    max-width: 500px;
`

const Formulario = ()=> {
    return(
        <SecaoFormulario>
            <Input nome="Nome" placeholder="Digite seu nome..." obrigatorio={true} id="Nome" tipo='text'/>
            <Input nome="Telefone" placeholder="Digite seu Telefone..." obrigatorio={true} id="Telefone" tipo="tel"/>
            <label htmlFor="mensagem">Mensagem</label>
            <Textarea required={false} placeholder="Digite sua mensagem..." id="mensagem" rows="4" />
            <Botao>Enviar Mensagem</Botao>
        </SecaoFormulario>
    )
}

export default Formulario;