import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BlogItemProps {
  title: string;
  description: string;
  href: string;
  date?: string;
  tags?: string[];
}

export default function BlogItem({
  title,
  description,
  href,
  date,
  tags = [],
}: BlogItemProps) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="gap-2">
        <CardTitle>
          <Link href={href}>
            {title}
          </Link>
        </CardTitle>
        {date
          ? (
              <CardDescription>{date}</CardDescription>
            )
          : null}
        <CardDescription>{description}</CardDescription>
        {tags.length
          ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {tags.map(tag => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )
          : null}
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <CardAction className="col-start-auto row-start-auto justify-self-start">
          <Link
            href={href}
            className="text-primary font-medium"
            aria-label={`Read ${title}`}
          >
            Read →
          </Link>
        </CardAction>
      </CardContent>
    </Card>
  );
}
