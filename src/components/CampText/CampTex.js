import './CampText.css';

const CampText = (props) => {
    const placeholderModificada = `${props.placeholder}...`

    return(
        <div className="campo-text">
            <label>{props.label}</label>
            <input placeholder={placeholderModificada}></input>
        </div>
    )
}

export default CampText;