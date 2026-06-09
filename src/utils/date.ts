import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  startOfMonth,
} from "date-fns";
import type { CalendarDay } from "../types";

export const YEAR = 2026;

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function toDateId(date: Date): string {
  return format(date, "yyyy-MM-dd");
}

export function toDisplayDay(dateId: string): string {
  return format(new Date(`${dateId}T00:00:00`), "EEE");
}

export function getMonthDays(month: number): CalendarDay[] {
  const first = startOfMonth(new Date(YEAR, month - 1, 1));
  const last = endOfMonth(first);

  return eachDayOfInterval({ start: first, end: last }).map((date) => ({
    date: toDateId(date),
    dayOfMonth: Number(format(date, "d")),
    dayOfWeek: format(date, "EEE"),
    isWeekend: [0, 6].includes(getDay(date)),
  }));
}

export function getCalendarGrid(month: number): Array<CalendarDay | null> {
  const days = getMonthDays(month);
  const leadingBlankCount = (getDay(new Date(YEAR, month - 1, 1)) + 6) % 7;
  const cells: Array<CalendarDay | null> = [
    ...Array.from({ length: leadingBlankCount }, () => null),
    ...days,
  ];
  const trailingBlankCount = Math.ceil(cells.length / 7) * 7 - cells.length;

  return [
    ...cells,
    ...Array.from({ length: trailingBlankCount }, () => null),
  ];
}

export function firstDateOfMonth(month: number): string {
  return `${YEAR}-${String(month).padStart(2, "0")}-01`;
}

export function monthName(month: number): string {
  return MONTHS[month - 1];
}
