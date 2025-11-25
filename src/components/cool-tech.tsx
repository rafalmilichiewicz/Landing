import { For } from 'solid-js';
import { Motion } from 'solid-motionone';
import { useLanguage } from '../context/language';
import type { IconTypes } from 'solid-icons';
import { SiTauri } from 'solid-icons/si';
import { FaSolidLock } from 'solid-icons/fa';
import { RiDocumentFilePaper2Fill } from 'solid-icons/ri';

type Tech = {
    name: string;
    icon: IconTypes;
    en: string;
    pl: string;
}

const techs: Tech[] = [
    {
        name: 'Typst',
        icon: RiDocumentFilePaper2Fill,
        en: 'Modern LaTeX that is enjoyable to write.',
        pl: 'Nowoczesny LaTeX, w którym przyjemnie się pisze.',
    },
    {
        name: 'Caddy',
        icon: FaSolidLock,
        en: 'HTTP server that just works.',
        pl: 'Serwer HTTP, który po prostu działa.',
    },
    {
        name: 'Tauri',
        icon: SiTauri,
        en: 'Electron.js alternative - still early, but the DX is there.',
        pl: 'Alternatywa dla Electron.js - nadal we wczesnym etapie, ale DX jest świetny.',
    },
];

export function CoolTech() {
    const { language, t } = useLanguage();
    return (
        <div class="max-w-4xl mx-auto mt-10 p-6">
            <h1 class="text-3xl mb-6 text-center text-primary">💾 {t().tech.title}</h1>
            <div class="grid gap-4  sm:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl m-auto">
                <For each={techs}>
                    {(tech) => (
                        <Motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <details class="collapse collapse-arrow border border-base-300 rounded-box bg-secondary text-secondary-content hover:bg-primary hover:text-primary-content transition-all duration-200">
                                <summary class="collapse-title font-semibold ">
                                    <div class="items-center flex flex-row gap-2">
                                        {tech.icon({ size: 24 })}
                                        <span>{tech.name}</span>
                                    </div>
                                </summary>
                                <div class="collapse-content text-sm">
                                    <p>{language() === 'EN' ? tech.en : tech.pl}</p>
                                </div>
                            </details>
                        </Motion.div>
                    )}
                </For>
            </div>
        </div>
    );
}
