import { Edit3, Plus } from "lucide-react";
import type { Region, SocialPost } from "../types";
import { getCalendarGrid, monthName, WEEKDAYS } from "../utils/date";
import { getHolidaysForDate } from "../data/holidays";

const REGION_NAMES: Record<Region, string> = {
  NA: "North America",
  DE: "Germany",
};

const REGION_ACCENTS: Record<Region, string> = {
  NA: "border-laifen-cyan/50 bg-laifen-cyan/10",
  DE: "border-laifen-green/60 bg-laifen-green/15",
};

interface CalendarMonthProps {
  month: number;
  posts: SocialPost[];
  region: Region;
  selectedDate: string;
  onAddPost: (date: string, region: Region) => void;
  onEditPost: (post: SocialPost) => void;
  onSelectDate: (date: string) => void;
}

export function CalendarMonth({
  month,
  posts,
  region,
  selectedDate,
  onAddPost,
  onEditPost,
  onSelectDate,
}: CalendarMonthProps) {
  const grid = getCalendarGrid(month);
  const postsByDate = posts
    .filter((post) => post.region === region)
    .reduce<Record<string, SocialPost[]>>((accumulator, post) => {
      accumulator[post.date] = [...(accumulator[post.date] ?? []), post];
      return accumulator;
    }, {});

  return (
    <section
      className={[
        "min-w-[30rem] rounded-[8px] border bg-white/92 p-3 shadow-sm",
        REGION_ACCENTS[region],
      ].join(" ")}
    >
      <header className="mb-3 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
            {region}
          </p>
          <h2 className="truncate text-lg font-semibold text-laifen-ink">
            {REGION_NAMES[region]} · {monthName(month)}
          </h2>
        </div>

        <span className="rounded-full bg-laifen-ink px-2.5 py-1 text-xs font-semibold text-white">
          {posts.filter((post) => post.region === region).length} posts
        </span>
      </header>

      <div className="grid grid-cols-7 overflow-hidden rounded-[8px] border border-zinc-200 bg-white">
        {WEEKDAYS.map((weekday) => (
          <div
            key={`${region}-${weekday}`}
            className="border-b border-zinc-200 bg-laifen-mist px-2 py-2 text-center text-[0.68rem] font-bold uppercase tracking-[0.12em] text-zinc-500"
          >
            {weekday}
          </div>
        ))}

        {grid.map((day, index) => {
          if (!day) {
            return (
              <div
                key={`${region}-empty-${index}`}
                className="min-h-[6.75rem] border-b border-r border-zinc-100 bg-zinc-50/80 last:border-r-0"
              />
            );
          }

          const dayPosts = postsByDate[day.date] ?? [];
          const holidays = getHolidaysForDate(day.date, region);
          const isSelected = selectedDate === day.date;

          return (
            <div
              key={`${region}-${day.date}`}
              className={[
                "group min-h-[6.75rem] border-b border-r border-zinc-100 bg-white p-2 outline-none transition last:border-r-0 hover:bg-laifen-mist/70",
                day.isWeekend ? "bg-zinc-50/70" : "",
                holidays.length > 0 ? "bg-laifen-green/10" : "",
                isSelected ? "ring-2 ring-inset ring-laifen-cyan" : "",
              ].join(" ")}
              role="button"
              tabIndex={0}
              onClick={() => onSelectDate(day.date)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  onSelectDate(day.date);
                }
              }}
            >
              <div className="mb-1 flex items-start justify-between gap-1">
                <div>
                  <span className="text-sm font-bold text-laifen-ink">
                    {day.dayOfMonth}
                  </span>
                  <span className="ml-1 text-[0.68rem] font-semibold uppercase text-zinc-400">
                    {day.dayOfWeek}
                  </span>
                </div>

                <button
                  aria-label={`Add ${region} post on ${day.date}`}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] border border-zinc-200 bg-white text-zinc-500 opacity-100 transition hover:border-laifen-cyan hover:text-laifen-ink sm:opacity-0 sm:group-hover:opacity-100"
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    onAddPost(day.date, region);
                  }}
                >
                  <Plus size={14} />
                </button>
              </div>

              {holidays.length > 0 && (
                <div className="mb-1 flex flex-wrap gap-1">
                  {holidays.map((holiday) => (
                    <span
                      key={holiday.id}
                      className="max-w-full truncate rounded-full border border-laifen-green/50 bg-white/85 px-1.5 py-0.5 text-[0.62rem] font-semibold text-laifen-graphite"
                    >
                      {holiday.labels[region]}
                    </span>
                  ))}
                </div>
              )}

              <div className="grid gap-1">
                {dayPosts.slice(0, 2).map((post) => (
                  <button
                    key={post.id}
                    className="min-w-0 rounded-[6px] border border-zinc-200 bg-white px-2 py-1 text-left shadow-sm transition hover:border-laifen-cyan"
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      onEditPost(post);
                    }}
                  >
                    <span className="flex min-w-0 items-center gap-1">
                      <Edit3 className="shrink-0 text-zinc-400" size={11} />
                      <span className="truncate text-[0.68rem] font-semibold text-laifen-ink">
                        {post.focus || post.pillar || "Post"}
                      </span>
                    </span>
                    {post.contentType && (
                      <span className="block truncate text-[0.62rem] text-zinc-500">
                        {post.contentType}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {dayPosts.length > 2 && (
                <p className="mt-1 text-[0.64rem] font-semibold text-zinc-500">
                  +{dayPosts.length - 2} more
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
