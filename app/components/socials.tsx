import { Github, Twitter } from "lucide-react";

export function Socials() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-24 w-full pt-20">
      <div className="">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/codepine_"
        >
          <Twitter />
          Twitter
        </a>
      </div>
      <div className="">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/codepinedev"
        >
          <Github />
          Github
        </a>

      </div>
    </div>
  );
}
