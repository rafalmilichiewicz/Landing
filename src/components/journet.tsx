import { FaSolidCircleDot } from 'solid-icons/fa';
import { useLanguage } from '../context/language';
import { For, type JSXElement } from 'solid-js';

type JourneyElement = {
    time: string;
    title: {
        en: string;
        pl: string;
    };
    content: {
        en: JSXElement;
        pl: JSXElement;
    };
};

const journeyElements: JourneyElement[] = [
    {
        time: '2012',
        title: {
            en: 'First Website',
            pl: 'Pierwsza Strona WWW',
        },
        content: {
            en: (
                <p>
                    Simple HTML/CSS (no JavaScript), but it taught me core programming logic and
                    analytical thinking.
                </p>
            ),
            pl: (
                <p>
                    Prosta strona HTML/CSS (bez JavaScriptu), ale nauczyła mnie podstaw
                    programowania i analitycznego myślenia.
                </p>
            ),
        },
    },
    {
        time: '2013',
        title: {
            en: 'First program',
            pl: 'Pierwszy program',
        },
        content: {
            en: (
                <p>
                    It might have been a simple C++ grade point average calculator in console, but
                    it worked and others used it!
                </p>
            ),
            pl: (
                <p>
                    Był to tylko konsolowy kalkulator średniej ocen w C++, ale działał i korzystali
                    z niego inni
                </p>
            ),
        },
    },
    {
        time: '2014',
        title: {
            en: 'First PC Build',
            pl: 'Pierwsze składanie komputera',
        },
        content: {
            en: (
                <p>
                    Assembled my first rig from scratch with help of online tutorials. It even
                    powered on perfectly on the first try!
                </p>
            ),
            pl: (
                <p>
                    Pierwszy składak od podstaw, z małą pomocą poradników z sieci. Uruchomił się
                    nawet za pierwszym razem!
                </p>
            ),
        },
    },
    {
        time: '2016',
        title: {
            en: 'Hackintosh',
            pl: 'Hackintosh',
        },
        content: {
            en: <p>Made a Hackintosh from my PC in the middle of exam season that worked.</p>,
            pl: <p>W środku sezonu sprawdzianowego postawiłem na komputerze Hackinthosha.</p>,
        },
    },
    {
        time: '2020',
        title: {
            en: 'University',
            pl: 'Studia',
        },
        content: {
            en: (
                <p>
                    An intensive learning sprint covering C++, Python, mathematics, Docker, Java,
                    C#, and UX/UI design.
                </p>
            ),
            pl: (
                <p>
                    Intensywne zdobywanie wiedzy: C++, Python, matematyka, Docker, Java, C#, UX/UI.
                </p>
            ),
        },
    },
    {
        time: '2024',
        title: {
            en: 'Engineering Degree',
            pl: 'Studia inżynierskie',
        },
        content: {
            en: (
                <p>
                    Engineering degree in Computer Science completed with honours; thesis titled:{' '}
                    <span class="text-primary">
                        Project and implementation of mobile application – A location-based game
                        promoting zero-emission transportation
                    </span>
                    .
                </p>
            ),
            pl: (
                <p>
                    Studia inżynierskie na kierunku Informatyka ukończone z wyróżnieniem; praca
                    dyplomowa na temat:{' '}
                    <span class="text-primary">
                        Projekt i implementacja aplikacji mobilnej – Gra miejska promująca transport
                        zeroemisyjny
                    </span>
                    .
                </p>
            ),
        },
    },
    {
        time: '2024',
        title: {
            en: 'Self-Hosting',
            pl: 'Samodzielne hostowanie',
        },
        content: {
            en: (
                <p>
                    Using Raspberry Pi 5 I host: Gitea (Git), Immich (photo), Pydio (files), and
                    Formbricks (feedback) via Cloudflare Tunnels/Tailscale.
                </p>
            ),
            pl: (
                <p>
                    Przy użyciu Raspberry Pi 5 hostuję serwisy: Gitea (Git), Immich (zdjęcia), Pydio
                    (pliki), and Formbricks (feedback) przez Cloudflare Tunnels/Tailscale.
                </p>
            ),
        },
    },
    {
        time: '2025',
        title: {
            en: 'Master’s Degree',
            pl: 'Studia magisterskie',
        },
        content: {
            en: (
                <p>
                    Masters degree in Computer Science also completed with honors; thesis and{' '}
                    <a href="https://doi.org/10.35784/jcsi.7831" target="_blank" class="link">
                        research paper
                    </a>{' '}
                    on:{' '}
                    <span class="text-primary">
                        Comparative analysis of cross-platform application development tools in
                        terms of operating system integration
                    </span>
                    .
                </p>
            ),
            pl: (
                <p>
                    Studia magisterskie na kierunku Informatyka również ukończone z wyróżnieniem;
                    praca dyplomowa i{' '}
                    <a href="https://doi.org/10.35784/jcsi.7831" target="_blank" class="link">
                        artykuł naukowy
                    </a>{' '}
                    na temat:{' '}
                    <span class="text-primary">
                        Analiza porównawcza narzędzi do tworzenia aplikacji wieloplatformowych pod
                        kątem integracji z systemem operacyjnym
                    </span>
                    .
                </p>
            ),
        },
    },
];

export function Journey() {
    const { language, t } = useLanguage();
    return (
        <div class="p-6">
            <h1 class="text-3xl mb-6 text-center text-primary">⛰️ {t().journey.title}</h1>
            <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <For each={journeyElements}>
                    {(element, index) => {
                        const side =
                            index() % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end';
                        const justification = index() % 2 === 0 ? 'md:justify-end' : '';
                        const margin = index() % 2 === 0 ? 'mb-10' : 'md:mb-10';
                        return (
                            <li>
                                <hr class="bg-primary" />
                                <div class="timeline-middle px-4 inset-x-3">
                                    <FaSolidCircleDot class="text-primary" size={20} />
                                </div>
                                <div class={`${side} ${margin}`}>
                                    <time class="font-mono italic">{element.time}</time>
                                    <div
                                        class={`text-lg font-black items-center flex flex-row gap-2 ${justification}`}
                                    >
                                        {language() === 'EN' ? element.title.en : element.title.pl}
                                    </div>
                                    <p>
                                        {language() === 'EN'
                                            ? element.content.en
                                            : element.content.pl}
                                    </p>
                                </div>

                                <hr class="bg-primary" />
                            </li>
                        );
                    }}
                </For>
            </ul>
        </div>
    );
}
