import { useContext } from 'react'
import { MyContext } from '../../context/myContext'
import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    const {theme} = useContext(MyContext)
    
    return (
        <div className={'select ' + theme}>
            <select className='listaSuspensa' onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor}>
                <option value={''} key={props.placeholder}>{props.placeholder}</option>
                {props.item.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa