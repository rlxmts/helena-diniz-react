import styled from "styled-components";

const LogoBox = styled.a`

    padding-left: 3rem;
    display:block;
    position: relative;
    cursor: pointer;
    max-width: 300px;

    &::before{
        content: '';
        display: block;
        height: 40px;
        width: 40px;
        position: absolute;
        top: 40%;
        transform: translateY(-50%);
        left: 0;
        background-image: url('./img/logo.png');
        background-size: contain;
    }

    h1{
        font-family: "Cormorant SC";
        font-weight: 300;
        color: #42707e;
        font-size: 2rem;

        line-height: 1.3rem;
    }

    @media screen and (max-width: 668px){

        padding-left:2rem;
        
        &::before{
        
            top:50%;
            width:30px;
            height:30px;
        }

        h1{
            font-size:1.5rem;
        }
    }
`

const Span = styled.span`
    display: block;
    font-family: "Quicksand";
    font-weight: 500;
    color: #42707e;
    font-size: .8rem;
    margin: 3px;
    letter-spacing: 4px;
    text-transform: uppercase;


    @media screen and (max-width: 668px){
        font-size: .6rem;
    }
`

const Logo = ()=> {
    return(
        <LogoBox>
                <h1>Helena Diniz</h1>
                <Span>Hipnoterapeuta</Span>
        </LogoBox>
    )
}

export default Logo;