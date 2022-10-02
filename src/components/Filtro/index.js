import CampoPesquisa from '../CampoPesquisa'
import ListaSuspensa from '../ListaSuspensa'
import './Filtro.css'

const Filtro = () => {
    const continentes = [
        'Africa',
        'America',
        'Asia',
        'Europe',
        'Oceania'
      ]
    return (
        <div className='filtro'>
            <CampoPesquisa />
            <ListaSuspensa placeholder={'Filter by Region'} item={continentes}/>
        </div>
    )
}

export default Filtro