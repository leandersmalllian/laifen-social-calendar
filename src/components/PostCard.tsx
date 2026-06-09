import {
  Edit3,
  ExternalLink,
  FileText,
  Hash,
  Image,
  Layers,
  StickyNote,
} from "lucide-react";
import type { SocialPost } from "../types";

interface PostCardProps {
  post: SocialPost;
  onEdit: (post: SocialPost) => void;
}

function isLikelyImageUrl(value: string): boolean {
  if (value === "uploading…") return false;
  return /^(https?:|\/\/|data:image\/)/.test(value);
}

export function PostCard({ post, onEdit }: PostCardProps) {
  return (
    <article className="rounded-[8px] border border-zinc-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-laifen-ink px-2.5 py-1 text-xs font-semibold text-white">
              {post.region}
            </span>
            {post.contentType && (
              <span className="rounded-full border border-laifen-cyan/40 bg-laifen-cyan/10 px-2.5 py-1 text-xs font-semibold text-laifen-graphite">
                {post.contentType}
              </span>
            )}
          </div>
          <h3 className="truncate text-base font-semibold text-laifen-ink">
            {post.focus || "Untitled post"}
          </h3>
          <p className="text-xs font-medium text-zinc-500">
            {post.date} · {post.dayOfWeek}
          </p>
        </div>

        <button
          aria-label="Edit post"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border border-zinc-200 text-laifen-graphite transition hover:border-laifen-cyan hover:text-laifen-ink"
          type="button"
          onClick={() => onEdit(post)}
        >
          <Edit3 size={16} />
        </button>
      </div>

      <dl className="grid gap-3 text-sm">
        <div className="flex gap-2">
          <Layers className="mt-0.5 shrink-0 text-laifen-cyan" size={16} />
          <div className="min-w-0">
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">
              Pillar
            </dt>
            <dd className="break-words text-laifen-graphite">
              {post.pillar || "Open"}
            </dd>
          </div>
        </div>

        {post.asset && (
          <div className="flex gap-2">
            <Image className="mt-0.5 shrink-0 text-laifen-coral" size={16} />
            <div className="min-w-0 flex-1">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">
                Asset
              </dt>
              <dd className="mt-1">
                {isLikelyImageUrl(post.asset) ? (
                  <a
                    className="group block overflow-hidden rounded-[8px] border border-zinc-200"
                    href={post.asset}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      alt={post.focus || "Post asset"}
                      className="h-32 w-full object-cover transition group-hover:scale-[1.02]"
                      src={post.asset}
                    />
                  </a>
                ) : (
                  <a
                    className="inline-flex max-w-full items-center gap-1 text-laifen-graphite underline decoration-zinc-300 underline-offset-4 hover:text-laifen-ink"
                    href={post.asset.startsWith("http") ? post.asset : undefined}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="truncate">{post.asset}</span>
                    {post.asset.startsWith("http") && <ExternalLink size={13} />}
                  </a>
                )}
              </dd>
            </div>
          </div>
        )}

        {post.postCopy && (
          <div className="flex gap-2">
            <FileText className="mt-0.5 shrink-0 text-laifen-green" size={16} />
            <div className="min-w-0">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">
                Post Copy
              </dt>
              <dd className="whitespace-pre-line break-words leading-relaxed text-laifen-graphite">
                {post.postCopy}
              </dd>
            </div>
          </div>
        )}

        {post.hashtags && (
          <div className="flex gap-2">
            <Hash className="mt-0.5 shrink-0 text-laifen-cyan" size={16} />
            <div className="min-w-0">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">
                Hashtags
              </dt>
              <dd className="break-words text-laifen-graphite">{post.hashtags}</dd>
            </div>
          </div>
        )}

        {post.notes && (
          <div className="flex gap-2">
            <StickyNote
              className="mt-0.5 shrink-0 text-laifen-coral"
              size={16}
            />
            <div className="min-w-0">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">
                Notes
              </dt>
              <dd className="break-words text-laifen-graphite">{post.notes}</dd>
            </div>
          </div>
        )}
      </dl>
    </article>
  );
}
