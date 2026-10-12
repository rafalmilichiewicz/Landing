import { persistentAtom } from "@nanostores/persistent";
import { type Language, LanguageRegistry } from "@i18n/index";

const DEFAULT_LANGUAGE: Language = "en";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const browserLang = navigator.language || navigator.languages[0];

  return browserLang?.toLowerCase().startsWith("pl") ? "pl" : DEFAULT_LANGUAGE;
}

export const $language = persistentAtom<Language>("lang", getInitialLanguage());

export function setLanguage(language: Language): void {
  $language.set(language);
}

export function t(language: Language) {
  return LanguageRegistry[language];
}
