import { SiGithub, SiLinkedin } from 'solid-icons/si';
import { useLanguage } from '../context/language';

export function Navbar() {
    const { setLanguage, t } = useLanguage();

    return (
        <div class="navbar bg-neutral text-neutral-content px-4">
            <div class="navbar-start">
                <button class="btn btn-ghost text-xl">
                    <img src="/favicon.svg" class="w-10 h-10" alt="Logo"></img>
                </button>
            </div>

            <div class="navbar-end ">
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn m-1 btn-ghost text-neutral-content">
                        {t().navbar.language}
                    </div>
                    <ul
                        tabindex="-1"
                        class="dropdown-content menu bg-neutral text-neutral-content rounded-box z-1 p-2 shadow-sm"
                    >
                        <li>
                            <a
                                onClick={() => {
                                    setLanguage('PL');
                                    //@ts-ignore
                                    document.activeElement.blur();
                                }}
                            >
                                Polski
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    setLanguage('EN');
                                    //@ts-ignore
                                    document.activeElement.blur();
                                }}
                            >
                                English
                            </a>
                        </li>
                    </ul>
                </div>
                <a
                    class="btn btn-ghost w-10 h-10"
                    href="https://github.com/rafalmilichiewicz"
                    target="_blank"
                >
                    <SiGithub size={24} />
                </a>
                <a
                    class="btn btn-ghost w-10 h-10"
                    href="https://www.linkedin.com/in/rafał-milichiewicz-8750a9309"
                    target="_blank"
                >
                    <SiLinkedin size={24} />
                </a>
            </div>
        </div>
    );
}
