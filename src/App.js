import Banner from "./components/layout/Banner";
import Cabecalho from "./components/layout/Cabecalho";
import Hipnoterapia from "./components/sections/Hipnoterapia";
import Sobre from "./components/sections/Sobre";
import Testemunhos from "./components/sections/Testemunhos";
import Motivos from "./components/sections/Motivos";
import Citacao from "./components/sections/Citacao";
import Contato from "./components/layout/Contato";
import Rodape from "./components/layout/Rodape";

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Banner />
      <Sobre />
      <Hipnoterapia />
      <Motivos />
      <Testemunhos />
      <Citacao />
      <Contato />
      <Rodape />
    </div>
  );
}

export default App;
