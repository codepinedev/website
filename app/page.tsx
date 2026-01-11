import FallingNeedles from "./components/falling-needles";
import About from "./components/sections/about";
import CurrentFocus from "./components/sections/current-focus";
import Hero from "./components/sections/hero";
import Projects from "./components/sections/projects";
import TechStack from "./components/sections/tech-stack";

export default function Home() {
  return (
    <>
      <FallingNeedles count={25} />
      <main className="flex flex-col max-w-4xl w-full gap-y-16 md:gap-y-20 relative z-10 py-8">
        <Hero />
        <CurrentFocus />
        <Projects />
        <TechStack />
        <About />
      </main>
    </>
  );
}
