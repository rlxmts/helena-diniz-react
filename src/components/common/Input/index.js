import styled from "styled-components";

const CampoInput = styled.input`
    border:none;
    background-color: #FFF;
    padding: .5rem;
    outline: none;
    margin: .5rem 0 1rem 0;
    box-shadow: 0px 0px 5px #00000014;
`

const Input = ({placeholder, nome, obrigatorio, tipo})=> {
    return(
        <>
            <label htmlFor={nome}> {nome} </label>
            <CampoInput id={nome} placeholder={placeholder} required={obrigatorio} type={tipo} />
        </>
    )
}

export default Input;