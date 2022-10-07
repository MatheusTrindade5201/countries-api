import Rotas from "./Routes/routes";




function App() {

//   const [regiao, setRegiao] = useState('') 

//   const [paises, setPaises] = useState(false)
//   const [busca, setBusca] = useState('')

//   const ConsomeApi = async () => {
//     try {
//         const data = await fetch('https://restcountries.com/v3.1/all');
//         const json = await data.json()
//         setPaises(json)
//         console.log(json);     
//     } catch (error) {
//         console.log(error.message);
//     }
// }

//   useEffect(() => {
//    ConsomeApi();
//   }, [])

  return (
    <Rotas />
  )
}

export default App;
