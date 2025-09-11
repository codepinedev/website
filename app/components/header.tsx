import Image from "next/image";

import { ModeToggle } from "./toggle-mode";

export function Header() {
  return (
    <div className="flex flex-row border-b-1 border-muted p-4 justify-center">
      <div className="max-w-4xl w-full flex flex-row gap-2 justify-between">
        <Image src="/pine.png" alt="Pine icon" width={40} height={40} />
        <ModeToggle />
      </div>
    </div>
  );
}
