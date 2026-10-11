import { type I18nStructure } from "@i18n/index";
import { type Language, LanguageRegistry } from "@i18n/index";
import { createContext, createMemo, createSignal, onMount, useContext, type JSX } from "solid-js";

interface LanguageContextValue {
  language: () => Language;
  setLanguage: (lang: Language) => void;
  t: () => I18nStructure;
}

const LanguageContext = createContext<LanguageContextValue>();

export function LanguageProvider(props: { children: JSX.Element }) {
  const [language, setLanguage] = createSignal<Language>("en");

  // Detect language
  onMount(async () => {
    const saved = localStorage.getItem("lang");
    if (saved === "pl" || saved === "en") {
      setLanguage(saved as Language);
      return;
    }
    const browserLang = navigator.language || navigator.languages[0];
    if (browserLang.toLowerCase().startsWith("pl")) {
      setLanguage("pl");
      localStorage.setItem("lang", "pl");
      return;
    }
  });

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const t = () => LanguageRegistry[language()];

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
