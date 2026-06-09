import {
  AlertCircle,
  CheckCircle2,
  CloudOff,
  RefreshCw,
  UploadCloud,
} from "lucide-react";
import { useMemo, useState } from "react";
import type { SocialPost, SyncStatus } from "../types";
import {
  createGoogleSheetsClient,
  getGoogleSheetsConfigFromEnv,
} from "../data/googleSheets";

interface SyncButtonProps {
  posts: SocialPost[];
}

function formatSyncTime(date: Date): string {
  return new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function SyncButton({ posts }: SyncButtonProps) {
  const config = useMemo(() => getGoogleSheetsConfigFromEnv(), []);
  const [status, setStatus] = useState<SyncStatus>(config ? "idle" : "disabled");
  const [lastSyncedAt, setLastSyncedAt] = useState<Date | null>(null);

  const handleSync = async () => {
    if (!config) {
      return;
    }

    setStatus("syncing");

    try {
      const client = await createGoogleSheetsClient(config);
      await client.writePosts(posts);
      setLastSyncedAt(new Date());
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const icon =
    status === "disabled" ? (
      <CloudOff size={16} />
    ) : status === "syncing" ? (
      <RefreshCw className="animate-spin" size={16} />
    ) : status === "success" ? (
      <CheckCircle2 size={16} />
    ) : status === "error" ? (
      <AlertCircle size={16} />
    ) : (
      <UploadCloud size={16} />
    );

  const label =
    status === "disabled"
      ? "Sheets off"
      : status === "syncing"
        ? "Syncing"
        : status === "success"
          ? `Synced ${lastSyncedAt ? formatSyncTime(lastSyncedAt) : ""}`.trim()
          : status === "error"
            ? "Sync failed"
            : "Sync";

  return (
    <button
      className={[
        "inline-flex items-center justify-center gap-2 rounded-[8px] border px-4 py-2 text-sm font-semibold transition",
        status === "disabled"
          ? "border-zinc-200 bg-zinc-100 text-zinc-500"
          : "border-zinc-200 bg-white text-laifen-graphite hover:border-laifen-cyan hover:text-laifen-ink",
      ].join(" ")}
      disabled={status === "syncing" || status === "disabled"}
      title={
        status === "disabled"
          ? "Set VITE_GOOGLE_CLIENT_ID and VITE_GOOGLE_SHEET_ID"
          : "Sync to Google Sheets"
      }
      type="button"
      onClick={handleSync}
    >
      {icon}
      {label}
    </button>
  );
}
