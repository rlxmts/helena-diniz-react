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
`

const Menu = ()=> {
    return(
        <Nav className="cabecalho__nav">
            <ul className="lista">
                <li className="lista__item"><a href="https://wa.me/5521991527608">Home</a></li>
                <li className="lista__item"><a href="https://wa.me/5521991527608">Helena Diniz</a></li>
                <li className="lista__item"><a href="https://wa.me/5521991527608">Hipnoterapia</a></li>
                <li className="lista__item"><a href="https://wa.me/5521991527608">Especialidades</a></li>
                <li className="lista__item"><a href="https://wa.me/5521991527608">Depoimentos</a></li>
                <li className="lista__item"><a href="https://wa.me/5521991527608">Parceiros</a></li>
                <li className="lista__item"><a href="https://wa.me/5521991527608">Contato</a></li>
            </ul>
            <button>Atendimento</button>
        </Nav>
    )
}

export default Menu;