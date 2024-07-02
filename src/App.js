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
import { useRef, useState } from "react";


const ContainerApp = styled.div`
  .cabecalho-ativo{
        background-color: #FFF;
        box-shadow: 0px 0px 10px #00000015; 
    }
`

function App() {

  
  const cabecalho = useRef(null);
  const [addClasse, setAddClasse] = useState('');
  
  window.addEventListener('scroll', ()=> {
    
      if(window.scrollY > 0){
        setAddClasse('cabecalho-ativo');
      }else{
        setAddClasse('');
      };
  })

  const [posicaoEl, setPosicaoEl] = useState('0');
    
  const abrirOuFecharMenu = (menu)=> {
        if(posicaoEl === '0'){
            setPosicaoEl('-20vw')
        }else{
            setPosicaoEl('0')
        }
        menu.current.style.right = `${posicaoEl}`;
  }

  return (
    <ContainerApp className="App">
      <Cabecalho 
        referencia={cabecalho} 
        classe={addClasse} 
        aoClicar={abrirOuFecharMenu} 
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
