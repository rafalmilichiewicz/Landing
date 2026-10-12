import { LanguageProvider } from "@contexts/language";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { CoolTech } from "./cool-tech";
import { Hero } from "./hero";
import { Journey } from "./journey";
import { ProjectShowcase } from "./showcase";
import { SkillsShowcase } from "./skills";
import { Blog } from "./blog";
import { Tea } from "./tea";

export function App() {
  return (
    <LanguageProvider>
      <Navbar languageSelector={true} />

      <div class="grow content-center">
        <Hero></Hero>
        <Tea></Tea>
        <Blog></Blog>
        <ProjectShowcase></ProjectShowcase>
        <SkillsShowcase></SkillsShowcase>
        <Journey></Journey>
        <CoolTech></CoolTech>
      </div>

      <Footer />
    </LanguageProvider>
  );
}
