import styled from "styled-components";

export const Subtitulo = styled.h3`
    font-size: 2rem;
    width:100%;
    max-width: 500px;
    margin-bottom: ${(props) => props.marginBottom || '2rem'};;

    @media screen and (max-width: 768px){
        text-align: center;
        font-size: 1.5rem;
    }
`