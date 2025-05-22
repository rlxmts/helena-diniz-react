import styled from "styled-components";

export const Botao = styled.a`
    // background-color: #42707e;
    background-color: #756fb3;
    color: #FFF;
    text-transform: uppercase;
    font-size: 12px;
    border-radius: 20px;
    padding: .7rem 1rem;
    border: none;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    letter-spacing: 1px;
    display: block;
    width: 100%;
    max-width: 250px;
    text-align: center;
    cursor: pointer;
    border: 1px solid transparent;
    margin:${(props) => props.margin || '1rem auto'};
    transition: .7s;

    &:hover{
    background-color: #FFF;
    color:#42707e;
    color:#756fb3;
    border: 1px solid #42707e;
    border: 1px solid #756fb3;
    }
`