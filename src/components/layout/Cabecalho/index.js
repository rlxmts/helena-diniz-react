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

    return(
        <CabecalhoSite className="cabecalho">
                <Logo />        
                <Menu />
                <div>
                    <span className='barrinhas' />
                </div>
        </CabecalhoSite>
    )
}

export default Cabecalho;