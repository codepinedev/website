"use client";

import dynamic from "next/dynamic";
import { use } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const Blog = dynamic(() => (import(`@/app/content/blogs/${slug}.mdx`)));

  return (
    <Blog />
  );
}

export const dynamicParams = false;
