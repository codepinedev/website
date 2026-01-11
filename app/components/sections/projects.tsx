"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Gamepad2, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

// Pine names from different languages/species:
// Matsu (松) - Japanese for pine
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
    name: "Brain-dump App",
    pineName: "Pinely",
    pineOrigin: "Productivity",
    description: "A calm space to dump your thoughts and let AI help you organize them",
    status: "live",
    icon: <Image src="/pinely/logo.svg" alt="Pinely" width={24} height={24} className="size-6" />,
    url: "https://pinely.codepine.dev",
    tech: ["Next.js", "Google AI", "TypeScript"],
  },
  {
    name: "Leaderboard SDK",
    pineName: "Cone",
    pineOrigin: "松 · Japanese",
    description: "Open-source toolkit for competitive leaderboards",
    status: "beta",
    icon: <BarChart3 className="size-6" />,
    url: "https://github.com/codepinedev",
    tech: ["TypeScript", "SDK"],
  },
  {
    name: "Pine Arcade",
    pineName: "Çam",
    pineOrigin: "Turkish",
    description: "Browser games and interactive experiments",
    status: "building",
    icon: <Gamepad2 className="size-6" />,
    tech: ["React", "Canvas"],
  },
  {
    name: "Something New",
    pineName: "Sosna",
    pineOrigin: "Сосна · Russian",
    description: "An idea taking shape",
    status: "planned",
    icon: <Sparkles className="size-6" />,
    tech: ["???"],
  },
];

const statusStyles = {
  live: { label: "Live", className: "bg-sage/20 text-sage-light border-sage/30" },
  beta: { label: "Beta", className: "bg-sage/10 text-sage border-sage/20" },
  building: { label: "Building", className: "bg-ember/10 text-ember-light border-ember/20" },
  planned: { label: "Planned", className: "bg-surface-light text-cream-muted border-surface-light" },
};

export function Projects() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-serif font-bold text-cream">Projects</h2>
        <p className="text-cream-muted text-sm">
          Each project gets a pine name. It&apos;s a naming convention, not a philosophy.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, idx) => (
          <ProjectCard key={project.pineName} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const status = statusStyles[project.status];
  const isClickable = project.url && (project.status === "live" || project.status === "beta");

  const cardContent = (
    <Card className={`group h-full p-5 flex flex-col transition-all duration-300 ${isClickable ? "hover:bg-surface-light cursor-pointer" : ""}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 rounded-xl bg-sage/10 text-sage">
          {project.icon}
        </div>
        <Badge variant="outline" className={`text-xs rounded-2xl ${status.className}`}>
          {status.label}
        </Badge>
      </div>

      {/* Title */}
      <div className="mb-3">
        <h3 className="text-xl font-serif font-semibold text-cream flex items-center gap-1.5">
          {project.pineName}
          {isClickable && (
            <ArrowUpRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sage" />
          )}
        </h3>
        <p className="text-xs text-cream-muted mt-1">
          {project.name}
          <span className="opacity-50">
            {" "}
            ·
            {" "}
            {project.pineOrigin}
          </span>
        </p>
      </div>

      {/* Description */}
      <p className="text-sm text-cream-dark leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-surface-light">
        {project.tech.map(t => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded-xl bg-surface-light text-cream-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </Card>
  );

  if (isClickable && project.url) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.3, ease: "easeOut" }}
        className="h-full"
      >
        <Link href={project.url} target="_blank" rel="noopener noreferrer" className="h-full block">
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
      transition={{ delay: index * 0.1, duration: 0.3, ease: "easeOut" }}
      className="h-full"
    >
      {cardContent}
    </motion.div>
  );
}

export default Projects;
