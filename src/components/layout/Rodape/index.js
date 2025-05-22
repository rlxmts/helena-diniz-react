import styled from "styled-components";
import { Container } from "../../common/Container";

const SecaoRodape = styled.footer`
    background-color: #42707e;
    background-color: #756fb3;
    padding-top:2rem;
    .container-rodape{
        padding: 1rem;
        text-align: center;      
        span, a{
            color:#FFF;
        }

        .creditos{
            margin: 1rem;
            display:block;
        }

        .creditos-logo{
            width: 60px;
        }
    }
`

const Rodape = () => {
    return(
        <SecaoRodape>
            <Container className="container-rodape">
                <span> &copy; Copyright - Todos os direitos reservados.</span>
                <div>
                    <a 
                        href="https://horbiti.com.br" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="creditos"
                    >
                        Feito por: <img  className='creditos-logo' src='./img/horbiti.png' alt="Horbiti"></img>
                    </a>
                </div>
            </Container>
        </SecaoRodape>
    )
}

export default Rodape;