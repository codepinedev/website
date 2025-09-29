import fs from "node:fs/promises";
import path from "node:path";

import BlogItem from "../components/blogs/blog-item";
import PageHeader from "../components/headers/page-header";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date?: string;
  tags?: string[];
}

async function readBlogFiles(): Promise<BlogPost[]> {
  const contentDir = path.join(process.cwd(), "app", "content", "blogs");
  let entries: string[] = [];
  try {
    entries = await fs.readdir(contentDir);
  }
  catch {
    return [];
  }

  const mdxFiles = entries.filter(file => file.endsWith(".mdx") || file.endsWith(".md"));

  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const filePath = path.join(contentDir, file);
      const slug = file.replace(/\.(mdx|md)$/i, "");
      const source = await fs.readFile(filePath, "utf8");
      const stat = await fs.stat(filePath);

      // Title: first H1 line starting with '# '
      const lines = source.split(/\r?\n/);
      const titleLine = lines.find(l => l.trim().startsWith("# ")) ?? slug;
      const title = titleLine.replace(/^#\s+/, "").trim();

      // Description: first non-empty paragraph-ish line that isn't heading/list/blockquote
      const description
        = lines
          .map(l => l.trim())
          .find(
            l => l.length > 0 && !l.startsWith("#") && !l.startsWith("-") && !l.startsWith(">") && !l.startsWith("!") && !l.startsWith("<"),
          ) ?? "Read more";

      return {
        slug,
        title,
        description,
        date: stat.mtime.toISOString(),
        tags: [],
      } satisfies BlogPost;
    }),
  );

  // Sort by modified date desc
  posts.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
  return posts;
}

function formatDate(iso?: string) {
  if (!iso)
    return undefined;
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  catch {
    return undefined;
  }
}

export default async function BlogsPage() {
  const posts = await readBlogFiles();

  return (
    <main className="flex flex-col gap-6 max-w-4xl w-full">
      <PageHeader title="Blogs" description="Blogs for the community" />

      <section className="grid gap-4">
        {posts.map(post => (
          <BlogItem
            key={post.slug}
            title={post.title}
            description={post.description}
            href={`/blogs/${post.slug}`}
            date={formatDate(post.date)}
            tags={post.tags}
          />
        ),
        )}
      </section>
    </main>
  );
}
