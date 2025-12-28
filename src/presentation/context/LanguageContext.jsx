import { createContext, useState, useEffect, useContext } from "react";

import tr from "../../constants/languages/tr.json";
import en from "../../constants/languages/en.json";
const LanguageContext = createContext();

const languages = {tr, en};

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'tr';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'tr' ? 'en' : 'tr'));
    }

    const t = (path) => {
        const keys = path.split('.');
        let translation = languages[language];
        
        keys.forEach((key) => {
        if (translation) {
            translation = translation[key];
        }
        });

        return translation || path; 
    };

    return (
        <LanguageContext.Provider value={{language, toggleLanguage, t}}>
            {children}
        </LanguageContext.Provider>
    );
}