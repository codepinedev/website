import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import HeaderLink from "./header-link";

export function Header() {
  return (
    <div className="flex flex-row justify-center sticky top-0 z-50">
      <div className="max-w-4xl w-full flex flex-row gap-2 justify-between p-2 m-2 rounded-2xl  bg-background/50 backdrop-blur-sm shadow-sm">
        <Link href="/">
          <Image src="/pine.png" alt="Pine icon" width={40} height={40} />
        </Link>

        <div className="flex flex-row gap-2 justify-between">
          <div className="flex flex-row gap-2 items-center text-sm">
            <HeaderLink href="/resources">Resources</HeaderLink>
            <Button variant="default" size="sm">Join us</Button>
          </div>
          {/* <ModeToggle /> */}
        </div>
      </div>
    </div>
  );
}
