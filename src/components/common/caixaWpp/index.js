import { useEffect, useRef } from "react";
import styled from "styled-components";

const Div = styled.div`
    position: fixed;
    z-index: 999;
    bottom: -100%;
    right: 10px;
    background-color: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0px 0px 10px #00000070;
    width: 250px;
    transition: 1s;

    .container-wpp{
        position: relative;

        .bt-fechar{
            width: 30px;
            height: 30px;
            background-color:#43a737;
            background-image: url('./img/fechar.svg');
            background-size: 30px;
            background-position: center;
            background-repeat: no-repeat;
            display: block;
            position: absolute;
            top: -40px;
            right:0;
            font-size: 1px;
            border-radius:50%;
            cursor:pointer;
        }    
    }

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
            font-size: .8rem;
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

    const fecharCaixinha = ()=>{
        caixa.current.style.bottom = '-100%';
    }

    return(
        <Div ref={caixa}>
            <div className="container-wpp">
                <span className="bt-fechar" onClick={fecharCaixinha}>Fechar</span>
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
            </div>
        </Div>
    )
}

export default CaixaWpp;