import Banner from "./components/layout/Banner";
import Cabecalho from "./components/layout/Cabecalho";
import Hipnoterapia from "./components/sections/Hipnoterapia";
import Sobre from "./components/sections/Sobre";
import Testemunhos from "./components/sections/Testemunhos";
import Motivos from "./components/sections/Motivos";
import Citacao from "./components/sections/Citacao";
import Contato from "./components/layout/Contato";
import Rodape from "./components/layout/Rodape";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";


const ContainerApp = styled.div`
    position:relative;
    transition: 1s;

  .cabecalho-ativo{
        background-color: #FFF;
        box-shadow: 0px 0px 10px #00000015; 
    }
`

function App() { 
  
  const cabecalho = useRef(null);
  const moverApp = useRef(null);
  const menu = useRef(null);
  const barrinhas = useRef(null);

  const [addClasse, setAddClasse] = useState('');
  const [mover, setMover] = useState('0');
  const [abrirMenu, setAbrirMenu] = useState('-20vw');

  useEffect( ()=> {

    const ativarMenu = ()=> {
      window.scrollY > 0 ? setAddClasse('cabecalho-ativo') : setAddClasse('');
    }
    window.addEventListener('scroll', ativarMenu);
    
    return () => {
      window.removeEventListener('scroll', ativarMenu);
    };

  }, [])
  
  const abrirOuFecharMenu = ()=> {
    if(mover === '0'){
      setMover('-20vw');
      setAbrirMenu('0');
    }else{
      setMover('0');
      setAbrirMenu('-20vw');
    }
  }
      
   useEffect( ()=>{
    
    moverApp.current.style.left = mover;
    menu.current.style.right = abrirMenu;

  }, [mover, abrirMenu]);



  return (
    <ContainerApp ref={moverApp}>
      <Cabecalho 
        referencia={cabecalho} 
        classe={addClasse} 
        aoClicar={abrirOuFecharMenu} 
        menu={menu}
        refBarrinha={barrinhas}
      />
      <Banner />
      <Sobre />
      <Hipnoterapia />
      <Motivos />
      <Testemunhos />
      <Citacao />
      <Contato />
      <Rodape />
    </ContainerApp>
  );
}

export default App;
