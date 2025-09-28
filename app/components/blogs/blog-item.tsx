"use client";
import { useRouter } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
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
  const router = useRouter();
  return (
    <Card className="hover:shadow-md">
      <CardHeader className="gap-2">
        <CardTitle>{title}</CardTitle>
        {date
          ? (
              <CardDescription>{date}</CardDescription>
            )
          : null}
        <CardDescription>
          {description}
          <Button variant="link" onClick={() => router.push(href)}>
            Read More →
          </Button>
        </CardDescription>
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
    </Card>
  );
}
