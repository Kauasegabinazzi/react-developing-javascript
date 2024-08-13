import '../Button/button.css';

const Buttons = (props) => {
    return (<button className='botao'>
        {props.children}
    </button>)
}

export default Buttons