import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function About() {
  return (
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
    </section>
  );
}
