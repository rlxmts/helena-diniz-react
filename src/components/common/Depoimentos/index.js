import styled from "styled-components";

const CardDepoimentos = styled.div`
    
    flex:none;
    width: 100%;
    display:grid;
    place-items: center;
    padding: 1.5rem;

    q{
    font-size: 2rem;
    margin-bottom: 2rem;
    }
        
    q,p{
    text-align: center;
    color: #FFF;
    max-width: 800px;
    display:block;
    }

    p:before{
        content: '- ';
    }

    @media screen and (max-width: 668px){

        padding:1rem;

        q{
            font-size: 1.2rem !important;
        }
    }
`

const Depoimentos = ({nome , depoimento})=> {
    return(
        <CardDepoimentos>            
            <q>{depoimento}</q>
            {/* <span className="barrinha"></span> */}
            <p>{nome}</p>
        </CardDepoimentos>
    )
}

export default Depoimentos;