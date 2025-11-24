export const EN = {
    navbar: {
        language: 'Language',
    },
    hero: {
        description: 'Data Oriented Programmer',
    },
    showcase: {
        title: 'Project Showcase',
        special: 'Demo',
        view: 'View Project',
    },
} as const;

export type I18nStructure = {
    [K in keyof typeof EN]: { [P in keyof (typeof EN)[K]]: string };
};
