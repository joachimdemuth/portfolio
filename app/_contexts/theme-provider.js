'use client'

import { createContext, useContext, useEffect, useState} from 'react'

export const ThemeContext = createContext()



export default function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const theme = localStorage.getItem('theme');
        return theme === 'dark';
    });

useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);


    const toggleTheme = () => {
        setIsDarkMode(prevIsDarkMode => !prevIsDarkMode);
    }

    const value = {
        isDarkMode,
        toggleTheme

    }

    return(
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )

    }
