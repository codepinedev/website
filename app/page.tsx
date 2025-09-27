import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Socials } from "./components/socials";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 max-w-4xl w-full">
      <div className="flex justify-center">
        <Image src="/codepine-logo.png" alt="Pine icon" width={250} height={250} />
      </div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
        CODEPINE
      </h1>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Sharpen your coding skills and stay cozy!
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
        Codepine is an open, interactive and engaging community where any coder, from beginner to expert, can learn and grow together. Whether it's a tutorial, Q&A session, algorithmic problem solving or full application design and build, there's always something new to learn!
      </p>
      <div className="flex">
        <Button size="lg">Connect With Pine Community</Button>
      </div>
      <Socials />
    </main>
  );
}
