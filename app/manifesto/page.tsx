import PageHeader from "../components/headers/page-header";

export default function ManifestoPage() {
const x= 9;
	x = "s";

	return (
    <main className="flex flex-col gap-8 max-w-4xl w-full">
      <PageHeader
        title="The Tunis Builders Manifesto"
        description="We are Tunisian developers, designers, and makers who believe that building great software is the fastest way to improve lives and create opportunity."
      />

      <section className="flex flex-col gap-4">
        <h2 className="text-base font-semibold">Our Values</h2>
        <ul className="list-disc pl-6 text-sm leading-7 text-muted-foreground flex flex-col gap-2">
          <li>
            <span className="font-medium text-foreground">Open by default:</span>
            {" "}
            we share ideas, code, and feedback freely.
          </li>
          <li>
            <span className="font-medium text-foreground">Learn & teach:</span>
            {" "}
            every meetup is a chance to level up together.
          </li>
          <li>
            <span className="font-medium text-foreground">Kindness first:</span>
            {" "}
            respect for each other across languages, genders, and backgrounds.
          </li>
          <li>
            <span className="font-medium text-foreground">Build, don’t just talk:</span>
            {" "}
            we ship projects, even small ones, to learn in public.
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-base font-semibold">Our Principles</h2>
        <ul className="list-disc pl-6 text-sm leading-7 text-muted-foreground flex flex-col gap-2">
          <li>We welcome newcomers and help them start.</li>
          <li>We favor transparent communication over hidden agendas.</li>
          <li>We celebrate local culture while connecting globally.</li>
        </ul>
      </section>

      <section className="text-sm leading-7 text-muted-foreground">
        Anyone who shares these values is welcome. Grab a laptop, an idea, and join us.
      </section>
    </main>
  );
}
