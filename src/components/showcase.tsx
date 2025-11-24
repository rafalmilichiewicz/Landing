import { For } from 'solid-js';
import { useLanguage } from '../context/language';

type Project = {
    name: string;
    description: { en: string; pl: string };
    tags: string[];
    link: string;
    special?: string;
};

const projects: Project[] = [
    {
        name: '🚎 MyBus Explorer',
        description: {
            en: 'Reverse-engineering of the MyBus mobile app and public API calls.',
            pl: 'Inżynieria wsteczna aplikacji MyBus oraz publicznych zapytań API.',
        },
        tags: [
            'Deno',
            'TypeScript',
            'SQL/SQLite',
            'API',
            'OpenAPI',
            'Swagger',
            'Docker',
            'Reverse-engineering',
            'NDJSON',
            'Testing',
            'Documentation',
            'Data cleaning',
            'Data exploration',
        ],
        link: 'https://github.com/rafalmilichiewicz/mybus-explorer',
        special: 'https://rafalmilichiewicz.github.io/mybus-explorer',
    },
    {
        name: '🚢 RuleTheWaves',
        description: {
            en: 'An iOS game written in SwiftUI — a new take on classic Warships.',
            pl: 'Gra mobilna iOS w statki napisana w SwiftUI.',
        },
        tags: ['Swift', 'SwiftUI', 'MVVM', 'Mobile App', 'Algorithms', 'Data structures'],
        // TODO Link to game movie
        link: 'https://github.com/rafalmilichiewicz/RuleTheWaves',
        special: 'https://files.catbox.moe/uqvr3e.MP4',
    },
    {
        name: '⛅ Weather App',
        description: {
            en: 'University group project focused on Java Clean Code principles.',
            pl: 'Studencki projekt grupowy z czystego kodu oraz zasad SOLID.',
        },
        tags: ['Java', 'SOLID', 'Clean Code', 'Testing'],
        link: 'https://github.com/rafalmilichiewicz/weather',
    },
    {
        name: '🧮 Public Transit Data Analysis',
        description: {
            en: 'Python data analysis project focusing on public transit data.',
            pl: 'Projekt z analizy danych transportu publicznego napisany w języku Python.',
        },
        tags: [
            'Data cleaning',
            'Clustering',
            'Data visualization',
            'Reverse engineering',
            'Data exploration',
        ],
        link: '#', // TODO
    },
];

export default function ProjectShowcase() {
    const { language, t } = useLanguage();
    return (
        <div class="p-6">
            <h1 class="text-3xl mb-6 text-center">🗂️ {t().showcase.title}</h1>
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <For each={projects}>
                    {(project) => (
                        // TODO Hover effect
                        <div class="card  bg-secondary text-secondary-content shadow-xl hover:shadow-2xl transition">
                            <div class="card-body">
                                <h2 class="card-title text-2xl font-extrabold">{project.name}</h2>
                                <p class="mb-3 grow-0">
                                    {language() === 'EN'
                                        ? project.description.en
                                        : project.description.pl}
                                </p>
                                <div class="grow">
                                    <div class="flex flex-wrap gap-2 mb-4 ">
                                        <For each={project.tags}>
                                            {(tag) => <div class="badge badge-neutral">{tag}</div>}
                                        </For>
                                    </div>
                                </div>

                                <div class="card-actions justify-end">
                                    {project.special !== undefined ? (
                                        <a
                                            href={project.special}
                                            target="_blank"
                                            class="btn btn-info"
                                        >
                                            {t().showcase.special}
                                        </a>
                                    ) : (
                                        <></>
                                    )}
                                    <a href={project.link} target="_blank" class="btn btn-primary">
                                        {t().showcase.view}
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </For>
            </div>
        </div>
    );
}
