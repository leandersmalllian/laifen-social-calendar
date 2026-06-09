export type Region = "NA" | "DE";

export type SyncStatus = "idle" | "syncing" | "success" | "error" | "disabled";

export interface SocialPost {
  id: string;
  date: string;
  dayOfWeek: string;
  region: Region;
  pillar: string;
  focus: string;
  asset: string;
  postCopy: string;
  hashtags: string;
  contentType: string;
  notes: string;
}

export interface MonthData {
  year: number;
  month: number;
  highlights: Record<Region, string[]>;
  posts: SocialPost[];
}

export interface Holiday {
  id: string;
  date: string;
  region: Region | "BOTH";
  labels: Record<Region, string>;
  type: "cultural" | "retail" | "seasonal" | "brand";
}

export interface CalendarDay {
  date: string;
  dayOfMonth: number;
  dayOfWeek: string;
  isWeekend: boolean;
}

export interface PostDraft {
  id?: string;
  date: string;
  region: Region;
  pillar: string;
  focus: string;
  asset: string;
  postCopy: string;
  hashtags: string;
  contentType: string;
  notes: string;
}
