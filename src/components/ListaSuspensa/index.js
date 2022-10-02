import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div>
            <select>
                <option>{props.placeholder}</option>
                {props.item.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa