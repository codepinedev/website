import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { ModeToggle } from "../toggle-mode";

export function Header() {
  return (
    <div className="flex flex-row justify-center sticky top-0 z-50">
      <div className="max-w-4xl w-full flex flex-row gap-2 justify-between p-4 m-2 rounded-3xl bg-surface/80 backdrop-blur-md">
        <Link href="/" className="transition-transform duration-300 hover:scale-105">
          <Image src="/pine.png" alt="Pine icon" width={40} height={40} />
        </Link>

        <div className="flex flex-row gap-2 justify-between">
          <div className="flex flex-row gap-2 items-center text-sm">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blogs">
                Blogs
              </Link>
            </Button>
            <Button variant="default" size="sm">Join us</Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
