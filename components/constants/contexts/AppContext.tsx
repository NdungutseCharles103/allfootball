import { createContext, useContext, useEffect, useState } from "react";

interface appContextType {
    isDark: boolean,
    setIsDark: (isDark: boolean) => void,
    themeClass: any;
    mobile: boolean;
    setMobile: (mobile: boolean) => void;
}

const appDefaultValues = {
    isDark: false,
    setIsDark: () => {},
    themeClass: {},
    mobile: false,
    setMobile: () => { },
}

const themes = {
    light: {
        text: 'text-black',
        bg: 'bg-white',
        bg1: 'bg-orange-600',
        bgAlt: 'bg-slate-100',
        textAlt: 'text-white',
        textAlt1: 'text-orange-600',
        color: '#ea580c',
        textc: '#000',
        color1: 'orange-600'
    },
    dark: {
        text: 'text-slate-100',
        bg: 'bg-[#040921]',
        bg1: 'bg-orange-600',
        bgAlt: 'bg-black',
        textAlt: 'text-black',
        textAlt1: 'text-orange-600',
        textc: '#fff',
        color: '#ea580c',
        color1: 'orange-600',
    }
}

const AppContext = createContext<appContextType>(appDefaultValues);

export const useApp = ()=> useContext(AppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDark, setIsDark] = useState<any>('');
    const [mobile, setMobile] = useState(false) 
    const [themeClass, setThemeClass] = useState(themes.light)


    const saveTheme = () => {
        setThemeClass(isDark?themes.dark:themes.light)
        console.log('sav', isDark);
        if (isDark) {
            localStorage.setItem('theme', "dark");
        }else{
            localStorage.setItem('theme', "light");
        }
    }

    const getSavedTheme = () => {
        const localIsDark = localStorage.getItem('theme');
        console.log(localIsDark);
        
        if (localIsDark) {
            if (localIsDark === "dark") {
                console.log('darke');
                setIsDark(true);
                setThemeClass(themes.dark);
            }else{
                console.log('ligthe');
                setIsDark(false);
                setThemeClass(themes.light); 
            }
        }
    }
    
    useEffect(() => {
        getSavedTheme();
    }, []);

    useEffect(() => {
        if (isDark!=='') {
            saveTheme();
        }
    }, [isDark]);
    
    return (
        <AppContext.Provider value={{ isDark, setIsDark, themeClass, mobile, setMobile }}>
            {children}
        </AppContext.Provider>
    );
}