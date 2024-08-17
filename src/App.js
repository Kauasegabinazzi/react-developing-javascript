import { useState } from 'react';
import Banner from './components/Banner/index';
import Formulario from './components/formulario/index';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdicionado}></Formulario>
    </div>
    
  );
}

export default App;
