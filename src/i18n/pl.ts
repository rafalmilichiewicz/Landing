import type { I18nStructure } from "@/i18n/index";

export const PL: I18nStructure = {
    navbar: {
        language: "Język",
        emoji: "🇵🇱",
    },
    hero: {
        description: "Programista zorientowany na dane",
    },
    blog: {
        visit: "Odwiedź",
        read: "Czytaj",
    },
    showcase: {
        title: "Projekty",
        special: "Demo",
        view: "Przejdź do projektu",
    },
    skills: {
        title: "Umiejętności i technologie",
    },
    journey: {
        title: "Moja przygoda z technologią",
    },
    tech: {
        title: "Ciekawe niszowe rozwiązania",
    },
} as const;
