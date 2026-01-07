"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="space-y-8">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold">About</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Hey, I&apos;m Abderrahmen. I build things on the internet and sometimes
            they turn into useful tools. This is my corner for experiments—a place
            to try ideas without the pressure of perfection.
          </p>
          <p>
            Why &quot;Pine Lab&quot;? Pine trees are resilient, they grow slowly but steadily,
            and there are hundreds of species. Felt like a good metaphor for side projects
            that might take years to mature.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <Button variant="outline" size="sm" asChild>
          <Link
            href="https://github.com/codepinedev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="size-4" />
            GitHub
            <ArrowUpRight className="size-3" />
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link
            href="https://twitter.com/codepine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="size-4" />
            Twitter
            <ArrowUpRight className="size-3" />
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link href="mailto:hello@codepine.dev">
            <Mail className="size-4" />
            Email
          </Link>
        </Button>
      </motion.div>

      <motion.div
        className="pt-8 border-t"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-sm text-muted-foreground">
          Also writing sometimes on the
          {" "}
          <Link href="/blogs" className="text-primary hover:underline">
            blog
          </Link>
          . Check out the
          {" "}
          <Link href="/manifesto" className="text-primary hover:underline">
            manifesto
          </Link>
          {" "}
          if you want to know what this is really about.
        </p>
      </motion.div>
    </section>
  );
}
