import { Book, CreditCard, Eye, FileText, Video } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface ResourceItemProps {
  title: string;
  description: string;
  link: string;
  type: "book" | "video" | "article" | "payment";
}

export default function ResourceItem({ title, description, link, type }: ResourceItemProps) {
  return (
    <div className="w-full p-4 border rounded-md shadow-sm bg-card">
      <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row gap-4 items-center">
          {type === "book" && <Book size={18} />}
          {type === "video" && <Video size={18} />}
          {type === "article" && <FileText size={18} />}
          {type === "payment" && <CreditCard size={18} />}
          <div>
            <p className="text-sm font-bold">{title}</p>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Button variant="link" asChild>
            <Link href={link}>
              <Eye size={18} />
              Visit Resource
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
