/**
 * 飞书 Drive 文件上传
 *
 * 开发模式：Vite proxy 转发到飞书 open-apis
 * 生产模式：通过 Cloudflare Worker 代理
 *
 * 生产环境下 Worker 自带飞书 token，无需用户提供
 * 开发环境下需要从 localStorage 读取 feishu_token
 */

const WORKER_URL = import.meta.env.VITE_API_URL || "https://laifen-calendar-worker.leanderlaifen.workers.dev";
const DRIVE_API = "https://open.feishu.cn/open-apis/drive/v1";

// 开发模式用 Vite proxy，生产用 Worker
const PROXY_BASE =
  import.meta.env.DEV ? "/api/feishu-drive" : WORKER_URL;

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

/**
 * 上传文件到飞书 Drive
 * 开发模式：通过 Vite proxy → 飞书 API（需要用户 token）
 * 生产模式：通过 Cloudflare Worker → 飞书 API（Worker 自带 token）
 */
export async function uploadToDrive(file: File): Promise<DriveUploadResult> {
  const isDev = import.meta.env.DEV;

  if (isDev) {
    // 开发模式：使用 Vite proxy + 用户 token
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

  // 生产模式：使用 Worker（不需要用户 token）
  const formData = new FormData();
  formData.append("file", file);

  const resp = await fetch(`${WORKER_URL}/api/upload`, {
    method: "POST",
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
