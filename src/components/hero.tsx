import { useLanguage } from '../context/language';

export function Hero() {
    const { t } = useLanguage();
    return (
        <div class="hero my-16 ">
            <div class="hero-content text-center">
                <div class="max-w-lg">
                    <style>{`
                        @keyframes gradient-shift {
                            0%,
                            100% {
                                background-position: 0% 50%;
                            }
                            50% {
                                background-position: 100% 50%;
                            }
                        }

                        .animated-gradient {
                            background: linear-gradient(
                                90deg,
                                #1eb854,
                                #10b981,
                                #14b8a6,
                                #06b6d4,
                                #1eb854
                            );
                            background-size: 200% 200%;
                            animation: gradient-shift 3s ease infinite;
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                        }
                    `}</style>
                    <h1 class="md:text-6xl text-4xl font-bold animated-gradient bg-primary-content">
                        Rafał Milichiewicz
                    </h1>
                    <h2 class="py-6">{t().hero.description}</h2>
                </div>
            </div>
        </div>
    );
}
