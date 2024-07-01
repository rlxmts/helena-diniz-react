import Banner from "./components/layout/Banner";
import Cabecalho from "./components/layout/Cabecalho";
import Hipnoterapia from "./components/sections/Hipnoterapia";
import Sobre from "./components/layout/Sobre";
import Citacao from "./components/sections/Citacao";
// import Testemunhos from "./components/layout/Testemunhos";
import Motivos from "./components/layout/Motivos";

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Banner />
      <Sobre />
      <Hipnoterapia />
      <Motivos />
      {/* <Testemunhos /> */}
      <Citacao />
    </div>
  );
}

export default App;
