import About from "./components/sections/about";
import Hero from "./components/sections/hero";

export default function Home() {
  return (
    <main className="flex flex-col max-w-4xl w-full gap-8">
      <Hero />

      <About />
    </main>
  );
}
