import './cabecalho.css'

const Cabecalho = () => {
    return (
        <nav className="cabecalho">
            <h2 className="cabecalho__titulo">Where in the world?</h2> 
            <div className="cabecalho__tema-interruptor"><span className="cabecalho__tema-icone"></span>Dark Mode</div>
        </nav>
    )
}

export default Cabecalho