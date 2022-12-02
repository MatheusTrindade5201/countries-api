import { useState } from "react";
import { MyContextProvider } from "./context/myContext";
import Rotas from "./Routes/routes";

function App() {

  const [theme, setTheme] = useState('')

  return (
    <MyContextProvider value={{theme, setTheme}}>
    <Rotas />
    </MyContextProvider>
  )
}

export default App;
