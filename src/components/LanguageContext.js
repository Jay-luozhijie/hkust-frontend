import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from './i18n'; // 确保你已正确设置并导入i18next配置

const LanguageContext = createContext();

export function useLanguage() {
    return useContext(LanguageContext);
}

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('zh');  // 默认语言为中文

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);  // 同步i18next的语言状态
        setLanguage(lang);
    };

    // 当组件挂载时，同步i18next的语言至状态
    useEffect(() => {
        const currentLang = i18n.language;
        setLanguage(currentLang);
    }, []);

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
