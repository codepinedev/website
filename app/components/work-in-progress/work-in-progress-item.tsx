import { Clock, WavesLadder } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function WorkInProgressItem() {
  const progressPercent = 90;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <WavesLadder className="text-primary" />
          <CardTitle className="text-xl">Leaderboard SDK Project</CardTitle>
        </div>
        <Badge variant="secondary">In Progress</Badge>
      </CardHeader>
      <CardContent className="grid gap-4">
        <CardDescription>
          The Leaderboard SDK is an open-source toolkit designed to help
          developers easily integrate competitive leaderboards into their
          applications. It provides a simple API for tracking user scores,
          ranking participants, and displaying real-time results. Whether you're
          building a game, coding challenge platform, or community app, the SDK
          aims to make adding leaderboards fast, flexible, and fun.
        </CardDescription>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Clock className="opacity-80" /> Updated yesterday
          </span>
          <span>{progressPercent}% complete</span>
        </div>

        <div className="h-2 w-full rounded-full bg-muted">
          <div
            className="h-2 rounded-full bg-primary"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
