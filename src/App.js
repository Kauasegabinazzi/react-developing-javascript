import Banner from './components/Banner/index';
import CampText from './components/CampText/CampTex';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampText label="Nome" />
      <CampText label="Cargo" />
      <CampText label="Imagem" />
    </div>
    
  );
}

export default App;
