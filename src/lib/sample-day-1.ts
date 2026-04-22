/**
 * Hardcoded Day 1 task data for V0-1.
 *
 * Source: docs/y1-spring-guide-raw.md (user's own guide dump).
 * This file is temporary — V0-2 moves content to /content/tasks/y1-spring.json.
 *
 * Granularity choice: the raw dump has ~22 micro-steps; this compresses to 10
 * ordered tasks so the today view passes the "see-what-to-do-within-seconds"
 * UX test (CLAUDE.md §3). Timing cues stay inside task text so day-level
 * granularity is preserved (spec §2.5).
 */

export type Task = {
  id: string;
  title: string;
  detail?: string;
};

export type DayPlan = {
  day: number;
  season: 'spring';
  year: 1;
  expectedOutcome?: string;
  tasks: Task[];
};

export const sampleDay1: DayPlan = {
  day: 1,
  season: 'spring',
  year: 1,
  expectedOutcome: 'End the day at Foraging Level 1.',
  tasks: [
    {
      id: 'day1-wake',
      title: '6:00 AM — wake up; grab the 15 parsnip seeds from your mailbox.',
    },
    {
      id: 'day1-clear-stump',
      title: 'Clear the starter ground around the stump on your farm.',
    },
    {
      id: 'day1-chest',
      title: 'By 8:10 AM — chop to 50 wood, craft a chest, stash everything but your tools.',
    },
    {
      id: 'day1-exit-farm',
      title: 'By 8:30 AM — leave the farm via the top-left exit; forage the path.',
      detail: 'Carry scythe (weeds) and hoe (artifacts).',
    },
    {
      id: 'day1-loop-north',
      title: "Forage loop 1: Robin's → Community Centre → Bus Stop → back through town.",
      detail: "Whack weeds starting top-right, move down. Reach Robin's by ~8:50 AM.",
    },
    {
      id: 'day1-loop-south',
      title: "Forage loop 2: Marnie's → forest (top-right, anticlockwise) → past Haley's → beach.",
    },
    {
      id: 'day1-artifact',
      title: 'If you find an artifact before 4 PM — donate it to Gunther.',
      detail: '250 g reward; spend it on extra parsnip seeds before Pierre closes.',
    },
    {
      id: 'day1-seeds',
      title: 'Save one of each foraged item — craft them into 10 Spring Seeds each.',
      detail: 'Roughly 70 g better than selling the forage raw.',
    },
    {
      id: 'day1-plant',
      title: '6:00 PM — return to farm; plant as many parsnips as daylight allows.',
      detail: 'If time remains, start clearing the path toward the southern farm exit.',
    },
    {
      id: 'day1-sleep',
      title: 'Before sleep — do NOT put anything in the shipping bin.',
      detail: 'Eat forageables only if you are short on energy.',
    },
  ],
};
