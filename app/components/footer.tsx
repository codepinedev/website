import Image from "next/image";
import Link from "next/link";

import { Socials } from "./socials";

export function Footer() {
  return (
    <footer className="w-full flex justify-center border-t">
      <div className="max-w-4xl w-full px-4 py-8 flex flex-col gap-6">
        <div className="flex flex-col gap-4 items-center">
          <Image src="/codepine-logo.png" alt="Pine icon" width={120} height={120} />
          <Socials />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
          <p>
            ©
            {" "}
            {new Date().getFullYear()}
            {" "}
            Codepine. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/manifesto" className="hover:underline hover:underline-offset-4">
              Manifesto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
