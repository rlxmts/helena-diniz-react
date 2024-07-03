import { useEffect, useRef } from "react";
import styled from "styled-components";

const Div = styled.div`
    position: fixed;
    bottom: -100%;
    right: 10px;
    background-color: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0px 0px 10px #00000070;
    width: 300px;
    transition: 1s;

    span{
        display:block;
    }

    .saudacao{
        border-radius: 20px 20px 0 0;
        background-color: #43a737;
        padding: 1rem;

        span{
          color: #FFFFFF;
          font-family: "Arial", sans-serif;
        }
    }
    
    .info{
        padding: 1rem;

        .nome{
            font-weight:600;
        }

        .status{
            font-family: "Arial", sans-serif;
            font-weight: 300;
            margin-top: 5px;
        }
    }
`

const CaixaWpp = ()=> {

    const caixa = useRef(null)

    useEffect( ()=> {

        const tempo = setTimeout( ()=>{
            caixa.current.style.bottom = '70px';
        },5000)


        return() => clearTimeout(tempo);
    }, [])

    return(
        <Div ref={caixa}>
            <a 
            href="https://wa.me/351931662209"
            rel="noreferrer noopener"
            target="_blank"
            >
                <div className="saudacao">
                    <span>
                        Olá, vamos conversar?
                    </span>
                </div>
                <div className="info">
                    <span className="nome">Helena Diniz</span>
                    <span className="status">Disponivel</span>
                </div>
            </a>
        </Div>
    )
}

export default CaixaWpp;