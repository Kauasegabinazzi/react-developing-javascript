import '../Team/team.css';
import Colaborador from '../Colaborador/index';

const Team = (props) => {

    const css = { backgroundColor: props.corSecundaria }
    const css2 = { borderColor: props.corPrimaria, borderStyle: 'solid' };
    return (
        <section className='team' style={css}>
            <h3 style={css2}>{props.nome}</h3>
            <Colaborador></Colaborador>
        </section>
    )
}

export default Team;