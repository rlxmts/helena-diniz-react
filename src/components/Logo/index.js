import styled from "styled-components";

const LogoBox = styled.a`

    padding-left: 3rem;
    display:block;
    position: relative;
    cursor: pointer;
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
    span{
        display: block;
        font-family: "Quicksand";
        font-weight: 500;
        color: #42707e;
        font-size:1rem;
        letter-spacing: 2px;
        text-transform: uppercase;
    }
`

const Logo = ()=> {
    return(
        <LogoBox class="link-logo">
                <h1 class="logo">Helena Diniz
                    <span>Hipnoterapia</span>
                </h1>
        </LogoBox>
    )
}

export default Logo;