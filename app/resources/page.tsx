import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import PageHeader from "../components/headers/page-header";
import ResourceItem from "../components/resources/resource-item";
import ResourcesFilters from "../components/resources/resources-filters";

export default function Resources() {
  return (
    <main className="flex flex-col gap-4 max-w-4xl w-full">

      <PageHeader title="Resources" description="Resources for the community" />
      <div className="flex justify-end">
        <Button>
          <Plus />
          Add Resource
        </Button>
      </div>

      <ResourcesFilters />
      <ResourceItem
        title="React Documentation"
        description="The official React documentation with guides, tutorials, and API reference."
        link="https://react.dev/"
        type="article"
      />
      <ResourceItem
        title="TypeScript Handbook"
        description="Comprehensive guide and documentation for TypeScript."
        link="https://www.typescriptlang.org/docs/handbook/intro.html"
        type="payment"
      />
      <ResourceItem
        title="MDN Web Docs"
        description="Resources for developers, by developers. Extensive documentation for HTML, CSS, and JavaScript."
        link="https://developer.mozilla.org/"
        type="video"
      />
      <ResourceItem
        title="freeCodeCamp"
        description="Learn to code for free with millions of other people around the world."
        link="https://www.freecodecamp.org/"
        type="book"
      />
      <ResourceItem
        title="Frontend Mentor"
        description="Improve your front-end coding skills by building real projects."
        link="https://www.frontendmentor.io/"
        type="video"
      />
    </main>
  );
}
