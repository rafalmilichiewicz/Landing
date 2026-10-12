import { $language, t } from "@/stores/language";
import { useStore } from "@nanostores/solid";

export function Hero() {
  const language = useStore($language);
  return (
    <div class="hero mt-10 mb-10">
      <div class="hero-content text-center">
        <div class="max-w-lg ">
          <h1 class="md:text-6xl text-4xl font-bold animated-gradient-text animated-gradient  bg-primary-content">
            Rafał Milichiewicz
          </h1>
          <h2 class="py-6">{t(language()).hero.description}</h2>
        </div>
      </div>
    </div>
  );
}
