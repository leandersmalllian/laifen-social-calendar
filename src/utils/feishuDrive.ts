/**
 * 飞书 Drive 文件上传
 *
 * 开发模式：Vite proxy 转发到飞书 open-apis
 * 生产模式：通过部署的 Worker 代理
 *
 * 需要从 localStorage 读取 feishu_token (tenant access token)
 */

const DRIVE_API = "https://open.feishu.cn/open-apis/drive/v1";

// 开发模式用 Vite proxy，生产用部署的 Worker
const PROXY_BASE =
  import.meta.env.VITE_UPLOAD_PROXY || "/api/feishu-drive";

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("feishu_token");
}

export interface DriveUploadResult {
  file_token: string;
  url: string;
  name: string;
  size: number;
}

export interface UploadError {
  error: string;
  status: number;
}

/**
 * 上传文件到飞书 Drive
 * 开发模式：通过 Vite proxy → 飞书 API
 * 生产模式：通过 Cloudflare Worker → 飞书 API
 */
export async function uploadToDrive(file: File): Promise<DriveUploadResult> {
  const token = getToken();
  if (!token) {
    throw new Error("未设置飞书 token。请在设置中填入 tenant access token。");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("file_name", file.name);
  formData.append("parent_type", "explorer");
  formData.append("parent_node", "");
  formData.append("size", String(file.size));

  const resp = await fetch(`${PROXY_BASE}/medias/upload_all`, {
    method: "POST",
    headers: {
      "X-Feishu-Token": token,
    },
    body: formData,
  });

  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`上传失败 (${resp.status}): ${text}`);
  }

  const json = await resp.json();
  if (json.code !== 0) {
    throw new Error(`飞书 API 错误: ${json.msg || "未知错误"}`);
  }

  return {
    file_token: json.data.file_token,
    url: json.data.url,
    name: json.data.name,
    size: json.data.size,
  };
}

/**
 * 上传多张图片（串行）
 */
export async function uploadMultipleToDrive(
  files: File[]
): Promise<DriveUploadResult[]> {
  const results: DriveUploadResult[] = [];
  for (const file of files) {
    results.push(await uploadToDrive(file));
  }
  return results;
}

/** 判断 asset 是否为 Feishu Drive URL */
export function isDriveUrl(url: string): boolean {
  return url.includes("feishu.cn") || url.includes("feishucdn.com");
}
