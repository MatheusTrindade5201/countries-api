import { useState } from "react";
import { MyContextProvider } from "./context/myContext";
import Rotas from "./Routes/routes";

function App() {

  const [theme, setTheme] = useState('')

  return (
    <div className={"App " + 'page'+theme}>
    <MyContextProvider value={{theme, setTheme}}>
    <Rotas />
    </MyContextProvider>
    </div>
  )
}

export default App;
