import styled from "styled-components"
import Logo from "../Logo"
import Menu from "../Menu"
import { Botao } from "../Botao"

const CabecalhoSite = styled.header`

`

const Cabecalho = ()=> {
    return(
        <CabecalhoSite class="cabecalho">
            <Logo />        
            <Menu />
            <Botao>Agende sua consulta</Botao>
        </CabecalhoSite>
    )
}

export default Cabecalho;