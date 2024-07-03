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
import classNames from "classnames";
 
const ContainerApp = styled.div`
    overflow: hidden;
    position:relative;
    transition: 1s;
    left: 0;

  .cabecalho-ativo{
        background-color: #FFF;
        box-shadow: 0px 0px 10px #00000015; 
        padding: 1rem 2rem;
    }

  .barrinha-ativo{
    transform: translateX(10px);
    opacity:0;
  }

  .barrinhas-ativo::before{
    transform: rotate(45deg);
    top:14px;
  }
  
  .barrinhas-ativo::after{
    transform: rotate(-45deg);
    bottom:14px;
  }
`

function App() { 
  
  const cabecalho = useRef(null);
  const menu = useRef(null);
  const AppContainer = useRef(null);

  const [addClasse, setAddClasse] = useState('');
  const [classeApp, setClasseApp] = useState('');
  const [classBarrinha, setClassBarrinha] = useState('');
  const [barrinhas, setBarrinhas] = useState('');

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
    if(!AppContainer.current.classList.contains('app-recolhido')){
      setClasseApp('app-recolhido');
      setClassBarrinha('barrinha-ativo');
      setBarrinhas('barrinhas-ativo');
      menu.current.classList.add('movimentar');
    }else{
      menu.current.classList.remove('movimentar');
      setClasseApp('');
      setClassBarrinha('');
      setBarrinhas('');
    }
  }
      

  return (
    <ContainerApp className={classNames(classeApp)} ref={AppContainer} >
      <Cabecalho 
        referencia={cabecalho} 
        classe={addClasse} 
        aoClicar={abrirOuFecharMenu} 
        menu={menu}
        classes={ classNames('barrinhas', classBarrinha)}
        classesBotao={ classNames('container-barrinhas', barrinhas)}
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
