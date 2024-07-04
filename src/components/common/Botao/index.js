import styled from "styled-components";

export const Botao = styled.a`
    background-color: #42707e;
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
    transition: .7s;
    border: 1px solid transparent;
    margin: 1rem auto;

    &:hover{
    background-color: #FFF;
    color:#42707e;
    border: 1px solid #42707e;
    }
`