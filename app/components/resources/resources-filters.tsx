"use client";
import { Book, CreditCard, FileText, Filter, Video } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useIsMobile } from "@/lib/hooks/use-mobile";
import { cn } from "@/lib/utils";

export default function ResourcesFilters() {
  const isMobile = useIsMobile();
  return (
    <div
      className={cn(
        "flex justify-center",
        isMobile && "flex-col gap-2",
      )}
    >
      <div
        className={cn(
          isMobile
            ? "w-full overflow-x-auto"
            : "",
        )}
        style={
          isMobile
            ? {
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE 10+
                overflow: "auto",
              }
            : undefined
        }
      >
        <style>
          {isMobile
            ? `
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `
            : ""}
        </style>
        <ToggleGroup
          type="multiple"
          defaultValue={["all"]}
          size="sm"
          className={cn(
            isMobile
              ? "flex-nowrap flex-row flex min-w-max w-fit hide-scrollbar"
              : "",
          )}
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
    </div>
  );
}
