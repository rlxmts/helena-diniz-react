import styled from "styled-components";
import Logo from "../../common/Logo";
import Menu from "../../sections/Menu";

const CabecalhoSite = styled.header`
    padding: 2rem ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9999;
    transition: .5s;

    @media screen and (max-width: 768px){
        padding: 2rem 1rem 2rem 2rem;
    }

    .cabecalho-ativo{
        background-color: #FFF;
        box-shadow: 0px 0px 10px #00000015; 
    }

    .container-barrinhas{
        width: 30px;
        height: 30px;
        display: grid;
        place-items: center;
        cursor:pointer;
        position: relative;
        z-index: 999;
        
        &::before{
            transition: 1s;
            content: '';
            display:block;
            width: 20px;
            height: 2px;
            background-color: #000;
            position: absolute;
            top: 8px;
        }
        
        &::after{
            transition: 1s;
            content: '';
            display:block;
            width: 20px;
            height: 2px;
            background-color: #000;
            position: absolute;
            bottom: 8px;
        }
    }
    
    .barrinhas{
        display: block;
        background-color: #000;
        height: 2px;
        width: 20px;
        position: relative;
        transition: 1s;
        
    }

    .barrinha-ativa{
        display:none;
    }
`

const Cabecalho = ({referencia, classe, aoClicar, menu, classes, classesBotao})=> {
    return(
        <CabecalhoSite className={classe} ref={referencia}>
                <Logo />        
                <div className={classesBotao} onClick={aoClicar}>
                    <span className={classes}/>
                </div>
                <Menu referencia={menu} />
        </CabecalhoSite>
    )
}

export default Cabecalho;