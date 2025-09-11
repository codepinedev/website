import { Github, Twitter } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-center gap-4">
        <div className="text-8xl font-bold text-center">
          Code Pine
        </div>
        <div className="text-2xl text-center">
          Sharpen your coding skills and stay cozy!
        </div>
        <div className="flex justify-center">
          <Button size="lg">Work In Progress</Button>
        </div>
      </main>
      {/* <footer className="flex flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/codepinedev"
        >
          <Github />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/codepine_"
        >
          <Twitter />
          Twitter
        </a>
      </footer> */}
    </div>
  );
}
