import { useContext } from 'react'
import { MyContext } from '../../context/myContext'
import './cabecalho.css'

const Cabecalho = () => {

    const {theme, setTheme} = useContext(MyContext)

    return (
        <header className={"cabecalho " + theme}>
            <h2 className="cabecalho__titulo">Where in the world?</h2> 
            <div className="cabecalho__tema-interruptor" onClick={() => theme === '' ? setTheme('dark') : setTheme('')}><span className="cabecalho__tema-icone"></span>Dark Mode</div>
        </header>
    )
}

export default Cabecalho