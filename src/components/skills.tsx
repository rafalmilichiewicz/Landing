import { createMemo, createSignal, For } from 'solid-js';
import { useLanguage } from '../context/language';

import {
    SiHtml5,
    SiTypescript,
    SiWebcomponentsdotorg,
    SiTailwindcss,
    SiSpringboot,
    SiJavascript,
    SiDeno,
    SiExpress,
    SiSpringsecurity,
    SiPostgresql,
    SiReact,
    SiSwift,
    SiPython,
    SiPandas,
    SiScikitlearn,
    SiDocker,
    SiKubernetes,
    SiCloudflare,
    SiLinux,
    SiGit,
    SiGithubactions,
    SiExpo,
    SiJetpackcompose,
} from 'solid-icons/si';
import { BiSolidSpreadsheet, BiSolidFileJson } from 'solid-icons/bi';
import type { IconTypes } from 'solid-icons';
import { FaSolidBroom } from 'solid-icons/fa';
import { RiDevelopmentCodeSSlashLine } from 'solid-icons/ri';
import { Motion } from 'solid-motionone';

export default function SkillsShowcase() {
    type Category = {
        title: { en: string; pl: string };
        techs: { names: string[]; icons: IconTypes[] };
    };

    const categories: Record<string, Category> = {
        web: {
            title: { en: 'Frontend', pl: 'Frontend' },
            techs: {
                names: [
                    'HTML5 / CSS3 / JS',
                    'TypeScript',
                    'Solid.js / React',
                    'Tailwind / DaisyUI',
                ],
                icons: [SiHtml5, SiTypescript, SiWebcomponentsdotorg, SiTailwindcss],
            },
        },
        backend: {
            title: {
                en: 'Backend',
                pl: 'Backend',
            },
            techs: {
                names: [
                    'Java / Spring',
                    'JavaScript / TypeScript',
                    'Node.js / Deno',
                    'Express / Hono',
                    'JWT',
                    'SQL: SQLite / Postgres',
                ],
                icons: [
                    SiSpringboot,
                    SiJavascript,
                    SiDeno,
                    SiExpress,
                    SiSpringsecurity,
                    SiPostgresql,
                ],
            },
        },
        mobile: {
            title: {
                en: 'Mobile',
                pl: 'Mobilne',
            },
            techs: {
                names: ['React Native', 'Expo', 'iOS / SwiftUI', 'Jetpack Compose'],
                icons: [SiReact, SiExpo, SiSwift, SiJetpackcompose],
            },
        },
        swe: {
            title: {
                en: 'Software Design',
                pl: 'Inżyniera Oprogramowania',
            },
            techs: {
                names: ['Git', 'Github Actions', 'SOLID', 'Clean Code'],
                icons: [SiGit, SiGithubactions, RiDevelopmentCodeSSlashLine, FaSolidBroom],
            },
        },

        data: {
            title: {
                en: 'Data Analysis',
                pl: 'Analiza danych',
            },
            techs: {
                names: [
                    'Python',
                    'Dtale',
                    'NDJSON (streaming JSON)',
                    'Pandas / Numpy',
                    'scikit-learn',
                ],
                icons: [SiPython, BiSolidSpreadsheet, BiSolidFileJson, SiPandas, SiScikitlearn],
            },
        },
        cloud: {
            title: {
                en: 'Cloud',
                pl: 'Chmurowe',
            },
            techs: {
                names: [
                    'Docker & Compose',
                    'Kubernetes (K8s)',
                    'Self-hosting',
                    'Linux: Debian / Fedora',
                ],
                icons: [SiDocker, SiKubernetes, SiCloudflare, SiLinux],
            },
        },
    } as const;

    type CategoryKey = keyof typeof categories;

    const [active, setActive] = createSignal<CategoryKey>('web');
    const currentCategory = createMemo<Category>(() => categories[active()]);
    const { language, t } = useLanguage();

    return (
        <div class="p-6 flex flex-col items-center transition-opacity duration-300">
            <h2 class="text-3xl font-bold mb-6 text-primary">🛠️ {t().skills.title}</h2>

            <div role="tablist" class="tabs tabs-boxed mb-6">
                {Object.keys(categories).map((category) => (
                    <button
                        role="tab"
                        class={`tab ${active() === category ? 'tab-active' : ''}`}
                        onClick={() => setActive(category as CategoryKey)}
                    >
                        {language() === 'EN'
                            ? categories[category].title.en
                            : categories[category].title.pl}
                    </button>
                ))}
            </div>

            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl ">
                <For each={currentCategory().techs.names}>
                    {(tech, index) => (
                        <Motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div class="card bg-secondary text-secondary-content hover:bg-primary hover:text-primary-content transition-all duration-200 shadow-md">
                                <div class="card-body p-4 items-center flex-row justify-center">
                                    {currentCategory().techs.icons[index()] ? (
                                        currentCategory().techs.icons[index()]({ size: 24 })
                                    ) : (
                                        <></>
                                    )}
                                    <span class="font-medium text-sm sm:text-base items-center">
                                        {tech}
                                    </span>
                                </div>
                            </div>
                        </Motion.div>
                    )}
                </For>
            </div>
        </div>
    );
}
