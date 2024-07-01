import Banner from "./components/layout/Banner";
import Cabecalho from "./components/layout/Cabecalho";
import Hipnoterapia from "./components/sections/Hipnoterapia";
import Sobre from "./components/layout/Sobre";
import Testemunhos from "./components/sections/Testemunhos";
import Motivos from "./components/sections/Motivos";
import Citacao from "./components/sections/Citacao";

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Banner />
      <Sobre />
      <Hipnoterapia />
      <Citacao />
      <Motivos />
      <Testemunhos />
    </div>
  );
}

export default App;
