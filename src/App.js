import { useState } from 'react';
import Banner from './components/Banner/index';
import Formulario from './components/formulario/index';
import Team from '../src/components/Team/index';

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
      <Team nome="Programação"></Team>
      <Team nome="Front-End"></Team>
      <Team nome="Data Science"></Team>
    </div>
    
  );
}

export default App;
