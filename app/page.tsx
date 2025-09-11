import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="text-8xl font-bold text-center flex gap-4">
          <Image src="/pine.png" alt="Pine icon" width={100} height={100} />
          Code Pine
        </div>
        <div className="text-2xl text-center">
          Sharpen your coding skills and stay cozy!
        </div>
        <div className="flex justify-center">
          <Button size="lg">Work In Progress</Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn (Under Construction)
        </a>
      </footer>
    </div>
  );
}
