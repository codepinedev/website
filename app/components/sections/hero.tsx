import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import MotionMarquee from "../motion-marquee";

export default function Hero() {
  return (
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
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
          Codepine is an open, interactive and engaging community where any coder, from beginner to expert, can learn and grow together.
          Whether it's a tutorial, Q&A session, algorithmic problem solving or full application design and build, there's always something new to learn!
        </p>
      </div>

      <div className="flex justify-center">
        <Button size="lg" variant="link">
          Connect With Pine Community
          <ArrowRight size={18} />
        </Button>
      </div>
      <MotionMarquee
        className="py-2"
        gapClassName="gap-4"
        speedPxPerSecond={30}
        items={[
          "Tutorials",
          "Q&A Sessions",
          "Algorithm Practice",
          "App Design",
          "Community Events",
          "Mentorship",
          "Open Source Projects",
          "Workshops",
          "Code Reviews",
          "Networking",
        ].map((service, idx) => (
          <div key={idx} className="flex items-center gap-1 text-xs">
            <div className="bg-primary text-primary-foreground rounded-md w-1 h-1" />
            {service}
          </div>
        ))}
      />
    </section>
  );
}
