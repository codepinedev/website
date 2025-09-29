"use client";
import { ArrowLeft } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { use } from "react";

import { Button } from "@/components/ui/button";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const Blog = dynamic(() => (import(`@/app/content/blogs/${slug}.mdx`)));

  return (
    <div className="flex flex-col gap-4 max-w-4xl w-full">
      <div className="flex justify-start">
        <Button variant="link" asChild>
          <Link href="/blogs">
            <ArrowLeft />
            {" "}
            Back
          </Link>
        </Button>
      </div>
      <Blog />
    </div>

  );
}
