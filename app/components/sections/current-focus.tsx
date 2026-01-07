"use client";

import { motion } from "framer-motion";
import { Coffee, GitCommit, Zap } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function CurrentFocus() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-bold">Currently Brewing</h2>
        <Coffee className="size-5 text-amber-600 dark:text-amber-400" />
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Main focus */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="size-4 text-amber-500" />
                  <span className="font-medium">Leaderboard SDK v1.0</span>
                </div>
                <span className="text-sm text-muted-foreground">90%</span>
              </div>
              <Progress value={90} className="h-2" />
              <p className="text-sm text-muted-foreground">
                Finishing up documentation and preparing the first stable release.
                API is locked, just polishing edges.
              </p>
            </div>

            {/* Recent activity */}
            <div className="border-t pt-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Recent Commits</p>
              <div className="space-y-2">
                <CommitItem message="fix: handle edge case in score submission" time="2h ago" />
                <CommitItem message="docs: add quickstart guide" time="5h ago" />
                <CommitItem message="feat: add batch score updates" time="1d ago" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

function CommitItem({ message, time }: { message: string; time: string }) {
  return (
    <motion.div
      className="flex items-start gap-2 text-sm"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <GitCommit className="size-4 text-muted-foreground mt-0.5 shrink-0" />
      <span className="text-foreground/80 flex-1">{message}</span>
      <span className="text-xs text-muted-foreground shrink-0">{time}</span>
    </motion.div>
  );
}

export default CurrentFocus;
