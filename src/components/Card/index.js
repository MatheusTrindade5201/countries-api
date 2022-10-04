import './Card.css';

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.imagem} alt='Flag' className='bandeira'></img>
            <div className='card__informacoes'>
                <h2 className='card__titulo'>{props.nome}</h2>
                <p className='card__info'><span className='card__info-destaque'>Population: </span>{props.population.split(/(?=(?:...)*$)/ ).join(',')}</p>
                <p className='card__info'><span className='card__info-destaque'>Region: </span>{props.region}</p>
                <p className='card__info'><span className='card__info-destaque'>Capital: </span>{props.capital}</p>
            </div>
        </div>
    )
}

export default Card