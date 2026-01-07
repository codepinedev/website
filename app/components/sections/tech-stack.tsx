"use client";

import { motion } from "framer-motion";

const tools = [
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Node.js", category: "Runtime" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Tailwind", category: "Styling" },
  { name: "Vercel", category: "Hosting" },
  { name: "GitHub", category: "Code" },
];

export function TechStack() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Tools of Choice</h2>
        <p className="text-muted-foreground text-sm">
          The usual suspects. Nothing fancy, just tools that work.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {tools.map((tool, idx) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="group relative"
          >
            <div className="px-4 py-2 rounded-lg border bg-card hover:bg-accent transition-colors cursor-default">
              <span className="font-medium text-sm">{tool.name}</span>
            </div>
            {/* Tooltip */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
                {tool.category}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
