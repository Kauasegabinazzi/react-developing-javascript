import './formulario.css';
import CampText from '../CampText/CampTex';

const Formulario = () => {
    return (
        <section>
            <form className='formulario'>
                <form className='teste'>
                <h2>Preenche os dados</h2>
                <CampText label="Nome" placeholder="Digite seu nome" />
                <CampText label="Cargo" placeholder="Digite seu cargo" />
                <CampText label="Imagem" placeholder="Digite o endereço da imagem" />
                </form>
            </form>
        </section>
    )
}

export default Formulario;