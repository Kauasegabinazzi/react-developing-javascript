import './formulario.css';
import CampText from '../CampText/CampTex';
import List from '../List/index';

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        ' Inovação e Gestão'
        ]

    return (
        <section>
            <form className='formulario'>
                <span className='teste'>
                <h2>Preenche os dados</h2>
                <CampText label="Nome" placeholder="Digite seu nome" />
                <CampText label="Cargo" placeholder="Digite seu cargo" />
                <CampText label="Imagem" placeholder="Digite o endereço da imagem" />
                <List label="Time" itens={times}></List>
                </span>
            </form>
        </section>
    )
}

export default Formulario;