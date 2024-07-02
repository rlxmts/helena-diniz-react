import styled from "styled-components";
import Logo from "../../common/Logo";
import Menu from "../../sections/Menu";
import { useRef, useState } from "react";

const CabecalhoSite = styled.header`
    padding: 2rem ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9999;

    .container-barrinhas{
        width: 30px;
        height: 30px;
        display: grid;
        place-items: center;
        cursor:pointer;
        position: relative;
        z-index: 999;
    }
    
    .barrinhas{
        display: block;
        background-color: #000;
        height: 2px;
        width: 20px;
        position: relative;

        &::before{
            content: '';
            display:block;
            width: 20px;
            height: 2px;
            background-color: #000;
            position: absolute;
            top: 5px;
        }
        
        &::after{
            content: '';
            display:block;
            width: 20px;
            height: 2px;
            background-color: #000;
            position: absolute;
            bottom: 5px;
        }
    }

    .barrinha-ativa{

        display:none;
    }
`

const Cabecalho = ()=> {

    const menu = useRef(null);
    const [posicaoEl, setPosicaoEl] = useState('0');

    const abrirMenu = ()=> {
        if(posicaoEl === '0'){
            setPosicaoEl('-20vw')
        }else{
            setPosicaoEl('0')
        }
        menu.current.style.right = `${posicaoEl}`;
    }

    return(
        <CabecalhoSite className="cabecalho">
                <Logo />        
                <div className="container-barrinhas" onClick={abrirMenu}>
                    <span className='barrinhas' />
                </div>
                <Menu referencia={menu} />
        </CabecalhoSite>
    )
}

export default Cabecalho;