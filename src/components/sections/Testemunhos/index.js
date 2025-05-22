import styled from "styled-components";
import { Container } from "../../common/Container";
import Depoimentos from "../../common/Depoimentos";
import { useRef } from "react";

const SecaoTestemunhos = styled.section`
    background-color: #756fb3;
    position:relative;
    overflow: hidden;

    .testemunhos-container{
        display:flex;
        flex-direction: column;
        align-items: center;
        padding: 10rem 0;
        max-width: 100%;
        position: relative;
    }
    
    .slide{
        width:100%;
        overflow-x: scroll;
        scroll-behavior: smooth;
        display:flex;
    }

    .slide::-webkit-scrollbar{
        display:none;
    }

    button{
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        color: transparent;
        border:none;
        width: 30px;
        height:30px;
        border-radius: 50%;
        background-color: transparent;
        text-align:center;
        cursor: pointer;

        img{
            width:100%;
        }
    }

        
    .button-prox{
        right: 20px;
    }
        
    .button-ante{
        left: 20px;
        transform: translateY(-50%) rotate(180deg);
    }

    @media screen and (max-width: 668px){
        .testemunhos-container{
            padding: 5rem 0;
        }

        .button-prox{
            right: -5px;
        }
        .button-ante{
           left: -5px;
        }
    }
`

const Testemunhos = () => { 

    const depoimentos = [

        {
            depoimento: 'Nunca imaginei que a intolerância alimentar estava por trás do meu cansaço e da minha ansiedade. Hoje tenho mais disposição do que nunca.',
            nome: ''
        },
        {
            depoimento: 'Com a Dra. Daniela, eu consegui emagrecer 12kg de forma segura e sem passar fome. É outro nível de cuidado.',
            nome: ''
        },
        {
            depoimento: 'Ela é a primeira médica que realmente me escutou e olhou para meu caso por inteiro.',
            nome: ''
        }
    ]

    const carrossel = useRef('null');
    
    const passarProximoSlide = (e)=> {
        e.preventDefault();
        passaScroll();
    }
    
    const passarAnteriorSlide = (e)=> {
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
    }

    const passaScroll = ()=> {
        carrossel.current.scrollLeft += carrossel.current.offsetWidth;
    }

    return(
        <SecaoTestemunhos>
            <Container className="testemunhos-container">
                <div className="slide" ref={carrossel}>
                    {depoimentos.map( (item)=> {
                        return(
                            <Depoimentos nome={item.nome} depoimento={item.depoimento} key={item.nome}/>
                        )
                    })}
                </div>

                <button className="button-prox" onClick={passarProximoSlide}><img src="./img/seta.svg" alt="Ver proximo depoimento"  /></button>
                <button className="button-ante" onClick={passarAnteriorSlide}><img src="./img/seta.svg" alt="Ver depoimento anterior" /></button>
            </Container>
        </SecaoTestemunhos>
    )
}   
export default Testemunhos;