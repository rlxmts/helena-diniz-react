import styled from "styled-components";

const Botao = styled.a`
      
    position: fixed;
    bottom: 10px;
    right: 10px;
    height: 50px;
    width: 50px;
    display:flex;
    font-size: 1px;
    background-color: #43a737;
    border-radius: 50%;
    padding: 10px;
    img{
      width: 100%;
    }
`

const BotaoWpp = ()=> {
    return(
        <Botao 
        className="botao-wpp"
        href="https://wa.me/351931662209"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src="./img/wpp.png" alt=""></img>
        whatsapp
      </Botao>
    )
}

export default BotaoWpp;