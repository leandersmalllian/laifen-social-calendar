import { CalendarDays, Key, Plus, RotateCcw } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { CalendarMonth } from "./components/CalendarMonth";
import { ExportButton } from "./components/ExportButton";
import { MonthHighlights } from "./components/MonthHighlights";
import { MonthSelector } from "./components/MonthSelector";
import { PostCard } from "./components/PostCard";
import { PostEditor } from "./components/PostEditor";
import { SyncButton } from "./components/SyncButton";
import { createInitialMonthData } from "./data/sheetsLoader";
import type { MonthData, PostDraft, Region, SocialPost } from "./types";
import { firstDateOfMonth, monthName, toDisplayDay, YEAR } from "./utils/date";
import { uploadToDrive } from "./utils/feishuDrive";

const STORAGE_KEY = "laifen-social-calendar-2026:v1";
const INITIAL_MONTH_DATA = createInitialMonthData();
const INITIAL_POSTS = INITIAL_MONTH_DATA.flatMap((month) => month.posts);

interface EditorState {
  date: string;
  post: SocialPost | null;
  region: Region;
}

function createPostId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `post-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function loadStoredPosts(): SocialPost[] {
  if (typeof window === "undefined") {
    return INITIAL_POSTS;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return INITIAL_POSTS;
  }

  try {
    const parsed = JSON.parse(stored) as SocialPost[];
    return Array.isArray(parsed) ? parsed : INITIAL_POSTS;
  } catch {
    return INITIAL_POSTS;
  }
}

function sortPosts(posts: SocialPost[]): SocialPost[] {
  return posts.slice().sort((a, b) => {
    const dateComparison = a.date.localeCompare(b.date);

    if (dateComparison !== 0) {
      return dateComparison;
    }

    return a.region.localeCompare(b.region);
  });
}

function normalizeDraft(draft: PostDraft): SocialPost {
  return {
    id: draft.id ?? createPostId(),
    date: draft.date,
    dayOfWeek: toDisplayDay(draft.date),
    region: draft.region,
    pillar: draft.pillar.trim(),
    focus: draft.focus.trim(),
    asset: draft.asset.trim(),
    postCopy: draft.postCopy.trim(),
    hashtags: draft.hashtags.trim(),
    contentType: draft.contentType.trim(),
    notes: draft.notes.trim(),
  };
}

function monthFromDate(date: string): number {
  return Number(date.slice(5, 7));
}

function App() {
  const exportRef = useRef<HTMLElement>(null);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDate, setSelectedDate] = useState(firstDateOfMonth(1));
  const [posts, setPosts] = useState<SocialPost[]>(() =>
    sortPosts(loadStoredPosts()),
  );
  const [editorState, setEditorState] = useState<EditorState | null>(null);
  const [showTokenInput, setShowTokenInput] = useState(false);
  const [tokenInput, setTokenInput] = useState(
    () => localStorage.getItem("feishu_token") || ""
  );

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    setSelectedDate(firstDateOfMonth(selectedMonth));
  }, [selectedMonth]);

  const selectedMonthPosts = useMemo(
    () =>
      posts.filter((post) =>
        post.date.startsWith(`${YEAR}-${String(selectedMonth).padStart(2, "0")}`),
      ),
    [posts, selectedMonth],
  );

  const monthData = useMemo<MonthData>(
    () => ({
      ...INITIAL_MONTH_DATA[selectedMonth - 1],
      posts: selectedMonthPosts,
    }),
    [selectedMonth, selectedMonthPosts],
  );

  const selectedDatePosts = useMemo(
    () => posts.filter((post) => post.date === selectedDate),
    [posts, selectedDate],
  );

  const openNewPost = (date: string, region: Region) => {
    setEditorState({ date, region, post: null });
    setSelectedDate(date);
  };

  const openExistingPost = (post: SocialPost) => {
    setEditorState({ date: post.date, region: post.region, post });
    setSelectedDate(post.date);
  };

  const saveDraft = (draft: PostDraft) => {
    const normalized = normalizeDraft(draft);

    setPosts((currentPosts) => {
      const exists = currentPosts.some((post) => post.id === normalized.id);
      const nextPosts = exists
        ? currentPosts.map((post) =>
            post.id === normalized.id ? normalized : post,
          )
        : [...currentPosts, normalized];

      return sortPosts(nextPosts);
    });

    setSelectedMonth(monthFromDate(normalized.date));
    setSelectedDate(normalized.date);
    setEditorState(null);
  };

  const handleDropImage = async (date: string, region: Region, file: File) => {
    const existingPosts = posts.filter(
      (p) => p.date === date && p.region === region,
    );

    // 显示上传中状态
    const tempId = createPostId();

    if (existingPosts.length > 0) {
      const post = { ...existingPosts[0], asset: "uploading…" };
      setPosts((current) =>
        sortPosts(current.map((p) => (p.id === post.id ? post : p))),
      );
    } else {
      const newPost: SocialPost = {
        id: tempId,
        date,
        dayOfWeek: toDisplayDay(date),
        region,
        pillar: "",
        focus: "",
        asset: "uploading…",
        postCopy: "",
        hashtags: "",
        contentType: "",
        notes: "",
      };
      setPosts((current) => sortPosts([...current, newPost]));
    }
    setSelectedDate(date);

    // 上传到飞书 Drive
    try {
      const result = await uploadToDrive(file);

      setPosts((current) =>
        sortPosts(
          current.map((p) => {
            const matches =
              p.date === date && p.region === region &&
              (existingPosts.length > 0 ? p.id === existingPosts[0].id : p.id === tempId);
            return matches ? { ...p, asset: result.url } : p;
          }),
        ),
      );
    } catch (err) {
      console.error("Feishu Drive upload failed, falling back to data URL:", err);
      // 失败则回退到 base64
      const reader = new FileReader();
      reader.onload = () => {
        setPosts((current) =>
          sortPosts(
            current.map((p) => {
              const matches =
                p.date === date && p.region === region &&
                (existingPosts.length > 0 ? p.id === existingPosts[0].id : p.id === tempId);
              return matches ? { ...p, asset: reader.result as string } : p;
            }),
          ),
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const deletePost = (postId: string) => {
    setPosts((currentPosts) =>
      currentPosts.filter((post) => post.id !== postId),
    );
    setEditorState(null);
  };

  const handleMovePost = (postId: string, newDate: string, region: Region) => {
    setPosts((currentPosts) =>
      sortPosts(
        currentPosts.map((post) =>
          post.id === postId ? { ...post, date: newDate, dayOfWeek: toDisplayDay(newDate) } : post
        ),
      ),
    );
    setSelectedDate(newDate);
    setSelectedMonth(monthFromDate(newDate));
  };

  const resetToSeed = () => {
    setPosts(sortPosts(INITIAL_POSTS));
    setSelectedMonth(1);
    setSelectedDate(firstDateOfMonth(1));
  };

  const saveToken = () => {
    localStorage.setItem("feishu_token", tokenInput.trim());
    setShowTokenInput(false);
  };

  return (
    <div className="min-h-screen px-3 py-4 text-laifen-ink sm:px-5 lg:px-8">
      <div className="mx-auto grid max-w-[1400px] gap-4">
        <header className="flex flex-col gap-3 rounded-[8px] border border-zinc-200 bg-white/82 p-4 shadow-sm backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-laifen-ink text-lg font-black text-white">
              L
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                Laifen
              </p>
              <h1 className="truncate text-2xl font-semibold tracking-normal text-laifen-ink">
                2026 Social Media Calendar
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              className="inline-flex items-center justify-center gap-1 rounded-[8px] border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-laifen-graphite transition hover:border-laifen-cyan hover:text-laifen-ink"
              type="button"
              onClick={() => setShowTokenInput(!showTokenInput)}
            >
              <Key size={14} />
              {tokenInput ? "Token ✓" : "Set Token"}
            </button>
            <button
              className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-laifen-graphite transition hover:border-laifen-cyan hover:text-laifen-ink"
              type="button"
              onClick={resetToSeed}
            >
              <RotateCcw size={16} />
              Seed
            </button>
            <SyncButton posts={posts} />
            <ExportButton month={selectedMonth} targetRef={exportRef} />
          </div>
        </header>

        {showTokenInput && (
          <div className="rounded-[8px] border border-laifen-cyan/40 bg-white/90 p-4 shadow-sm backdrop-blur">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className="text-sm font-semibold text-laifen-graphite whitespace-nowrap">
                飞书 Tenant Token:
              </label>
              <input
                className="flex-1 rounded-[6px] border border-zinc-300 bg-white px-3 py-2 text-sm text-laifen-ink placeholder:text-zinc-400 focus:border-laifen-cyan focus:outline-none"
                placeholder="t-g1..."
                type="password"
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") saveToken(); }}
              />
              <button
                className="inline-flex items-center justify-center gap-2 rounded-[6px] bg-laifen-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-laifen-graphite"
                type="button"
                onClick={saveToken}
              >
                保存
              </button>
            </div>
            <p className="mt-1.5 text-xs text-zinc-400">
              从飞书开放平台获取，用于上传图片到飞书 Drive
            </p>
          </div>
        )}

        <MonthSelector
          selectedMonth={selectedMonth}
          onSelectMonth={setSelectedMonth}
        />

        <section
          ref={exportRef}
          className="export-board relative overflow-hidden rounded-[8px] border border-zinc-200 bg-laifen-mist p-4 shadow-sm"
        >
          <div className="pointer-events-none absolute bottom-4 right-5 z-20 text-right text-[0.66rem] font-black uppercase tracking-[0.22em] text-laifen-ink/18">
            Laifen · {YEAR}
          </div>

          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div className="min-w-0">
              <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-laifen-graphite">
                <CalendarDays size={14} />
                Month {String(selectedMonth).padStart(2, "0")}
              </div>
              <h2 className="truncate text-4xl font-semibold tracking-normal text-laifen-ink">
                {monthName(selectedMonth)} {YEAR}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-2 text-right text-sm font-semibold text-laifen-graphite">
              <span className="rounded-full border border-laifen-cyan/50 bg-white px-3 py-1">
                NA
              </span>
              <span className="rounded-full border border-laifen-green/60 bg-white px-3 py-1">
                DE
              </span>
            </div>
          </div>

          <div className="mb-4">
            <MonthHighlights monthData={monthData} />
          </div>

          <div className="calendar-scrollbar overflow-x-auto pb-2">
            <div className="grid min-w-[61rem] grid-cols-2 gap-4">
              <CalendarMonth
                month={selectedMonth}
                posts={selectedMonthPosts}
                region="NA"
                selectedDate={selectedDate}
                onAddPost={openNewPost}
                onEditPost={openExistingPost}
                onSelectDate={setSelectedDate}
                onDropImage={handleDropImage}
                onMovePost={handleMovePost}
              />
              <CalendarMonth
                month={selectedMonth}
                posts={selectedMonthPosts}
                region="DE"
                selectedDate={selectedDate}
                onAddPost={openNewPost}
                onEditPost={openExistingPost}
                onSelectDate={setSelectedDate}
                onDropImage={handleDropImage}
                onMovePost={handleMovePost}
              />
            </div>
          </div>
        </section>

        <section className="grid gap-4 rounded-[8px] border border-zinc-200 bg-white/86 p-4 shadow-sm backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
                Selected Date
              </p>
              <h2 className="text-xl font-semibold text-laifen-ink">
                {selectedDate} · {toDisplayDay(selectedDate)}
              </h2>
            </div>

            <div className="flex gap-2">
              {(["NA", "DE"] as Region[]).map((region) => (
                <button
                  key={`add-${region}`}
                  className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-laifen-graphite transition hover:border-laifen-cyan hover:text-laifen-ink"
                  type="button"
                  onClick={() => openNewPost(selectedDate, region)}
                >
                  <Plus size={15} />
                  {region}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {(["NA", "DE"] as Region[]).map((region) => {
              const regionPosts = selectedDatePosts.filter(
                (post) => post.region === region,
              );

              return (
                <div key={`details-${region}`} className="grid gap-3">
                  <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                    <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-laifen-graphite">
                      {region === "NA" ? "North America" : "Germany"}
                    </h3>
                    <span className="rounded-full bg-laifen-mist px-2.5 py-1 text-xs font-semibold text-zinc-500">
                      {regionPosts.length} posts
                    </span>
                  </div>

                  {regionPosts.length > 0 ? (
                    regionPosts.map((post) => (
                      <PostCard
                        key={post.id}
                        post={post}
                        onEdit={openExistingPost}
                      />
                    ))
                  ) : (
                    <div className="rounded-[8px] border border-dashed border-zinc-300 bg-laifen-mist/70 p-4 text-sm font-medium text-zinc-500">
                      No posts scheduled
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <PostEditor
        date={editorState?.date ?? selectedDate}
        isOpen={Boolean(editorState)}
        post={editorState?.post ?? null}
        region={editorState?.region ?? "NA"}
        onClose={() => setEditorState(null)}
        onDelete={deletePost}
        onSave={saveDraft}
      />
    </div>
  );
}

export default App;
