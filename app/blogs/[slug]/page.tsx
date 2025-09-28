"use client";
import { ArrowLeft } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { use } from "react";

import { Button } from "@/components/ui/button";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();
  const Blog = dynamic(() => (import(`@/app/content/blogs/${slug}.mdx`)));

  return (
    <div className="flex flex-col gap-4 max-w-4xl w-full">
      <div className="flex justify-start">
        <Button variant="link" onClick={() => router.back()}>
          <ArrowLeft />
          {" "}
          Back
        </Button>
      </div>
      <Blog />
    </div>

  );
}
