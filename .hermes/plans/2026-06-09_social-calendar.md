# Laifen Social Media Calendar — Implementation Plan

> **For Hermes:** Use Codex to implement this plan task-by-task.

**Goal:** 构建 Laifen 品牌全年社媒日历 Web App，支持北美 (NA) 和德国 (DE) 双地区，按月展示内容，支持插入 Asset/Post Copy/Hashtags，每月高亮重要节日，可视化导出 1080x1350 图片，数据同步至 Google Sheets。

**Architecture:** React + TypeScript + Tailwind CSS 单页应用，数据存储在 Google Sheets（主数据源），本地 JSON 缓存节假日数据。使用 html-to-image 导出 1080x1350 月份视图图片。Google Drive 同步通过 Sheets API 实现。

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Vite, html-to-image, Google Sheets API

---

## Phase 1: 项目基础

### Task 1: 初始化 Vite + React + TypeScript 项目

**Files:** 项目根目录

```bash
cd /Users/leander/social-calendar
npm create vite@latest . -- --template react-ts
# 覆盖现有文件
npm install
```

### Task 2: 安装依赖

```bash
npm install tailwindcss @tailwindcss/vite html-to-image date-fns lucide-react
npm install -D @types/node
```

配置 Tailwind CSS + Vite。

### Task 3: 创建数据模型和类型定义

**Create:** `src/types.ts`

```typescript
export interface SocialPost {
  id: string;
  date: string;           // YYYY-MM-DD
  dayOfWeek: string;
  region: 'NA' | 'DE';
  pillar: string;
  focus: string;
  asset: string;          // 图片/视频链接
  postCopy: string;       // 文案
  hashtags: string;
  contentType: string;    // Carousel, Reel, Static
  notes: string;
}

export interface MonthData {
  year: number;
  month: number;          // 1-12
  highlights: string[];   // 本月重要节日/事件
  posts: SocialPost[];
}
```

### Task 4: 创建节假日数据

**Create:** `src/data/holidays.ts`

包含 NA（美国/加拿大）和 DE（德国）全年节假日：
- NA: New Year, MLK Day, Valentine's, Presidents' Day, Easter, Mother's Day, Memorial Day, Father's Day, Independence Day, Labor Day, Halloween, Thanksgiving, Black Friday, Christmas
- DE: Neujahr, Karfreitag, Ostern, Tag der Arbeit, Muttertag, Vatertag, Pfingsten, Tag der Deutschen Einheit, Halloween, Weihnachten, Silvester

```typescript
export interface Holiday {
  date: string;       // YYYY-MM-DD
  name: string;
  nameEN: string;
  region: 'NA' | 'DE' | 'BOTH';
  emoji: string;
}

export const HOLIDAYS_2026: Holiday[] = [
  // NA
  { date: '2026-01-01', name: "New Year's Day", nameEN: "New Year's Day", region: 'BOTH', emoji: '🎆' },
  { date: '2026-01-19', name: 'Martin Luther King Jr. Day', nameEN: 'MLK Day', region: 'NA', emoji: '✊' },
  { date: '2026-02-14', name: "Valentine's Day", nameEN: "Valentine's Day", region: 'BOTH', emoji: '💝' },
  // ... 全部节假日
];
```

### Task 5: 从 Google Sheets 加载数据模块

**Create:** `src/data/sheetsLoader.ts`

- 从 `/data` 目录加载 CSV（初始数据源来自 Google Sheets 导出）
- 解析 CSV 为 `SocialPost[]`
- 按月份和地区分组

---

## Phase 2: UI 核心组件

### Task 6: 月份选择器组件

**Create:** `src/components/MonthSelector.tsx`

- 全年 12 个月按钮
- 当前月份高亮
- NA/DE 地区切换开关
- 使用 lucide-react 图标

### Task 7: 月份日历视图组件

**Create:** `src/components/CalendarMonth.tsx`

- 月历网格布局（7 列 x 5-6 行）
- 每天显示日期和当天帖子摘要
- 点击日期展开详情
- 节假日特殊样式（高亮背景 + emoji）
- NA 和 DE 双栏并排显示

### Task 8: 帖子详情卡片

**Create:** `src/components/PostCard.tsx`

- 显示 Asset（图片预览）、Post Copy、Hashtags
- Pillar 标签
- Content Type 标签
- 编辑按钮

### Task 9: 帖子编辑表单

**Create:** `src/components/PostEditor.tsx`

- 编辑：Asset, Post Copy, Hashtags, Focus, Pillar, Content Type
- 保存到本地状态
- 支持新增帖子

### Task 10: 月份高亮条

**Create:** `src/components/MonthHighlights.tsx`

- 每月顶部显示重要节日/事件
- 横向滚动标签
- NA/DE 分别显示对应节假日

---

## Phase 3: 图片导出

### Task 11: 1080x1350 图片导出功能

**Create:** `src/components/ExportButton.tsx`
**Modify:** `src/components/CalendarMonth.tsx`

- 使用 html-to-image 捕获月份视图 DOM
- 指定 1080x1350 像素
- 下载 PNG
- 加 Laifen 品牌水印

---

## Phase 4: Google Sheets 同步

### Task 12: Google Sheets API 集成

**Create:** `src/data/googleSheets.ts`

- 使用 Sheets API 读写
- OAuth 2.0 认证（复用 Hermes Google 认证）
- 同步本地修改回 Sheets

### Task 13: 同步按钮和状态指示

**Create:** `src/components/SyncButton.tsx`

- 显示同步状态
- 手动触发同步
- 最后同步时间

---

## Phase 5: 主页面整合

### Task 14: App 主页面

**Modify:** `src/App.tsx`

- 整合所有组件
- 顶部：品牌标题 + 同步按钮
- 中部：月份选择器 + NA/DE 切换
- 主体：双栏日历视图（NA | DE）
- 底部：本月高亮

### Task 15: 样式打磨

- Tailwind 响应式布局
- Laifen 品牌色系
- 暗色模式支持
- 移动端适配

---

## 数据源

初始数据从 Google Sheets 导出 CSV，路径：
- `/Users/leander/social-calendar/src/data/social_calendar_jan.csv`（January 示例）
- 后续月份通过编辑和同步填充

## Google 认证需求

⚠️ Google Workspace 未认证，需要先执行：
```bash
GAPI="python3 /Users/leander/.hermes/skills/productivity/google-workspace/scripts/google_api.py"
```
需要用户提供 OAuth client secret JSON 文件。

## 验证

```bash
cd /Users/leander/social-calendar
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
```

---

## 风险

1. **Google Sheets 认证** — 需要用户完成 OAuth 流程
2. **数据完整性** — 初始数据只有 January，其余月份需手动填充
3. **1080x1350 导出** — html-to-image 在大量 DOM 时可能性能不佳
