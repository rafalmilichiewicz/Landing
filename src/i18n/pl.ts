import type { I18nStructure } from './en';

export const PL: I18nStructure = {
    navbar: {
        language: 'Język',
    },
    hero: {
        description: 'Programista zorientowany na dane',
    },
    showcase: {
        title: 'Projekty',
        special: 'Demo',
        view: 'Przejdź do projektu',
    },
    skills: {
        title: "Umiejętności i technologie"
    }
} as const;
