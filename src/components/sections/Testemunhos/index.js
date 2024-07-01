import styled from "styled-components";
import { Container } from "../../common/Container";
import Depoimentos from "../../common/Depoimentos";
import { useRef } from "react";

const SecaoTestemunhos = styled.section`
    background-color: #7d916a;
    position:relative;
    overflow: hidden;

    .testemunhos-container{
        display:flex;
        flex-direction: column;
        align-items: center;
        padding: 10rem 0;
    }
    
    .slide{
        width:100%;
        display:flex;
        transition: 1s;
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
        width: 20px;
        height:20px;
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
        transform: rotate(180deg);
    }
`

const Testemunhos = () => { 

    const depoimentos = [

        {
            depoimento: 'Obrigada, Dra Helena, pela empatia e todos atendimentos recebidos. Foram fundamentais, para o meu autoconhecimento e amadurecimento. Grata demais! Jamais esquecerei!!',
            nome: 'Vanuza Amaral'
        },
        {
            depoimento: 'Nós só percebemos como é importante cuidar da nossa saúde mental quando damos o primeiro passo. Profissional incrível!',
            nome: 'Matheus Cruz'
        },
        {
            depoimento: 'Obrigada, Dra Rebeca, pela empatia e todos atendimentos recebidos. Foram fundamentais, para o meu autoconhecimento e amadurecimento. Grata demais! Jamais esquecerei!!',
            nome: 'Alessandra Anzelman'
        },
        {
            depoimento: 'Obrigada, Dra Rebeca, pela empatia e todos atendimentos recebidos. Foram fundamentais, para o meu autoconhecimento e amadurecimento. Grata demais! Jamais esquecerei!!',
            nome: 'Kaique Pacheco'
        }
    ]

    const carrossel = useRef('null');

    // const iniciarSlider = ()=>{
    //     carrossel.current.scroll
    // }
    
    const passarProximoSlide = (e)=> {
        e.preventDefault();
        const larguraDisplay = window.innerWidth;
        const elementoCarrossel = carrossel.current;
        elementoCarrossel.style.transform += `translateX(-${larguraDisplay}px)`;
    }
    
    const passarAnteriorSlide = (e)=> {
        e.preventDefault();
        const larguraDisplay = window.innerWidth;
        const elementoCarrossel = carrossel.current;
        const posicaoElemento = elementoCarrossel.getBoundingClientRect().left; 
        const numero = larguraDisplay + posicaoElemento;

       
            elementoCarrossel.style.transform = `translateX(${numero}px)`;
       
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