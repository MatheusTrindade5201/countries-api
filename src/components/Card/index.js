import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MyContext } from '../../context/myContext';
import './Card.css';

const Card = (props) => {

    const {theme} = useContext(MyContext)

    return (
        <NavLink to={`pais/${props.nome}`} className={'card ' + theme}>
                <img src={props.imagem} alt='Flag' className='bandeira'></img>
                <div className='card__informacoes'>
                    <h2 className='card__titulo'>{props.nome}</h2>
                    <p className='card__info'><span className='card__info-destaque'>Population: </span>{String(props.population).split(/(?=(?:...)*$)/ ).join(',')}</p>
                    <p className='card__info'><span className='card__info-destaque'>Region: </span>{props.region}</p>
                    <p className='card__info'><span className='card__info-destaque'>Capital: </span>{props.capital}</p>
                </div>
        </NavLink>
        
    )
}

export default Card