
    export const checkModePreference = () => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return (prefersDarkMode ? 'dark' : 'light');
    }
