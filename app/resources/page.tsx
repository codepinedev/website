import PageHeader from "../components/headers/page-header";
import ResourceItem from "../components/resources/resource-item";
import ResourcesFilters from "../components/resources/resources-filters";

export default function Resources() {
  return (
    <main className="flex flex-col gap-4 max-w-4xl w-full">

      <PageHeader title="Resources" description="Resources for the community" />
      <ResourcesFilters />
      <ResourceItem />
    </main>
  );
}
