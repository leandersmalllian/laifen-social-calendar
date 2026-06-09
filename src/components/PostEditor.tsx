import { Save, Trash2, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import type { PostDraft, Region, SocialPost } from "../types";

interface PostEditorProps {
  date: string;
  isOpen: boolean;
  post: SocialPost | null;
  region: Region;
  onClose: () => void;
  onDelete: (postId: string) => void;
  onSave: (draft: PostDraft) => void;
}

const CONTENT_TYPES = ["Carousel", "Reel", "Static", "Story", "Video", "Live"];
const PILLARS = ["Brand", "Community", "Education", "Inspiration", "Product"];

function createEmptyDraft(date: string, region: Region): PostDraft {
  return {
    date,
    region,
    pillar: "",
    focus: "",
    asset: "",
    postCopy: "",
    hashtags: "",
    contentType: "",
    notes: "",
  };
}

export function PostEditor({
  date,
  isOpen,
  post,
  region,
  onClose,
  onDelete,
  onSave,
}: PostEditorProps) {
  const [draft, setDraft] = useState<PostDraft>(() =>
    post ?? createEmptyDraft(date, region),
  );

  useEffect(() => {
    setDraft(post ?? createEmptyDraft(date, region));
  }, [date, post, region]);

  if (!isOpen) {
    return null;
  }

  const updateDraft = (field: keyof PostDraft, value: string) => {
    setDraft((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave(draft);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-laifen-ink/44 p-3 backdrop-blur-sm sm:items-center">
      <form
        className="max-h-[94vh] w-full max-w-3xl overflow-y-auto rounded-[8px] border border-zinc-200 bg-white shadow-2xl"
        onSubmit={handleSubmit}
      >
        <header className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-zinc-200 bg-white/95 px-5 py-4 backdrop-blur">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              {draft.region} · {draft.date}
            </p>
            <h2 className="truncate text-lg font-semibold text-laifen-ink">
              {post ? "Edit post" : "New post"}
            </h2>
          </div>

          <button
            aria-label="Close editor"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border border-zinc-200 text-laifen-graphite transition hover:border-laifen-cyan hover:text-laifen-ink"
            type="button"
            onClick={onClose}
          >
            <X size={17} />
          </button>
        </header>

        <div className="grid gap-4 p-5 sm:grid-cols-2">
          <label className="grid gap-1 text-sm font-semibold text-laifen-graphite">
            Date
            <input
              className="rounded-[8px] border border-zinc-200 px-3 py-2 font-normal text-laifen-ink outline-none transition focus:border-laifen-cyan focus:ring-2 focus:ring-laifen-cyan/20"
              type="date"
              value={draft.date}
              onChange={(event) => updateDraft("date", event.target.value)}
            />
          </label>

          <label className="grid gap-1 text-sm font-semibold text-laifen-graphite">
            Region
            <select
              className="rounded-[8px] border border-zinc-200 px-3 py-2 font-normal text-laifen-ink outline-none transition focus:border-laifen-cyan focus:ring-2 focus:ring-laifen-cyan/20"
              value={draft.region}
              onChange={(event) =>
                updateDraft("region", event.target.value as Region)
              }
            >
              <option value="NA">North America</option>
              <option value="DE">Germany</option>
            </select>
          </label>

          <label className="grid gap-1 text-sm font-semibold text-laifen-graphite">
            Pillar
            <input
              className="rounded-[8px] border border-zinc-200 px-3 py-2 font-normal text-laifen-ink outline-none transition focus:border-laifen-cyan focus:ring-2 focus:ring-laifen-cyan/20"
              list="pillar-options"
              value={draft.pillar}
              onChange={(event) => updateDraft("pillar", event.target.value)}
            />
          </label>

          <label className="grid gap-1 text-sm font-semibold text-laifen-graphite">
            Focus
            <input
              className="rounded-[8px] border border-zinc-200 px-3 py-2 font-normal text-laifen-ink outline-none transition focus:border-laifen-cyan focus:ring-2 focus:ring-laifen-cyan/20"
              value={draft.focus}
              onChange={(event) => updateDraft("focus", event.target.value)}
            />
          </label>

          <label className="grid gap-1 text-sm font-semibold text-laifen-graphite sm:col-span-2">
            Asset
            <input
              className="rounded-[8px] border border-zinc-200 px-3 py-2 font-normal text-laifen-ink outline-none transition focus:border-laifen-cyan focus:ring-2 focus:ring-laifen-cyan/20"
              placeholder="https://"
              value={draft.asset}
              onChange={(event) => updateDraft("asset", event.target.value)}
            />
          </label>

          <label className="grid gap-1 text-sm font-semibold text-laifen-graphite sm:col-span-2">
            Post Copy
            <textarea
              className="min-h-40 rounded-[8px] border border-zinc-200 px-3 py-2 font-normal leading-relaxed text-laifen-ink outline-none transition focus:border-laifen-cyan focus:ring-2 focus:ring-laifen-cyan/20"
              value={draft.postCopy}
              onChange={(event) => updateDraft("postCopy", event.target.value)}
            />
          </label>

          <label className="grid gap-1 text-sm font-semibold text-laifen-graphite sm:col-span-2">
            Hashtags
            <textarea
              className="min-h-24 rounded-[8px] border border-zinc-200 px-3 py-2 font-normal leading-relaxed text-laifen-ink outline-none transition focus:border-laifen-cyan focus:ring-2 focus:ring-laifen-cyan/20"
              value={draft.hashtags}
              onChange={(event) => updateDraft("hashtags", event.target.value)}
            />
          </label>

          <label className="grid gap-1 text-sm font-semibold text-laifen-graphite">
            Content Type
            <input
              className="rounded-[8px] border border-zinc-200 px-3 py-2 font-normal text-laifen-ink outline-none transition focus:border-laifen-cyan focus:ring-2 focus:ring-laifen-cyan/20"
              list="content-type-options"
              value={draft.contentType}
              onChange={(event) =>
                updateDraft("contentType", event.target.value)
              }
            />
          </label>

          <label className="grid gap-1 text-sm font-semibold text-laifen-graphite">
            Notes
            <input
              className="rounded-[8px] border border-zinc-200 px-3 py-2 font-normal text-laifen-ink outline-none transition focus:border-laifen-cyan focus:ring-2 focus:ring-laifen-cyan/20"
              value={draft.notes}
              onChange={(event) => updateDraft("notes", event.target.value)}
            />
          </label>
        </div>

        <datalist id="pillar-options">
          {PILLARS.map((pillar) => (
            <option key={pillar} value={pillar} />
          ))}
        </datalist>

        <datalist id="content-type-options">
          {CONTENT_TYPES.map((contentType) => (
            <option key={contentType} value={contentType} />
          ))}
        </datalist>

        <footer className="flex flex-col-reverse gap-2 border-t border-zinc-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {post && (
              <button
                className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                type="button"
                onClick={() => onDelete(post.id)}
              >
                <Trash2 size={16} />
                Delete
              </button>
            )}
          </div>

          <button
            className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-laifen-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-black"
            type="submit"
          >
            <Save size={16} />
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
