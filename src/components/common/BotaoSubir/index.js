import styled from "styled-components";

const Botao = styled.div`
    display: block;
    height: 30px;
    width: 30px;
    background-color: #001f3f;
    position: fixed;
    bottom: 70px;
    right: 20px;
    color: transparent;
    font-size: 1px;
    border-radius: 3px;
    box-shadow: 0px 0px 3px #00000070;
    background-image: url('./img/seta.svg');
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate(-90deg) translateX(-100px);
    transition: 1s;
    opacity: 0;
    cursor: pointer;
    z-index: 99;
`

const BotaoSubir = ({referencia, classes})=>{

    const subirAoTopo = ()=> {
        window.scrollTo(0, 0);
    }

    return(
        <Botao 
            ref={referencia} 
            className={classes}
            onClick={subirAoTopo}
        >
            botão subir ao topo.
        </Botao>
    )
}

export default BotaoSubir;