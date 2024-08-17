import '../Team/team.css';
import Colaborador from '../Colaborador/index';

const Team = (props) => {

    const css = { backgroundColor: props.corSecundaria }
    const css2 = { borderColor: props.corPrimaria, borderStyle: 'solid' };

    return (
        <section className='team' style={css}>
            <h3 style={css2}>{props.nome}</h3>
            <div className='colaboradoes'>{props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}></Colaborador>)}</div>
        </section>
    )
}

export default Team;