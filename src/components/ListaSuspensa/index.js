import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='select'>
            <select className='listaSuspensa'>
                <option key={props.placeholder}>{props.placeholder}</option>
                {props.item.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa