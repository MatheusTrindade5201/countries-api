import { useContext } from 'react'
import { MyContext } from '../../context/myContext'
import './CampoPesquisa.css'

const CampoPesquisa = (props) => {

    const {theme} = useContext(MyContext)

    return (
        <input placeholder='Search for a country' className={'campoPesquisa ' + theme } onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor}/>
    )
}

export default CampoPesquisa