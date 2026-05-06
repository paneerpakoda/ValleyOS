// Static content types for bundled JSON in /content.
// User state lives in SQLite; this is the authored layer.

export type Season = "spring" | "summer" | "fall" | "winter";

export type TaskCategory =
  | "harvest"
  | "plant"
  | "forage"
  | "chop"
  | "clear"
  | "craft"
  | "travel"
  | "donate"
  | "reference"
  | "mixed";

export interface BundleContext {
  bundle: string;
  note: string;
}

export interface TaskDeadline {
  day: number;
  consequence?: string;
}

export interface TaskTemplate {
  id: string;
  order: number;
  timeHint?: string;
  title: string;
  instructions: string;
  category: TaskCategory;
  wikiUrl?: string;
  bundleContext?: BundleContext;
  deadline?: TaskDeadline;
}

export interface DayTemplate {
  day: number;
  summary: string;
  expectedOutcomes: string[];
  tasks: TaskTemplate[];
}

export interface SeasonContent {
  season: Season;
  year: number;
  days: DayTemplate[];
}
