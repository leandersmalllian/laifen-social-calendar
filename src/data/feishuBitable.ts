const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8787";
const BITABLE_TOKEN = "RgFqbx0bxa0l1DsQyOccbe7mn7g";
const BITABLE_URL = `https://f1l5e2ythy.feishu.cn/base/${BITABLE_TOKEN}`;
export { BITABLE_URL };

export async function fetchPosts(params?: {
  month?: number;
  region?: string;
}): Promise<SocialPost[]> {
  const searchParams = new URLSearchParams();
  if (params?.month) searchParams.set("month", String(params.month));
  if (params?.region) searchParams.set("region", params.region);

  const resp = await fetch(`${API_BASE}/api/posts?${searchParams}`);
  if (!resp.ok) throw new Error("Failed to fetch posts");
  return resp.json();
}

export async function savePost(
  post: SocialPost
): Promise<{ record_id: string }> {
  const resp = await fetch(`${API_BASE}/api/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  if (!resp.ok) throw new Error("Failed to save post");
  return resp.json();
}

export async function deletePost(id: string): Promise<void> {
  const resp = await fetch(`${API_BASE}/api/posts/${id}`, { method: "DELETE" });
  if (!resp.ok) throw new Error("Failed to delete post");
}

export async function uploadImage(file: File): Promise<{ file_token: string; url: string }> {
  const formData = new FormData();
  formData.append("file", file);
  const resp = await fetch(`${API_BASE}/api/upload`, {
    method: "POST",
    body: formData,
  });
  if (!resp.ok) throw new Error("Upload failed");
  return resp.json();
}

// Re-export type for convenience
import type { SocialPost } from "../types";
export type { SocialPost };
