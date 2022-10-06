import { useEffect, useState } from "react";
import Cabecalho from "./components/Cabecalho";
import Card from "./components/Card";
import Filtro from "./components/Filtro";



function App() {

  const [paises, setPaises] = useState(false)

  const ConsomeApi = async () => {
    try {
        const data = await fetch('https://restcountries.com/v3.1/all');
        const json = await data.json()
        setPaises(json)
        console.log(json);     
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
        <Filtro />
        <p>Carregando...</p>
      </div>
    );
  }else{
    return (
      <div className="App">
        <Cabecalho/>
        <Filtro />
        <div className="listaPaises">
          {paises.map(paises => <Card
            key={paises.name.common}
            imagem={paises.flags.png} 
            nome={paises.name.common}
            population={paises.population}
            region={paises.region}
            capital={paises.capital}
          />)}
        </div>
        
      </div>
    );
  }

  
}

export default App;
