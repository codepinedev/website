import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { ModeToggle } from "../toggle-mode";

export function Header() {
  return (
    <div className="flex flex-row justify-center sticky top-0 z-50">
      <div className="max-w-4xl w-full flex flex-row gap-2 justify-between p-4 m-2 rounded-4xl bg-background/50 backdrop-blur-sm shadow-sm">
        <Link href="/">
          <Image src="/pine.png" alt="Pine icon" width={40} height={40} />
        </Link>

        <div className="flex flex-row gap-2 justify-between">
          <div className="flex flex-row gap-2 items-center text-sm">
            <Button variant="link" size="sm">
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
