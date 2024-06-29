import Banner from "./components/layout/Banner";
import Cabecalho from "./components/layout/Cabecalho";
import Sobre from "./components/layout/Sobre";
import Hipnoterapia from "./components/sections/Hipnoterapia";

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Banner />
      <Sobre />
      <Hipnoterapia />
    </div>
  );
}

export default App;
