/**
 * Laifen Social Calendar — Cloudflare Worker
 * Proxies Feishu Bitable + Drive APIs
 */

export interface Env {
  FEISHU_APP_ID: string;
  FEISHU_APP_SECRET: string;
  BITABLE_APP_TOKEN: string;
  TABLE_ID: string;
}

interface FeishuToken {
  token: string;
  expiresAt: number;
}

let cachedToken: FeishuToken | null = null;

async function getTenantToken(env: Env): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.token;
  }

  const resp = await fetch(
    "https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        app_id: env.FEISHU_APP_ID,
        app_secret: env.FEISHU_APP_SECRET,
      }),
    }
  );
  const data = await resp.json() as any;
  cachedToken = {
    token: data.tenant_access_token,
    expiresAt: Date.now() + (data.expire - 300) * 1000,
  };
  return cachedToken.token;
}

function feishuApi(token: string, path: string, options: RequestInit = {}) {
  return fetch(`https://open.feishu.cn/open-apis/${path}`, {
    ...options,
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      ...((options.headers as Record<string, string>) || {}),
    },
  });
}

// CORS headers
function cors(): Record<string, string> {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors() });
    }

    try {
      const token = await getTenantToken(env);

      // GET /api/posts?month=1&region=NA
      if (url.pathname === "/api/posts" && request.method === "GET") {
        const month = url.searchParams.get("month") || "";
        const region = url.searchParams.get("region") || "";

        // Fetch all records from Bitable
        const resp = await feishuApi(
          token,
          `bitable/v1/apps/${env.BITABLE_APP_TOKEN}/tables/${env.TABLE_ID}/records?page_size=500`,
          { method: "GET" }
        );
        const data = await resp.json() as any;

        if (data.code !== 0) {
          return new Response(JSON.stringify(data), { status: 400, headers: { ...cors(), "Content-Type": "application/json" } });
        }

        const records = (data.data?.items || []).map((item: any) => {
          const f = item.fields;
          return {
            id: item.record_id,
            date: f.Date || "",
            dayOfWeek: f.Day || "",
            region: f.Region || "",
            pillar: f.Pillar || "",
            focus: f.Focus || "",
            asset: f.Asset || "",
            postCopy: f["Post Copy"] || "",
            hashtags: f.Hashtags || "",
            contentType: f["Content Type"] || "",
            notes: f.Notes || "",
          };
        }).filter((r: any) => {
          if (month && !r.date.startsWith(`2026-${String(month).padStart(2, "0")}`)) return false;
          if (region && r.region !== region) return false;
          return true;
        });

        return new Response(JSON.stringify(records), {
          headers: { ...cors(), "Content-Type": "application/json" },
        });
      }

      // POST /api/posts — create or update
      if (url.pathname === "/api/posts" && request.method === "POST") {
        const body = await request.json() as any;

        if (body.id) {
          // Update
          const resp = await feishuApi(
            token,
            `bitable/v1/apps/${env.BITABLE_APP_TOKEN}/tables/${env.TABLE_ID}/records/${body.id}`,
            {
              method: "PUT",
              body: JSON.stringify({
                fields: {
                  Date: body.date,
                  Day: body.dayOfWeek,
                  Region: body.region,
                  Pillar: body.pillar,
                  Focus: body.focus,
                  Asset: body.asset,
                  "Post Copy": body.postCopy,
                  Hashtags: body.hashtags,
                  "Content Type": body.contentType,
                  Notes: body.notes,
                },
              }),
            }
          );
          const data = await resp.json() as any;
          return new Response(JSON.stringify(data), {
            headers: { ...cors(), "Content-Type": "application/json" },
          });
        } else {
          // Create
          const resp = await feishuApi(
            token,
            `bitable/v1/apps/${env.BITABLE_APP_TOKEN}/tables/${env.TABLE_ID}/records`,
            {
              method: "POST",
              body: JSON.stringify({
                fields: {
                  Date: body.date,
                  Day: body.dayOfWeek,
                  Region: body.region,
                  Pillar: body.pillar,
                  Focus: body.focus,
                  Asset: body.asset,
                  "Post Copy": body.postCopy,
                  Hashtags: body.hashtags,
                  "Content Type": body.contentType,
                  Notes: body.notes,
                },
              }),
            }
          );
          const data = await resp.json() as any;
          return new Response(JSON.stringify(data), {
            headers: { ...cors(), "Content-Type": "application/json" },
          });
        }
      }

      // DELETE /api/posts/:id
      if (url.pathname.startsWith("/api/posts/") && request.method === "DELETE") {
        const id = url.pathname.split("/").pop();
        const resp = await feishuApi(
          token,
          `bitable/v1/apps/${env.BITABLE_APP_TOKEN}/tables/${env.TABLE_ID}/records/${id}`,
          { method: "DELETE" }
        );
        const data = await resp.json() as any;
        return new Response(JSON.stringify(data), {
          headers: { ...cors(), "Content-Type": "application/json" },
        });
      }

      // POST /api/upload — upload to Feishu Drive
      if (url.pathname === "/api/upload" && request.method === "POST") {
        const formData = await request.formData();
        const file = formData.get("file") as File;

        if (!file) {
          return new Response(JSON.stringify({ error: "No file" }), {
            status: 400, headers: { ...cors(), "Content-Type": "application/json" },
          });
        }

        const buffer = await file.arrayBuffer();
        const resp = await fetch(
          "https://open.feishu.cn/open-apis/drive/v1/medias/upload_all",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: (() => {
              const fd = new FormData();
              fd.append("file_name", file.name);
              fd.append("parent_type", "bitable_file");
              fd.append("parent_node", env.BITABLE_APP_TOKEN);
              fd.append("size", String(file.size));
              fd.append("file", new Blob([buffer]), file.name);
              return fd;
            })(),
          }
        );
        const data = await resp.json() as any;
        return new Response(JSON.stringify(data), {
          headers: { ...cors(), "Content-Type": "application/json" },
        });
      }

      return new Response("Not Found", { status: 404, headers: cors() });
    } catch (e: any) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: { ...cors(), "Content-Type": "application/json" },
      });
    }
  },
};
