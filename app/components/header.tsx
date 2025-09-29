import Image from "next/image";
import Link from "next/link";

import { ModeToggle } from "./toggle-mode";

export function Header() {
  return (
    <div className="flex flex-row border-b-1 border-muted p-4 justify-center">
      <div className="max-w-4xl w-full flex flex-row gap-2 justify-between">
        <div>
          <Image src="/pine.png" alt="Pine icon" width={40} height={40} />
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <div>
            Blog
          </div>
          <div>
            Resources
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
