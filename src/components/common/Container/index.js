import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: ${(props) => props.padding || '10rem 1.5rem'};

    @media screen and (max-width: 768px){
        padding:${(props) => props.mobilePadding || '5rem 1.5rem'};
    }
`