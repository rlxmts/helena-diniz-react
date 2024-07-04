import styled from "styled-components";
import { Botao } from "../../common/Botao";

const Nav = styled.nav`
    position: fixed;
    right: -20vw;
    top: 0;
    height: 100vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 2px #0006;
    background-color: #FFF;
    transition: 1s;

    ul{
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: .7rem;
    }

    a{
        font-family: "Poppins";
        font-size: 12px;
        text-transform: uppercase;
    }

    .bt{
        margin-top: 1rem;
        max-width:150px;
        padding: .5rem;
        cursor:pointer;
    }

    @media screen and (max-width: 768px){
        width: 80vw;
        right: -80vw ;
    }   
`

const paginas = [
    {
        nome: 'Home',
        link: '/#inicio'
    },
    {
        nome: 'Sobre',
        link: '/#sobre'
    },
    {
        nome: 'Hipnoterapia',
        link: '/#hipnoterapia'
    },
    {
        nome: 'Especialidades',
        link: '/#especialidades'
    },
    {
        nome: 'Contato',
        link: '/#contato'
    }
];


const Menu = ({referencia, aoClicar})=> {
    return(
        <Nav ref={referencia}>
            <ul className="lista">
                {paginas.map( (item) => {
                    return(
                        <li key={item.nome} onClick={aoClicar}>
                            <a href={item.link}>
                            {item.nome}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <Botao 
                className="bt" 
                href='https://wa.me/351931662209'
                target="_blank"
                rel="noopener noreferrer"
            >
                Atendimento
            </Botao>
        </Nav>
    )
}

export default Menu;