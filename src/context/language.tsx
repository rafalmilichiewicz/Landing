import { createContext, createSignal, onMount, useContext, type JSX } from 'solid-js';
import { EN, type I18nStructure } from '../i18n/en';
import { PL } from '../i18n/pl';

export type Language = 'PL' | 'EN';

interface LanguageContextValue {
    language: () => Language;
    setLanguage: (lang: Language) => void;
    t: () => I18nStructure;
}

const LanguageContext = createContext<LanguageContextValue>();

export function LanguageProvider(props: { children: JSX.Element }) {
    const [language, setLanguage] = createSignal<Language>('EN');

    // Detect language
    onMount(async () => {
        const saved = localStorage.getItem('lang');
        if (saved === 'PL' || saved === 'EN') {
            setLanguage(saved as Language);
            return;
        }
        const browserLang = navigator.language || navigator.languages[0];
        if (browserLang.toLowerCase().startsWith('pl')) {
            setLanguage('PL');
            localStorage.setItem('lang', 'PL');
            return;
        }
    });

    const changeLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('lang', lang);
    };

    const t = () => (language() === 'PL' ? PL : EN);

    return (
        <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
            {props.children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
    return ctx;
}
