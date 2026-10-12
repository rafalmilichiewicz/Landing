import { useLanguage } from "@/contexts/language";

export function Hero() {
  const { t } = useLanguage();
  return (
    <div class="hero my-16 ">
      <div class="hero-content text-center">
        <div class="max-w-lg ">
          <h1 class="md:text-6xl text-4xl font-bold animated-gradient-text animated-gradient  bg-primary-content">
            Rafał Milichiewicz
          </h1>
          <h2 class="py-6">{t().hero.description}</h2>
        </div>
      </div>
    </div>
  );
}
