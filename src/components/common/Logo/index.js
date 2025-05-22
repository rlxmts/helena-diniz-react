import styled from "styled-components";

const LogoBox = styled.a`

    // padding-left: 3rem;
    display:block;
    position: relative;
    cursor: pointer;
    max-width: 300px;

    // &::before{
    //     content: '';
    //     display: block;
    //     height: 40px;
    //     width: 40px;
    //     position: absolute;
    //     top: 40%;
    //     transform: translateY(-50%);
    //     left: 0;
    //     background-image: url('./img/logo.png');
    //     background-size: contain;
    // }

    h1{
        font-family: "Cormorant SC";
        font-weight: 300;
        // color: #42707e;
        color: #756fb3;
        font-size: 2rem;

        line-height: 1.3rem;
    }

    @media screen and (max-width: 668px){

        
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
const LogoImg = styled.img`
    width:100%;
    max-width: 200px;
`

const Logo = ()=> {

    const subirAoTop = ()=> {
        window.scrollTo(0, 0);
    }

    return(
        <LogoBox onClick={subirAoTop}>
                <LogoImg src="./img/logodra.png" />
        </LogoBox>
    )
}

export default Logo;