import { ChevronLeft, ChevronRight } from "lucide-react";
import { MONTHS } from "../utils/date";

interface MonthSelectorProps {
  selectedMonth: number;
  onSelectMonth: (month: number) => void;
}

export function MonthSelector({
  selectedMonth,
  onSelectMonth,
}: MonthSelectorProps) {
  const goToPreviousMonth = () => {
    onSelectMonth(selectedMonth === 1 ? 12 : selectedMonth - 1);
  };

  const goToNextMonth = () => {
    onSelectMonth(selectedMonth === 12 ? 1 : selectedMonth + 1);
  };

  return (
    <section className="rounded-[8px] border border-zinc-200 bg-white/86 p-3 shadow-sm backdrop-blur">
      <div className="flex items-center gap-2">
        <button
          aria-label="Previous month"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] border border-zinc-200 text-laifen-graphite transition hover:border-laifen-cyan hover:text-laifen-ink"
          type="button"
          onClick={goToPreviousMonth}
        >
          <ChevronLeft size={18} />
        </button>

        <div className="calendar-scrollbar grid min-w-0 flex-1 grid-flow-col auto-cols-[minmax(7.2rem,1fr)] gap-2 overflow-x-auto pb-1">
          {MONTHS.map((month, index) => {
            const monthNumber = index + 1;
            const isSelected = selectedMonth === monthNumber;

            return (
              <button
                key={month}
                className={[
                  "rounded-[8px] border px-3 py-2 text-left transition",
                  isSelected
                    ? "border-laifen-ink bg-laifen-ink text-white shadow-sm"
                    : "border-zinc-200 bg-white text-laifen-graphite hover:border-laifen-cyan hover:text-laifen-ink",
                ].join(" ")}
                type="button"
                onClick={() => onSelectMonth(monthNumber)}
              >
                <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.12em] opacity-70">
                  2026
                </span>
                <span className="block truncate text-sm font-semibold">
                  {month}
                </span>
              </button>
            );
          })}
        </div>

        <button
          aria-label="Next month"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] border border-zinc-200 text-laifen-graphite transition hover:border-laifen-cyan hover:text-laifen-ink"
          type="button"
          onClick={goToNextMonth}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
