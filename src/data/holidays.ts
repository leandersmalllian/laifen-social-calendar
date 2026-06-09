import type { Holiday, Region } from "../types";

export const HOLIDAYS_2026: Holiday[] = [
  {
    id: "new-year",
    date: "2026-01-01",
    region: "BOTH",
    labels: { NA: "New Year", DE: "Neujahr" },
    type: "seasonal",
  },
  {
    id: "mlk-day",
    date: "2026-01-19",
    region: "NA",
    labels: { NA: "MLK Day", DE: "MLK Day" },
    type: "cultural",
  },
  {
    id: "valentines",
    date: "2026-02-14",
    region: "BOTH",
    labels: { NA: "Valentine's Day", DE: "Valentinstag" },
    type: "retail",
  },
  {
    id: "presidents-day",
    date: "2026-02-16",
    region: "NA",
    labels: { NA: "Presidents' Day", DE: "Presidents' Day" },
    type: "cultural",
  },
  {
    id: "karfreitag",
    date: "2026-04-03",
    region: "DE",
    labels: { NA: "Good Friday", DE: "Karfreitag" },
    type: "cultural",
  },
  {
    id: "easter",
    date: "2026-04-05",
    region: "BOTH",
    labels: { NA: "Easter", DE: "Ostern" },
    type: "seasonal",
  },
  {
    id: "tag-der-arbeit",
    date: "2026-05-01",
    region: "DE",
    labels: { NA: "Labor Day", DE: "Tag der Arbeit" },
    type: "cultural",
  },
  {
    id: "mothers-day",
    date: "2026-05-10",
    region: "BOTH",
    labels: { NA: "Mother's Day", DE: "Muttertag" },
    type: "retail",
  },
  {
    id: "vatertag",
    date: "2026-05-14",
    region: "DE",
    labels: { NA: "Father's Day", DE: "Vatertag" },
    type: "cultural",
  },
  {
    id: "pfingsten",
    date: "2026-05-24",
    region: "DE",
    labels: { NA: "Pentecost", DE: "Pfingsten" },
    type: "cultural",
  },
  {
    id: "memorial-day",
    date: "2026-05-25",
    region: "NA",
    labels: { NA: "Memorial Day", DE: "Memorial Day" },
    type: "cultural",
  },
  {
    id: "fathers-day",
    date: "2026-06-21",
    region: "NA",
    labels: { NA: "Father's Day", DE: "Father's Day" },
    type: "retail",
  },
  {
    id: "independence-day",
    date: "2026-07-04",
    region: "NA",
    labels: { NA: "Independence Day", DE: "Independence Day" },
    type: "cultural",
  },
  {
    id: "labor-day",
    date: "2026-09-07",
    region: "NA",
    labels: { NA: "Labor Day", DE: "Labor Day" },
    type: "cultural",
  },
  {
    id: "deutsche-einheit",
    date: "2026-10-03",
    region: "DE",
    labels: {
      NA: "German Unity Day",
      DE: "Tag der Deutschen Einheit",
    },
    type: "cultural",
  },
  {
    id: "halloween",
    date: "2026-10-31",
    region: "BOTH",
    labels: { NA: "Halloween", DE: "Halloween" },
    type: "seasonal",
  },
  {
    id: "thanksgiving",
    date: "2026-11-26",
    region: "NA",
    labels: { NA: "Thanksgiving", DE: "Thanksgiving" },
    type: "seasonal",
  },
  {
    id: "black-friday",
    date: "2026-11-27",
    region: "NA",
    labels: { NA: "Black Friday", DE: "Black Friday" },
    type: "retail",
  },
  {
    id: "christmas",
    date: "2026-12-25",
    region: "BOTH",
    labels: { NA: "Christmas", DE: "Weihnachten" },
    type: "seasonal",
  },
  {
    id: "silvester",
    date: "2026-12-31",
    region: "DE",
    labels: { NA: "New Year's Eve", DE: "Silvester" },
    type: "seasonal",
  },
];

export function getHolidaysForDate(date: string, region: Region): Holiday[] {
  return HOLIDAYS_2026.filter(
    (holiday) =>
      holiday.date === date &&
      (holiday.region === region || holiday.region === "BOTH"),
  );
}

export function getHolidaysForMonth(month: number, region: Region): Holiday[] {
  const monthPrefix = `2026-${String(month).padStart(2, "0")}`;

  return HOLIDAYS_2026.filter(
    (holiday) =>
      holiday.date.startsWith(monthPrefix) &&
      (holiday.region === region || holiday.region === "BOTH"),
  );
}
