import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='select'>
            <select className='listaSuspensa' onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor}>
                <option value={''} key={props.placeholder}>{props.placeholder}</option>
                {props.item.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa