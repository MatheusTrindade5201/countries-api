import { useEffect, useState } from "react";
import Cabecalho from "../../components/cabecalho";
import Card from "../../components/Card";
import CampoPesquisa from '../../components/CampoPesquisa'
import ListaSuspensa from '../../components/ListaSuspensa'
import React from "react";
import './Home.css'




function Home() {

  const continentes = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania'
  ]

  const [regiao, setRegiao] = useState('') 

  const [paises, setPaises] = useState(false)
  const [busca, setBusca] = useState('')

  const ConsomeApi = async () => {
    try {
        const data = await fetch('https://restcountries.com/v3.1/all');
        const json = await data.json()
        setPaises(json)
    } catch (error) {
        console.log(error.message);
    }
}

  useEffect(() => {
   ConsomeApi();
  }, [])

  if(paises === false ){
    return (
      <div className="App">
        <Cabecalho/>
        <div className='filtro'>
            <CampoPesquisa
              valor={busca}
              aoAlterado={valor => setBusca(valor)} />
            <ListaSuspensa 
            placeholder={'Filter by Region'} 
            item={continentes}
            valor={regiao}
            aoAlterado={valor => setRegiao(valor)}
            />
        </div>
        <p>Loading...</p>
      </div>
    );
  }else {
    return(
      <div className="App">
        <Cabecalho/>
        <div className='filtro'>
            <CampoPesquisa 
              valor={busca}
              aoAlterado={valor => setBusca(valor)}/>
            <ListaSuspensa 
            placeholder={'Filter by Region'} 
            item={continentes}
            valor={regiao}
            aoAlterado={valor => setRegiao(valor)}
            />
        </div>
        <div className="listaPaises">
          {paises.filter(paises => paises.region.includes(regiao)).filter(paises => paises.name.common.toLowerCase().includes(busca.toLowerCase())).map(paises => <Card
            key={paises.name.common}
            imagem={paises.flags.png} 
            nome={paises.name.common}
            population={paises.population}
            region={paises.region}
            capital={paises.capital}
          />)}
        </div>
      </div>
    )
  }
    
}

export default Home;
