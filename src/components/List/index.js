import './List/list.css';

const List = (props) => {

    return (
        <div>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => {
                    return <option>{item}</option>
                })}
            </select>
        </div>
    )
}

export default List;