import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark"

interface ThemeContextType {
    theme: Theme;
    handleToggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const storedTheme = window.localStorage.getItem("apexTheme");
        if (storedTheme) {
            setTheme(storedTheme as Theme);
        }
    }, []);

    const handleToggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme: Theme = prevTheme === "dark" ? "light" : "dark";
            window.localStorage.setItem("apexTheme", newTheme);
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme,  handleToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useThemeContext() {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error(
            "useThemeContext must be used within a ThemeProviderr",
        );
    }

    return context;
}