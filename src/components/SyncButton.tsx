import { AlertCircle, CheckCircle2, ExternalLink, RefreshCw, UploadCloud } from "lucide-react";
import { useState } from "react";
import type { SocialPost } from "../types";
import { BITABLE_URL, savePost } from "../data/feishuBitable";

interface SyncButtonProps {
  posts: SocialPost[];
}

function formatSyncTime(date: Date): string {
  return new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" }).format(date);
}

export function SyncButton({ posts }: SyncButtonProps) {
  const [status, setStatus] = useState<"idle" | "syncing" | "success" | "error">("idle");
  const [lastSyncedAt, setLastSyncedAt] = useState<Date | null>(null);

  const handleSync = async () => {
    setStatus("syncing");
    try {
      for (const post of posts) {
        await savePost(post);
      }
      setLastSyncedAt(new Date());
      setStatus("success");
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  const icon =
    status === "syncing" ? <RefreshCw className="animate-spin" size={16} />
    : status === "success" ? <CheckCircle2 size={16} />
    : status === "error" ? <AlertCircle size={16} />
    : <UploadCloud size={16} />;

  const label =
    status === "syncing" ? "Syncing…"
    : status === "success" ? `Synced ${lastSyncedAt ? formatSyncTime(lastSyncedAt) : ""}`
    : status === "error" ? "Sync failed"
    : "Sync to Bitable";

  return (
    <>
      <button
        className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-laifen-graphite transition hover:border-laifen-cyan hover:text-laifen-ink"
        disabled={status === "syncing"}
        type="button"
        onClick={handleSync}
      >
        {icon}
        {label}
      </button>
      <a
        href={BITABLE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 rounded-[8px] border border-zinc-200 px-3 py-2 text-xs font-semibold text-laifen-graphite transition hover:border-laifen-cyan hover:text-laifen-ink"
      >
        <ExternalLink size={14} /> Bitable
      </a>
    </>
  );
}
