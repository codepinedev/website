"use client";

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 max-w-4xl w-full">
      <article className="prose prose-zinc dark:prose-invert max-w-none">

        {children}
      </article>
    </div>
  );
}
