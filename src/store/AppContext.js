import { createContext, useContext, useReducer } from "react"; // verificar
import { reducer } from "./reducer"; // verificar


export const Context = createContext({});

export const useAppContext = () => useContext(Context);



export const AppContext = ({ children, initialState }) => {
    const [ state, dispatch ] = useReducer(reducer, initialState)
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )

}