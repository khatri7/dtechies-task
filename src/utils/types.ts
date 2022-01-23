export type Section = "listening" | "reading" | "writing" | "speaking";

export enum Sections {
  "listening" = 0,
  "reading",
  "writing",
  "speaking",
}

export interface ScoringSection {
  totalQuestions: number;
  questionsAttended: number;
  correctAnswers: number;
  band: number;
}

export interface Score {
  listening: ScoringSection;
  reading: ScoringSection;
  writing: ScoringSection;
  speaking: ScoringSection;
}
