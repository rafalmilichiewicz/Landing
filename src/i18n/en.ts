export const EN = {
    navbar: {
        language: 'Language',
    },
} as const;

export type I18nStructure = {
  [K in keyof typeof EN]: { [P in keyof typeof EN[K]]: string };
};