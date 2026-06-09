/**
 * 飞书 Drive 上传代理 Worker
 *
 * 部署到 Cloudflare Workers
 * 前端通过此代理上传文件到飞书 Drive，避免在前端暴露 tenant token
 *
 * 部署命令：
 *   npx wrangler deploy
 */

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    // CORS
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "x-feishu-token, content-type",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    // 飞书 Drive 上传
    if (request.method === "POST" && url.pathname === "/upload") {
      const token = request.headers.get("x-feishu-token");
      if (!token) {
        return json({ error: "Missing x-feishu-token" }, 401);
      }

      // 转发 multipart 到飞书
      const feishuResp = await fetch(
        "https://open.feishu.cn/open-apis/drive/v1/medias/upload_all",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: request.body,
        }
      );

      const data = await feishuResp.json();

      return new Response(JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    return json({ error: "Not found" }, 404);
  },
};

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
