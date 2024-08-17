import { useState } from 'react';
import Banner from './components/Banner/index';
import Formulario from './components/formulario/index';
import Team from '../src/components/Team/index';

function App() {

  const Teams = [
    {
      nome: 'Programação',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Front-End',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Data Science',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Devops',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'UX e Design',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Mobile',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '',
      corSecundaria: ''
    }
  ]

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
