import { SiGithub } from "solid-icons/si";
import { FaBrandsLinkedin } from "solid-icons/fa";
import { RiDevelopmentCodeSSlashLine } from "solid-icons/ri";
import { useStore } from "@nanostores/solid";
import { $language, setLanguage, t } from "@/stores/language";

export function Navbar() {
  const language = useStore($language);
  // const a = useStore($translation);
  return (
    <div class="navbar bg-neutral text-neutral-content px-4 flex-no-wrap fixed top-0 z-10">
      <div class="navbar-start">
        <a class="btn btn-ghost text-xl" href="/">
          <img src="/favicon.svg" class="w-10 h-10" alt="Logo"></img>
        </a>
      </div>

      <div class="navbar-end">
        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn m-1 btn-ghost text-neutral-content whitespace-nowrap"
          >
            {t(language()).navbar.language} {t(language()).navbar.emoji}
          </div>

          <ul
            tabindex="-1"
            class="dropdown-content menu bg-secondary text-neutral-content rounded-box z-1 p-2 shadow-xl"
          >
            <li>
              <button
                class="whitespace-nowrap p-4"
                onClick={() => {
                  $language.set("pl");
                  document.activeElement instanceof HTMLElement && document.activeElement.blur();
                }}
              >
                Polski 🇵🇱
              </button>
            </li>
            <li>
              <button
                class="whitespace-nowrap p-4"
                onClick={() => {
                  $language.set("en");
                  document.activeElement instanceof HTMLElement && document.activeElement.blur();
                }}
              >
                English 🇬🇧
              </button>
            </li>
          </ul>
        </div>
        {/* {a().skills.title} */}
        <a
          class="btn btn-ghost w-10 h-10"
          href="https://github.com/rafalmilichiewicz/Landing"
          aria-label="LinkedIn"
          target="_blank"
        >
          <RiDevelopmentCodeSSlashLine size={24} />
        </a>
        <a
          class="btn btn-ghost w-10 h-10"
          href="https://github.com/rafalmilichiewicz"
          aria-label="GitHub"
          target="_blank"
        >
          <SiGithub size={24} />
        </a>
        <a
          class="btn btn-ghost w-10 h-10"
          href="https://www.linkedin.com/in/rafał-milichiewicz-8750a9309"
          aria-label="LinkedIn"
          target="_blank"
        >
          <FaBrandsLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}
