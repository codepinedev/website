import Image from "next/image";
import Link from "next/link";

import HeaderLink from "./header-link";

export function Header() {
  return (
    <div className="flex flex-row border-b-1 border-muted p-4 justify-center">
      <div className="max-w-4xl w-full flex flex-row gap-2 justify-between">
        <Link href="/">
          <Image src="/pine.png" alt="Pine icon" width={40} height={40} />
        </Link>

        <div className="flex flex-row gap-2 justify-between">
          <div className="flex flex-row gap-2 items-center text-sm">
            <HeaderLink href="/resources">Resources</HeaderLink>
            <HeaderLink href="/blog">Blog</HeaderLink>
          </div>
          {/* <ModeToggle /> */}
        </div>
      </div>
    </div>
  );
}
