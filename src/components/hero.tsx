import { useLanguage } from '../context/language';

export function Hero() {
    const { t } = useLanguage();
    return (
        <div class="hero my-16 ">
            <div class="hero-content text-center">
                <div class="max-w-lg">
                    <h1 class="text-5xl font-bold">Rafał Milichiewicz</h1>
                    <h2 class="py-6">{t().hero.description}</h2>
                </div>
            </div>
        </div>
    );
}
