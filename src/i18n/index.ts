import { EN } from "./en";
import { PL } from "./pl";

export const LanguageRegistry = {
    en: EN,
    pl: PL,
};

export type I18nStructure = {
    [K in keyof typeof EN]: { [P in keyof (typeof EN)[K]]: string };
};
export type Language = keyof typeof LanguageRegistry;
