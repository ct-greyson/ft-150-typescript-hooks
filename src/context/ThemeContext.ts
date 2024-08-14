import { createContext } from "react";

interface ThemeContextValue {
    theme: string,
    toggleTheme: () => void
}

const ThemeContextDefault: ThemeContextValue = {
    theme: "light",
    toggleTheme: () => {}
}

const ThemeContext = createContext<ThemeContextValue>(ThemeContextDefault)

export default ThemeContext;