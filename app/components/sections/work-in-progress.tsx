import { Coffee } from "lucide-react";

import WorkInProgressItem from "../work-in-progress/work-in-progress-item";

export default function WorkInProgress() {
  return (
    <section className="flex flex-col gap-12  items-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
        🌲 Currently Working On?
      </h1>

      <div className="text-center flex flex-col gap-2 items-center">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          We are working on this section. Please check back later.
        </h4>
        <p className="text-muted-foreground text-sm flex items-center gap-2">
          <Coffee />
          Fueled by coffee and curiosity!
        </p>
      </div>

      <WorkInProgressItem />

    </section>
  );
}
