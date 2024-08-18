import '../List/list.css';

const List = (props) => {

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select value={props.value} onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio}>
                <option value=''></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default List;