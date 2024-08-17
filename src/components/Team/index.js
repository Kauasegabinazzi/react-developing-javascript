import '../Team/team.css';

const Team = (props) => {

    const css = { backgroundColor: props.corSecundaria }
    const css2 = { borderColor: props.corPrimaria, borderStyle: 'solid' };
    return (
        <section className='team' style={css}>
            <h3 style={css2}>{props.nome}</h3>
        </section>
    )
}

export default Team;