import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { LanguageProvider } from './context/language';

function App() {
    return (
        <LanguageProvider>
            <Navbar />
            <div class="grow m-auto content-center">
                <h1 class="">Hello World!</h1>
            </div>
            <Footer />
        </LanguageProvider>
    );
}

export default App;
