import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../../context/myContext'
import './Pais.css'

const Pais = (props) => {

const {theme} = useContext(MyContext)

    return (
        <div className={'pais__informacao ' + theme}>
                <img src={props.imagem} className='pais__bandeira' alt='bandeira'></img>
                <ul className='pais__descricao pais__descricao-1'>
                    <li className='pais__item'><h1 className='pais__nome'>{props.nome}</h1></li>
                    <li className='pais__item'><strong>Native Name: </strong><p className='pais__info'>{props.nome_nativo}</p></li>
                    <li className='pais__item'><strong>Population: </strong><p className='pais__info'>{String(props.population).split(/(?=(?:...)*$)/ ).join(',')}</p></li>
                    <li className='pais__item'><strong>Region: </strong><p className='pais__info'>{props.region}</p></li>
                    <li className='pais__item'><strong>Sub Region: </strong><p className='pais__info'>{props.sub_region}</p></li>
                    <li className='pais__item'><strong>Capital: </strong><p className='pais__info'>{props.capital}</p></li>
                </ul>
                <ul className='pais__descricao pais__descricao-2'>
                    <li className='pais__item'><strong>Top Level Domain: </strong><p className='pais__info'>{props.domain}</p></li>
                    <li className='pais__item'><strong>Currencies: </strong><p className='pais__info'>{props.currency}</p></li>
                    <li className='pais__item'><strong>Languages: </strong><p className='pais__info'>{props.languages}</p></li>
                </ul>
                <ul className='pais__fronteiras'>
                    <h2 className='Pais__titulo-fronteira'><strong>Border Countries:</strong></h2>
                    {props.fronteira}
                </ul>
            </div>
    )
}

export default Pais