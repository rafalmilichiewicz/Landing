import { CoolTech } from "./cool-tech";
import { Hero } from "./hero";
import { Journey } from "./journey";
import { ProjectShowcase } from "./showcase";
import { SkillsShowcase } from "./skills";
import { Blog } from "./blog";
import { Tea } from "./tea";

export function App() {
  return (
    <>
      <Hero></Hero>
      <Tea></Tea>
      <Blog></Blog>
      <ProjectShowcase></ProjectShowcase>
      <SkillsShowcase></SkillsShowcase>
      <Journey></Journey>
      <CoolTech></CoolTech>
    </>
  );
}
