import Banner from './components/Banner/index';
import CampText from './components/CampText/CampTex';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampText label="Nome" placeholder="Digite seu nome" />
      <CampText label="Cargo" placeholder="Digite seu cargo" />
      <CampText label="Imagem" placeholder="Digite o endereço da imagem" />
    </div>
    
  );
}

export default App;
