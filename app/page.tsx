"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Socials } from "./components/socials";

export default function Home() {
  return (
    <main className="flex flex-col max-w-4xl w-full gap-8">
      <section className="flex flex-col gap-4 min-h-screen">
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
        {/* Auto-scrolling services section */}
        <div className="relative w-full overflow-x-hidden py-2">
          <div
            className="flex gap-4 whitespace-nowrap animate-scroll-services"
          >
            {[
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
              <Badge key={idx} variant="default">
                {service}
              </Badge>
            ))}
            {/* Duplicate for seamless loop */}
            {[
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
              <Badge key={`dup-${idx}`}>
                {service}
              </Badge>
            ))}
          </div>

        </div>
      </section>
      {/* About section */}
      <section className="flex flex-col gap-4 min-h-screen/2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-bold text-primary">About</h4>
            <p className="text-justify leading-7 [&:not(:first-child)]:mt-4">
              Codepine is an open, interactive and engaging community where any coder, from beginner to expert, can learn and grow together.
              Whether it's a tutorial, Q&A session, algorithmic problem solving or full application design and build, there's always something new to learn!
            </p>
            <Button variant="link">
              <Link href="/resources">
                View Resources
              </Link>
              <ArrowRight size={18} />
            </Button>
          </div>
          <Image src="/hero.jpeg" alt="Pine icon" width={500} height={500} className="rounded-lg w-full" />
        </div>
        <Socials />
      </section>

    </main>
  );
}
