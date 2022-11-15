import { createContext, ReactNode, useState } from "react";

interface ContextProps {
    theme: String;
}

export const ThemeContext = createContext<ContextProps | null>(null);

const dark = localStorage.getItem("darkmode");
const initState = {
    dark: dark === "true" ? true : false
}

const ThemeContextProvider = ({ children } : { children: ReactNode }) => {
    const [state, setState] = useState(initState);

    const setThemes = (value : boolean) => {
        setState({
            dark: value
        })
    }
    
    const themeContextData : any = {
        state, setThemes
    }
    return (
        <ThemeContext.Provider value={themeContextData}>
            { children }
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
