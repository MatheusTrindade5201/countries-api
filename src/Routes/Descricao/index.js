import { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'
import Pais from '../../components/Pais'
import { MyContext } from '../../context/myContext'
import './Descricao.css'

const Descricao = (props) => {

    const {nome} = useParams()
    const [pais, setPaises] = useState(false);
    const {theme} = useContext(MyContext)

    const ConsomeApi = async () => {
        try {
            const data = await fetch(`https://restcountries.com/v2/name/${nome}`);
            const json = await data.json()
            setPaises(json)
            console.log(json);     
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
                key={pais[0].name}
                imagem={pais[0].flags.svg} 
                nome={pais[0].name}
                nome_nativo={pais[0].nativeName}
                population={pais[0].population}
                region={pais[0].region}
                sub_region={pais[0].subregion}
                capital={pais[0].capital}
                domain={pais[0].topLevelDomain}
                currency={pais[0].currencies[0].name}
                languages={pais[0].languages[0].name}
                fronteira={pais[0].borders ? Object.values(pais[0].borders).map(border => <p className='fronteira__item'>{border}</p>) : ''}
                />
                </div>
            </div>
        )
        
    }
    
}

export default Descricao
