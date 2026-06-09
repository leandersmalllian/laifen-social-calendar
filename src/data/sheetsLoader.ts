import type { MonthData, Region, SocialPost } from "../types";
import { MONTHS, YEAR, toDisplayDay } from "../utils/date";
import { getHolidaysForMonth } from "./holidays";
import januarySeedCsv from "./social_calendar_jan.csv?raw";

const MONTH_INDEX: Record<string, number> = {
  jan: 1,
  january: 1,
  feb: 2,
  february: 2,
  mar: 3,
  march: 3,
  apr: 4,
  april: 4,
  may: 5,
  jun: 6,
  june: 6,
  jul: 7,
  july: 7,
  aug: 8,
  august: 8,
  sep: 9,
  sept: 9,
  september: 9,
  oct: 10,
  october: 10,
  nov: 11,
  november: 11,
  dec: 12,
  december: 12,
};

const REGION_COLUMNS = {
  NA: {
    pillar: 2,
    focus: 3,
    asset: 4,
    postCopy: 5,
    hashtags: 6,
    contentType: 7,
    notes: 8,
  },
  DE: {
    pillar: 10,
    focus: 11,
    asset: 12,
    postCopy: 13,
    hashtags: 14,
    contentType: 15,
    notes: 16,
  },
} satisfies Record<Region, Record<string, number>>;

export function parseCsvRows(csv: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = "";
  let insideQuotes = false;

  for (let index = 0; index < csv.length; index += 1) {
    const char = csv[index];
    const nextChar = csv[index + 1];

    if (char === "\"") {
      if (insideQuotes && nextChar === "\"") {
        value += "\"";
        index += 1;
      } else {
        insideQuotes = !insideQuotes;
      }
      continue;
    }

    if (char === "," && !insideQuotes) {
      row.push(value);
      value = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (char === "\r" && nextChar === "\n") {
        index += 1;
      }
      row.push(value);
      rows.push(row);
      row = [];
      value = "";
      continue;
    }

    value += char;
  }

  if (value.length > 0 || row.length > 0) {
    row.push(value);
    rows.push(row);
  }

  return rows;
}

export function parseHighlightCell(value: string): string[] {
  return value
    .replace(/\r/g, "")
    .split(/\s*\d+\.\s*/g)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseDateCell(value: string): string | null {
  const normalized = value.trim().replace(/\s+/g, " ");
  const match = normalized.match(/^(\d{1,2})\s+([A-Za-z]+)$/);

  if (!match) {
    return null;
  }

  const day = Number(match[1]);
  const month = MONTH_INDEX[match[2].toLowerCase()];

  if (!month || !Number.isFinite(day)) {
    return null;
  }

  return `${YEAR}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function hasPostContent(row: string[], region: Region): boolean {
  const columns = REGION_COLUMNS[region];
  return [
    columns.pillar,
    columns.focus,
    columns.asset,
    columns.postCopy,
    columns.hashtags,
    columns.contentType,
    columns.notes,
  ].some((column) => (row[column] ?? "").trim().length > 0);
}

function createPostFromRow(
  row: string[],
  region: Region,
  rowIndex: number,
  date: string,
): SocialPost {
  const columns = REGION_COLUMNS[region];
  const dayOfWeek = (row[1] ?? "").trim() || toDisplayDay(date);

  return {
    id: `seed-${date}-${region}-${rowIndex}`,
    date,
    dayOfWeek,
    region,
    pillar: (row[columns.pillar] ?? "").trim(),
    focus: (row[columns.focus] ?? "").trim(),
    asset: (row[columns.asset] ?? "").trim(),
    postCopy: (row[columns.postCopy] ?? "").trim(),
    hashtags: (row[columns.hashtags] ?? "").trim(),
    contentType: (row[columns.contentType] ?? "").trim(),
    notes: (row[columns.notes] ?? "").trim(),
  };
}

export function parseSocialCalendarCsv(csv: string): MonthData[] {
  const rows = parseCsvRows(csv);
  const rawHighlights = rows[0] ?? [];
  const posts: SocialPost[] = [];
  const highlights: Record<Region, string[]> = {
    NA: parseHighlightCell(rawHighlights[2] ?? ""),
    DE: parseHighlightCell(rawHighlights[10] ?? ""),
  };

  rows.slice(2).forEach((row, rowOffset) => {
    const date = parseDateCell(row[0] ?? "");

    if (!date) {
      return;
    }

    if (hasPostContent(row, "NA")) {
      posts.push(createPostFromRow(row, "NA", rowOffset, date));
    }

    if (hasPostContent(row, "DE")) {
      posts.push(createPostFromRow(row, "DE", rowOffset, date));
    }
  });

  return MONTHS.map((_, index) => {
    const month = index + 1;
    const monthPosts = posts.filter((post) =>
      post.date.startsWith(`${YEAR}-${String(month).padStart(2, "0")}`),
    );

    return {
      year: YEAR,
      month,
      highlights:
        month === 1
          ? highlights
          : {
              NA: [],
              DE: [],
            },
      posts: monthPosts,
    };
  });
}

export function createInitialMonthData(): MonthData[] {
  return parseSocialCalendarCsv(januarySeedCsv);
}

export function getMonthHighlights(
  monthData: MonthData,
  region: Region,
): string[] {
  const holidayHighlights = getHolidaysForMonth(monthData.month, region).map(
    (holiday) => holiday.labels[region],
  );

  return [...monthData.highlights[region], ...holidayHighlights];
}
