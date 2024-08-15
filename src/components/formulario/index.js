import './formulario.css';
import CampText from '../CampText/CampTex';
import List from '../List/index';
import Buttons from '../Button/index';
import { useState } from 'react';

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

    const [value, setValor] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('teste');
    }

    return (
        <section>
            <form className='formulario' onSubmit={aoSalvar}>
                <span className='teste'>
                    <h2>Preenche os dados</h2>
                    <CampText obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                    <CampText obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                    <CampText obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" />
                    <List obrigatorio={true} label="Time" itens={times}></List>
                    <Buttons>
                        Criar Card
                    </Buttons>
                </span>
            </form>
        </section>
    )
}

export default Formulario;