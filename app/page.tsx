import About from "./components/sections/about";
import Hero from "./components/sections/hero";
import WorkInProgress from "./components/sections/work-in-progress";

export default function Home() {
  return (
    <main className="flex flex-col max-w-4xl w-full gap-y-42">
      <Hero />
      <WorkInProgress />
      <About />
    </main>
  );
}
