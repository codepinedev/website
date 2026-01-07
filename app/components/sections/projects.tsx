"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Gamepad2, Sparkles } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Pine names from different languages/species:
// Matsу (松) - Japanese for pine
// Çam - Turkish for pine
// Pinheiro - Portuguese for pine
// Сосна (Sosna) - Russian for pine

interface Project {
  name: string;
  pineName: string;
  pineOrigin: string;
  description: string;
  status: "live" | "beta" | "building" | "planned";
  icon: React.ReactNode;
  url?: string;
  tech: string[];
}

const projects: Project[] = [
  {
    name: "Leaderboard SDK",
    pineName: "Matsu",
    pineOrigin: "松 · Japanese Pine",
    description: "Open-source toolkit for adding competitive leaderboards to any app. Track scores, rank players, display results.",
    status: "beta",
    icon: <BarChart3 className="size-5" />,
    url: "https://github.com/codepinedev",
    tech: ["TypeScript", "SDK", "Open Source"],
  },
  {
    name: "Pine Arcade",
    pineName: "Çam",
    pineOrigin: "Turkish Pine",
    description: "A collection of small browser games and interactive experiments. Built for fun, not profit.",
    status: "building",
    icon: <Gamepad2 className="size-5" />,
    tech: ["React", "Canvas", "Games"],
  },
  {
    name: "Something New",
    pineName: "Sosna",
    pineOrigin: "Сосна · Russian Pine",
    description: "An idea taking shape. Check back soon.",
    status: "planned",
    icon: <Sparkles className="size-5" />,
    tech: ["???"],
  },
];

const statusStyles = {
  live: { label: "Live", className: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20" },
  beta: { label: "Beta", className: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20" },
  building: { label: "Building", className: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20" },
  planned: { label: "Planned", className: "bg-muted text-muted-foreground border-border" },
};

export function Projects() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="text-muted-foreground">
          Each project gets a pine name. It&apos;s a naming convention, not a philosophy.
        </p>
      </div>

      <div className="grid gap-4">
        {projects.map((project, idx) => (
          <ProjectCard key={project.name} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const status = statusStyles[project.status];
  const isClickable = project.url && (project.status === "live" || project.status === "beta");

  const cardContent = (
    <Card className={`group transition-all duration-200 ${isClickable ? "hover:border-primary/50 hover:shadow-md cursor-pointer" : ""}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              {project.icon}
            </div>
            <div>
              <CardTitle className="text-lg flex items-center gap-2">
                {project.pineName}
                {isClickable && (
                  <ArrowUpRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </CardTitle>
              <p className="text-xs text-muted-foreground mt-0.5">
                {project.name}
                {" "}
                <span className="opacity-50">
                  ·
                  {" "}
                  {project.pineOrigin}
                </span>
              </p>
            </div>
          </div>
          <Badge variant="outline" className={status.className}>
            {status.label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <CardDescription className="text-sm leading-relaxed">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  if (isClickable && project.url) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <Link href={project.url} target="_blank" rel="noopener noreferrer">
          {cardContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {cardContent}
    </motion.div>
  );
}

export default Projects;
