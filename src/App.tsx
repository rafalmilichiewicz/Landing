import { Footer } from './components/footer';
import { Hero } from './components/hero';
import { Navbar } from './components/navbar';
import ProjectShowcase from './components/showcase';
import { LanguageProvider } from './context/language';

function App() {
    return (
        <LanguageProvider>
            <Navbar />
            <div class="grow content-center">
                <Hero></Hero>
                <ProjectShowcase></ProjectShowcase>
                {/* <h1 class="">Hello World!</h1> */}
            </div>
            <Footer />
        </LanguageProvider>
    );
}

export default App;
