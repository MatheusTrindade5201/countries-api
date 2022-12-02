import { createContext } from "react"

export const MyContext = createContext({});

export const MyContextProvider = ({children, value}) => {
    return(
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}