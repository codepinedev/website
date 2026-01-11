"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col gap-8 items-center text-center py-8">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Image
          src="/codepine-logo.png"
          alt="Codepine"
          width={160}
          height={160}
          priority
        />
      </motion.div>

      <motion.div
        className="space-y-6 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-cream">
          Welcome to the
          {" "}
          <span className="text-sage">Pine Lab</span>
        </h1>

        <p className="text-lg text-cream-muted leading-relaxed">
          A personal workshop for building and experimenting with software.
          Some projects ship, some stay experiments, all are built with curiosity.
        </p>
      </motion.div>

      {/* Quick stats */}
      <motion.div
        className="flex gap-8 md:gap-12 pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }}
      >
        <Stat value="4" label="Projects" />
        <Stat value="2" label="Live" />
        <Stat value="2" label="Growing" />
      </motion.div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-serif font-bold text-sage">{value}</div>
      <div className="text-xs text-cream-muted uppercase tracking-wider">{label}</div>
    </div>
  );
}
