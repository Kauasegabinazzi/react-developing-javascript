import './CampText.css';

const CampText = (props) => {
    const placeholderModificada = `${props.placeholder}...`

    let value = '';

    const aoDigitado = (evento) =>{
        value = evento.target.value;
    }

    return (
        <div className="campo-text">
            <label>{props.label}</label>
            <input value={value} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>
    )
}

export default CampText;