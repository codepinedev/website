import { Book, CreditCard, FileText, Filter, Video } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function ResourcesFilters() {
  return (
    <div className="flex justify-center">
      <ToggleGroup
        type="multiple"
        defaultValue={["all"]}
      >
        <ToggleGroupItem value="all" aria-label="Toggle all">
          <div className="flex flex-row gap-2 items-center p-4">
            <Filter />
            All
          </div>
        </ToggleGroupItem>
        <ToggleGroupItem value="payment" aria-label="Toggle payment">
          <div className="flex flex-row gap-2 items-center p-4">
            <CreditCard />
            Payment
          </div>
        </ToggleGroupItem>
        <ToggleGroupItem value="book" aria-label="Toggle book">
          <div className="flex flex-row gap-2 items-center p-4">
            <Book />
            Book
          </div>
        </ToggleGroupItem>
        <ToggleGroupItem value="video" aria-label="Toggle video">
          <div className="flex flex-row gap-2 items-center p-4">
            <Video />
            Video
          </div>
        </ToggleGroupItem>
        <ToggleGroupItem value="article" aria-label="Toggle article">
          <div className="flex flex-row gap-2 items-center p-4">
            <FileText />
            Article
          </div>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
