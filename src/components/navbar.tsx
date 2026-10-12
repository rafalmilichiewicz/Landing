import { SiGithub } from "solid-icons/si";
import { FaBrandsLinkedin } from "solid-icons/fa";
import { RiDevelopmentCodeSSlashLine } from "solid-icons/ri";
import { useLanguage } from "@/contexts/language";

export function Navbar() {
  const { setLanguage, t } = useLanguage();

  return (
    <div class="navbar bg-neutral text-neutral-content px-4">
      <div class="navbar-start">
        <button class="btn btn-ghost text-xl">
          <img src="/favicon.svg" class="w-10 h-10" alt="Logo"></img>
        </button>
      </div>

      <div class="navbar-end">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn m-1 btn-ghost text-neutral-content ">
            {`${t().navbar.language} ${t().navbar.emoji}`}
          </div>
          <ul
            tabindex="-1"
            class="dropdown-content menu bg-neutral text-neutral-content rounded-box z-1 p-2 shadow-sm"
          >
            <li>
              <button
                class="whitespace-nowrap"
                onClick={() => {
                  setLanguage("pl");
                  //@ts-ignore
                  document.activeElement.blur();
                }}
              >
                Polski 🇵🇱
              </button>
            </li>
            <li>
              <button
                class="whitespace-nowrap"
                onClick={() => {
                  setLanguage("en");
                  //@ts-ignore
                  document.activeElement.blur();
                }}
              >
                English 🇬🇧
              </button>
            </li>
          </ul>
        </div>
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
