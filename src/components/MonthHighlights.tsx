import { CalendarHeart } from "lucide-react";
import type { MonthData, Region } from "../types";
import { monthName } from "../utils/date";
import { getMonthHighlights } from "../data/sheetsLoader";

const REGION_LABELS: Record<Region, string> = {
  NA: "North America",
  DE: "Germany",
};

interface MonthHighlightsProps {
  monthData: MonthData;
}

export function MonthHighlights({ monthData }: MonthHighlightsProps) {
  return (
    <section className="grid gap-3 md:grid-cols-2">
      {(["NA", "DE"] as Region[]).map((region) => {
        const highlights = getMonthHighlights(monthData, region);

        return (
          <div
            key={region}
            className="min-w-0 rounded-[8px] border border-zinc-200 bg-white/88 p-3"
          >
            <div className="mb-2 flex items-center gap-2 text-laifen-ink">
              <CalendarHeart size={16} />
              <h3 className="text-sm font-semibold">
                {REGION_LABELS[region]} · {monthName(monthData.month)}
              </h3>
            </div>

            <div className="calendar-scrollbar flex gap-2 overflow-x-auto pb-1">
              {highlights.length > 0 ? (
                highlights.map((highlight) => (
                  <span
                    key={`${region}-${highlight}`}
                    className="shrink-0 rounded-full border border-zinc-200 bg-laifen-mist px-3 py-1 text-xs font-medium text-laifen-graphite"
                  >
                    {highlight}
                  </span>
                ))
              ) : (
                <span className="rounded-full border border-zinc-200 bg-laifen-mist px-3 py-1 text-xs font-medium text-laifen-graphite">
                  Planning window
                </span>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}
