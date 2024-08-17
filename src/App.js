import { useState } from 'react';
import Banner from './components/Banner/index';
import Formulario from './components/formulario/index';
import Team from '../src/components/Team/index';

function App() {

  const Teams = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
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
      <Formulario time={Teams.map(team => team.nome)} aoColaboradorCadastrado={aoNovoColaboradorAdicionado}></Formulario>
      {Teams.map(team => <Team 
      key={team.nome}
      nome={team.nome}
      corPrimaria={team.corPrimaria} 
      corSecundaria={team.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time == team.nome)}></Team> )}
    </div>

  );
}

export default App;
