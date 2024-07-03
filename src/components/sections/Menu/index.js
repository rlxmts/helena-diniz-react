import styled from "styled-components";

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

    button{
        margin-top: 1rem;
        border-radius: 20px;
        padding: .3rem .5rem;
        border: 1px solid #000;
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
        link: '/'
    },
    {
        nome: 'Sobre',
        link: '/'
    },
    {
        nome: 'Hipnoterapia',
        link: '/'
    },
    {
        nome: 'Especialidades',
        link: '/'
    },
    {
        nome: 'Contato',
        link: '/'
    }
];


const Menu = ({referencia})=> {
    return(
        <Nav ref={referencia}>
            <ul className="lista">
                {paginas.map( (item) => {
                    return(
                        <li key={item.nome}>
                            <a href={item.link}>
                            {item.nome}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <button>Atendimento</button>
        </Nav>
    )
}

export default Menu;