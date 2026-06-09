import { Edit3, GripHorizontal, Image as ImageIcon, Plus } from "lucide-react";
import { useCallback, useState } from "react";
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
  onDropImage: (date: string, region: Region, file: File) => void;
  onMovePost: (postId: string, newDate: string, region: Region) => void;
}

function Thumbnail({ asset, onDragStart }: { asset: string; onDragStart?: (e: React.DragEvent) => void }) {
  const isUrl = asset.startsWith("http") || asset.startsWith("data:");
  if (!isUrl) return null;
  return (
    <div
      className="mt-1 h-14 w-full overflow-hidden rounded-[4px] border border-zinc-200 bg-zinc-100 cursor-grab active:cursor-grabbing group/img"
      draggable
      onDragStart={onDragStart}
    >
      <img
        src={asset}
        alt=""
        className="h-full w-full object-cover"
        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
      />
      {/* drag handle hint */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition">
        <GripHorizontal size={14} className="text-white drop-shadow-md" />
      </div>
    </div>
  );
}

export function CalendarMonth({
  month,
  posts,
  region,
  selectedDate,
  onAddPost,
  onEditPost,
  onSelectDate,
  onDropImage,
  onMovePost,
}: CalendarMonthProps) {
  const grid = getCalendarGrid(month);
  const postsByDate = posts
    .filter((post) => post.region === region)
    .reduce<Record<string, SocialPost[]>>((acc, post) => {
      acc[post.date] = [...(acc[post.date] ?? []), post];
      return acc;
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
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">{region}</p>
          <h2 className="truncate text-lg font-semibold text-laifen-ink">
            {REGION_NAMES[region]} · {monthName(month)}
          </h2>
        </div>
        <span className="rounded-full bg-laifen-ink px-2.5 py-1 text-xs font-semibold text-white">
          {posts.filter((p) => p.region === region).length} posts
        </span>
      </header>

      <div className="grid grid-cols-7 overflow-hidden rounded-[8px] border border-zinc-200 bg-white">
        {WEEKDAYS.map((w) => (
          <div
            key={`${region}-${w}`}
            className="border-b border-zinc-200 bg-laifen-mist px-2 py-2 text-center text-[0.68rem] font-bold uppercase tracking-[0.12em] text-zinc-500"
          >
            {w}
          </div>
        ))}

        {grid.map((day, index) => {
          if (!day) {
            return (
              <div
                key={`${region}-empty-${index}`}
                className="min-h-[8rem] border-b border-r border-zinc-100 bg-zinc-50/80 last:border-r-0"
              />
            );
          }

          const dayPosts = postsByDate[day.date] ?? [];
          const holidays = getHolidaysForDate(day.date, region);
          const isSelected = selectedDate === day.date;
          const firstPostWithAsset = dayPosts.find((p) => p.asset);

          return (
            <DropCell
              key={`${region}-${day.date}`}
              date={day.date}
              region={region}
              isWeekend={day.isWeekend}
              hasHolidays={holidays.length > 0}
              isSelected={isSelected}
              dayOfMonth={day.dayOfMonth}
              dayOfWeek={day.dayOfWeek}
              holidays={holidays}
              dayPosts={dayPosts}
              firstAsset={firstPostWithAsset?.asset}
              firstPostId={firstPostWithAsset?.id}
              onSelectDate={onSelectDate}
              onAddPost={onAddPost}
              onEditPost={onEditPost}
              onDropImage={onDropImage}
              onMovePost={onMovePost}
            />
          );
        })}
      </div>
    </section>
  );
}

// Separate cell component for isolated drag-drop state
function DropCell({
  date,
  region,
  isWeekend,
  hasHolidays,
  isSelected,
  dayOfMonth,
  dayOfWeek,
  holidays,
  dayPosts,
  firstAsset,
  firstPostId,
  onSelectDate,
  onAddPost,
  onEditPost,
  onDropImage,
  onMovePost,
}: {
  date: string;
  region: Region;
  isWeekend: boolean;
  hasHolidays: boolean;
  isSelected: boolean;
  dayOfMonth: number;
  dayOfWeek: string;
  holidays: ReturnType<typeof getHolidaysForDate>;
  dayPosts: SocialPost[];
  firstAsset?: string;
  firstPostId?: string;
  onSelectDate: (d: string) => void;
  onAddPost: (d: string, r: Region) => void;
  onEditPost: (p: SocialPost) => void;
  onDropImage: (d: string, r: Region, file: File) => void;
  onMovePost: (postId: string, newDate: string, region: Region) => void;
}) {
  const [dragOver, setDragOver] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragOver(false);

      // Check if this is a post move (internal drag)
      const postData = e.dataTransfer.getData("application/laifen-post");
      if (postData) {
        try {
          const { postId, fromDate } = JSON.parse(postData);
          if (fromDate !== date) {
            onMovePost(postId, date, region);
          }
        } catch { /* ignore parse errors */ }
        return;
      }

      // External file drop
      const file = e.dataTransfer.files[0];
      if (!file || !file.type.startsWith("image/")) return;
      onDropImage(date, region, file);
    },
    [date, region, onDropImage, onMovePost]
  );

  const handleThumbDragStart = useCallback(
    (e: React.DragEvent) => {
      if (!firstPostId) return;
      e.dataTransfer.setData(
        "application/laifen-post",
        JSON.stringify({ postId: firstPostId, fromDate: date })
      );
      e.dataTransfer.effectAllowed = "move";
    },
    [firstPostId, date]
  );

  return (
    <div
      className={[
        "group relative min-h-[8rem] border-b border-r border-zinc-100 p-1.5 outline-none transition last:border-r-0",
        isWeekend ? "bg-zinc-50/70" : "bg-white",
        hasHolidays ? "bg-laifen-green/10" : "",
        isSelected ? "ring-2 ring-inset ring-laifen-cyan" : "",
        dragOver ? "bg-laifen-cyan/30 ring-2 ring-laifen-cyan" : "",
      ].join(" ")}
      role="button"
      tabIndex={0}
      onClick={() => onSelectDate(date)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onSelectDate(date); }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Drag overlay hint */}
      {dragOver && (
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center rounded-[6px] bg-laifen-cyan/20">
          <ImageIcon size={20} className="text-laifen-cyan" />
          <span className="mt-1 text-[0.62rem] font-bold text-laifen-cyan">Drop here</span>
        </div>
      )}

      {/* Date header */}
      <div className="mb-1 flex items-start justify-between gap-1">
        <div>
          <span className="text-sm font-bold text-laifen-ink">{dayOfMonth}</span>
          <span className="ml-1 text-[0.62rem] font-semibold uppercase text-zinc-400">{dayOfWeek}</span>
        </div>
        <button
          aria-label={`Add ${region} post on ${date}`}
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] border border-zinc-200 bg-white text-zinc-500 transition hover:border-laifen-cyan hover:text-laifen-ink sm:opacity-0 sm:group-hover:opacity-100"
          type="button"
          onClick={(e) => { e.stopPropagation(); onAddPost(date, region); }}
        >
          <Plus size={12} />
        </button>
      </div>

      {/* Post count badge */}
      {dayPosts.length > 0 && (
        <span className="absolute right-1 top-1 rounded-full bg-laifen-ink px-1.5 py-0.5 text-[0.56rem] font-bold text-white">
          {dayPosts.length}
        </span>
      )}

      {/* Holidays */}
      {holidays.length > 0 && (
        <div className="mb-1 flex flex-wrap gap-0.5">
          {holidays.map((h) => (
            <span
              key={h.id}
              className="max-w-full truncate rounded-full border border-laifen-green/50 bg-white/85 px-1 py-0.5 text-[0.56rem] font-semibold text-laifen-graphite"
            >
              {h.labels[region]}
            </span>
          ))}
        </div>
      )}

      {/* Draggable thumbnail */}
      {firstAsset && <Thumbnail asset={firstAsset} onDragStart={handleThumbDragStart} />}

      {/* Post list */}
      <div className="mt-1 grid gap-0.5">
        {dayPosts.slice(0, 2).map((post) => (
          <button
            key={post.id}
            className="min-w-0 rounded-[4px] border border-zinc-200 bg-white px-1.5 py-0.5 text-left shadow-sm transition hover:border-laifen-cyan"
            type="button"
            onClick={(e) => { e.stopPropagation(); onEditPost(post); }}
          >
            <div className="flex min-w-0 items-center gap-1">
              <Edit3 className="shrink-0 text-zinc-400" size={10} />
              <span className="truncate text-[0.62rem] font-semibold text-laifen-ink">
                {post.focus || post.pillar || "Post"}
              </span>
            </div>
          </button>
        ))}
      </div>

      {dayPosts.length > 2 && (
        <p className="mt-0.5 text-[0.58rem] font-semibold text-zinc-500">+{dayPosts.length - 2} more</p>
      )}
    </div>
  );
}
