import './formulario.css';
import CampText from '../CampText/CampTex';
import List from '../List/index';
import Buttons from '../Button/index';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section>
            <form className='formulario' onSubmit={aoSalvar}>
                <span className='teste'>
                    <h2>Preenche os dados</h2>
                    <CampText value={nome} aoAlterado={value => setNome(value)} obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                    <CampText value={cargo} aoAlterado={value => setCargo(value)} obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                    <CampText value={imagem} aoAlterado={value => setImagem(value)} obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" />
                    <List value={time} aoAlterado={value => setTime(value)} obrigatorio={true} label="Time" itens={props.time}></List>
                    <Buttons>
                        Criar Card
                    </Buttons>
                </span>
            </form>
        </section>
    )
}

export default Formulario;