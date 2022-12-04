import { useContext, useEffect, useState } from 'react'
import { Navigate, NavLink, useParams } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'
import Pais from '../../components/Pais'
import { MyContext } from '../../context/myContext'
import './Descricao.css'

const Descricao = (props) => {

    const {nome} = useParams()
    const [nomeAtual, setNomeAtual] = useState(nome)
    const [pais, setPaises] = useState(false);
    const {theme} = useContext(MyContext)

    const ConsomeApi = async () => {
        try {
            const data1 = await fetch(`https://restcountries.com/v2/alpha/${nome}`);
            if(data1.status === 400){
                const data2 = await fetch(`https://restcountries.com/v2/name/${nome}`);
                const json = await data2.json()
                setPaises(json[0])
            }else{
                const json = await data1.json()
                setPaises(json)
            }
                 
        } catch (error) {
            console.log(error.message);
        }
    }
    
      useEffect(() => {
       ConsomeApi();
      }, []);

    if(pais === false ){
        return (
            <div className='info'>
                <Cabecalho />
                <div className='pais'>
                <NavLink to={'/'} className={'pais_voltar-botao ' + 'return'+theme}>Back</NavLink>
                <p>Carregando...</p>
                </div>
            </div>
        )
    }else {
        return(
            <div className='info'>
                <Cabecalho />
                <div className='pais'>
                <NavLink to={'/'} className={'pais_voltar-botao ' + 'return'+theme}>Back</NavLink>
                <Pais 
                key={pais.name}
                imagem={pais.flags.svg} 
                nome={pais.name}
                nome_nativo={pais.nativeName}
                population={pais.population}
                region={pais.region}
                sub_region={pais.subregion}
                capital={pais.capital}
                domain={pais.topLevelDomain}
                currency={pais.currencies[0].name}
                languages={pais.languages[0].name}
                fronteira={pais.borders ? Object.values(pais.borders).map(border => <NavLink onClick={Navigate} to={`/pais/${border}`} className='fronteira__item'>{border}</NavLink>) : ''}
                />
                </div>
            </div>
        )
        
    }
    
}

export default Descricao
