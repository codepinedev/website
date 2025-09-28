import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Socials } from "./components/socials";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 max-w-4xl w-full">
      <section className="flex flex-col gap-4">
        <div className="flex justify-center">
          <Image src="/codepine-logo.png" alt="Pine icon" width={250} height={250} />
        </div>

        <Badge variant="outline">🌲 Welcome to the Codepine Ecosystem</Badge>
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            A
            {" "}
            <span className="text-primary">Cozy</span>
            {" "}
            Developer
            <br />
            <span className="text-primary">Ecosystem</span>
          </h1>
          {" "}
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Codepine is an open, interactive and engaging community where any coder, from beginner to expert, can learn and grow together.
            Whether it's a tutorial, Q&A session, algorithmic problem solving or full application design and build, there's always something new to learn!
          </p>
        </div>
        <div className="flex">
          <Button size="lg">Connect With Pine Community</Button>
        </div>

        <Socials />
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex justify-center">
        </div>
      </section>
    </main>
  );
}
