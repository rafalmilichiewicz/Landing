import { CoolTech } from './components/cool-tech';
import { Footer } from './components/footer';
import { Hero } from './components/hero';
import { Navbar } from './components/navbar';
import ProjectShowcase from './components/showcase';
import SkillsShowcase from './components/skills';
import { LanguageProvider } from './context/language';

function App() {
    return (
        <LanguageProvider>
            <Navbar />
            <div class="grow content-center">
                <Hero></Hero>
                <ProjectShowcase></ProjectShowcase>
                <SkillsShowcase></SkillsShowcase>
                <CoolTech></CoolTech>
            </div>
            <Footer />
        </LanguageProvider>
    );
}

export default App;
