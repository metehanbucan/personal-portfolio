import { createContext, useState, useEffect, useContext } from "react";

import tr from "../constants/languages/tr.json";
import en from "../constants/languages/en.json";
const LanguageContext = createContext();

const languages = { tr, en };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "tr";
  });

  const [stringData, setStringData] = useState(languages[language]);

  useEffect(() => {
    setStringData(languages[language]);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "tr" ? "en" : "tr"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, stringData }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
