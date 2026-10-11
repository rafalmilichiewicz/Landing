import { LanguageProvider } from "@contexts/language";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { CoolTech } from "./cool-tech";
import { Hero } from "./hero";
import { Journey } from "./journey";
import { ProjectShowcase } from "./showcase";
import { SkillsShowcase } from "./skills";

export function App() {
  return (
    <LanguageProvider>
      <Navbar />

      <div class="grow content-center">
        <Hero></Hero>
        <ProjectShowcase></ProjectShowcase>
        <SkillsShowcase></SkillsShowcase>
        <Journey></Journey>
        <CoolTech></CoolTech>
      </div>

      <Footer />
    </LanguageProvider>
  );
}
