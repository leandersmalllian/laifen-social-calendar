import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/laifen-social-calendar/",
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api/feishu-drive": {
        target: "https://open.feishu.cn",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/feishu-drive/, "/open-apis/drive/v1"),
      },
    },
  },
});
