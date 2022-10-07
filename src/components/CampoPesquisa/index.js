import './CampoPesquisa.css'

const CampoPesquisa = (props) => {
    return (
        <input placeholder='Search for a country' className='campoPesquisa' onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor}/>
    )
}

export default CampoPesquisa