<div align="center">

# ✈️ 机场blog (`jichangblog.cc`)

**2026 专业专线机场评测 · 42 家机场品牌全景数据库 · 三网实测解锁档案 · 全平台代理客户端导航**

[![Website](https://img.shields.io/badge/Website-jichangblog.cc-d946ef?style=for-the-badge&logo=googlechrome&logoColor=white)](https://jichangblog.cc/)
[![Astro](https://img.shields.io/badge/Astro-7.4.4-ff5d01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Svelte](https://img.shields.io/badge/Svelte-5-ff3e00?style=for-the-badge&logo=svelte&logoColor=white)](https://svelte.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Pagefind](https://img.shields.io/badge/Search-Pagefind_1.5-10b981?style=for-the-badge)](https://pagefind.app/)

[🌐 在线访问 `https://jichangblog.cc/`](https://jichangblog.cc/) · [📊 42家机场品牌全库](https://jichangblog.cc/brands/) · [🧭 客户端防伪导航](https://jichangblog.cc/compass/) · [📚 四大评测专题](https://jichangblog.cc/series/)

</div>

---

## 📖 项目简介 (Overview)

**机场blog (`jichangblog.cc`)** 是一座面向跨境办公、学术检索、AI 生产力工具（ChatGPT / Claude / Gemini）与 4K 流媒体娱乐（Netflix / Disney+ / YouTube / TikTok）用户的 **网络可观测性评测与代理工具导航站**。

项目基于 **Astro 7 + Svelte 5 + Material 3 Expressive (M3E)** 构建，采用 100% 静态生成（SSG）架构，内置完整的 **SEO（搜索引擎优化）** 与 **GEO（生成式 AI 引擎优化）** 基础设施。

### ✨ 核心亮点

- 🗂️ **42 家机场品牌全景数据库 (`/brands/`)**：
  - 完整收录 **Top 10 主推榜**（以 **#1 光速云** 领衔）、**#11–#28 主力评测库** 以及 **14 家历史归档品牌**；
  - 支持按 **梯队、线路类型（IEPL / IPLC / BGP / 中转优化）、协议（VLESS / Trojan / Hysteria 2 / Shadowsocks）、优惠码** 实时筛选与一键复制。
- 📸 **25 张原始节点测速与三网解锁实测图**：
  - 内置 18 张全节点拓扑测速图（`/images/speedtest/`）与 7 张电信/联通/移动三网流媒体及 AI 解锁矩阵图（`/images/unlock/`），支持站内高清灯箱放大核验。
- 🛡️ **五维数据状态透明分级 (Data Classification)**：
  - 严格区分 **`measured`（本站实测截图）**、**`vendor`（品牌资料显示）**、**`commercial`（商务套餐参考）**、**`editorial`（编辑工程分析）** 与 **`historical`（历史归档待核实）**，拒绝虚假跑分与盲目吹捧。
- 🧭 **全平台代理客户端防伪导航 (`/compass/`)**：
  - 整理 Windows、Android、iOS / iPadOS、macOS、Linux 与 OpenWrt 软路由六大平台的开源官方客户端（`Clash Verge Rev`、`Flclash`、`v2rayN`、`Mihomo Party`、`Shadowrocket`、`Sing-box`、`OpenClash`、`PassWall`）正规下载渠道。
- 🔍 **搜索引擎与生成式 AI 友好 (SEO & GEO Ready)**：
  - 全站自引用 `Canonical`、双端点站点地图（`/sitemap.xml` + `/sitemap-index.xml`）、`llms.txt` / `llms-full.txt` 大模型索引语料；
  - 完整覆盖 `Organization`、`WebSite`、`CollectionPage`、`ItemList`、`BlogPosting`、`BreadcrumbList` 与 `FAQPage` 结构化数据（JSON-LD）。

---

## 🗺️ 站点栏目与内容矩阵

| 核心路由 | 栏目名称 | 核心内容说明 |
| :--- | :--- | :--- |
| `/` | **站点首页** | 最新深度评测流、置顶总榜推荐、分类快捷筛选与全站 Pagefind 即时搜索 |
| `/brands/` | **42家机场品牌全库** | 交互式多维过滤卡片库、阶梯套餐价格表、优惠码一键复制与 25 张实测图灯箱 |
| `/compass/` | **代理客户端导航** | 六大操作系统与软路由官方 GitHub / App Store 下载入口与内核对比 |
| `/series/` | **四大评测专题** | 按「机场推荐」「实测解锁档案」「客户端教程」「防跑路避坑」系统化归档 |
| `/archive/` | **文章时间轴归档** | 22 篇原创长文按年份、分类、标签三维切换检索 |
| `/about/` | **评测说明与合规声明** | 网络可观测性评测标准、数据分级规范与 `rel="nofollow sponsored"` 透明披露 |

---

## 🏗️ 项目目录结构

```text
jichangblog.cc/
├── public/
│   ├── images/
│   │   ├── speedtest/           # 18 张机场全节点拓扑测速实测截图 (.png)
│   │   └── unlock/              # 7 张三网测速与流媒体/AI解锁矩阵图 (.jpg)
│   └── logo/                    # 站点图标与品牌视觉资源
├── src/
│   ├── components/
│   │   ├── atoms/               # M3E 原子级 UI 组件
│   │   ├── molecules/           # 分子组件 (CompassTile 等)
│   │   └── organisms/           # 核心交互有机体 (BrandDirectory, CompassSection 等)
│   ├── config/                  # 全站配置中心 (siteConfig, navBarConfig, sitemapFilter 等)
│   ├── content/
│   │   ├── posts/               # 22 篇原创深度评测、横评与配置教程 (.md)
│   │   ├── series/              # 4 大核心专题系列定义 (.md)
│   │   └── spec/                # 关于页与方法论合规声明 (about.md)
│   ├── data/
│   │   ├── brands.ts            # 42 家机场品牌核心结构化数据库
│   │   └── compass.ts           # 全平台代理客户端导航数据源
│   ├── layouts/                 # 全站公共 SEO Head、JSON-LD 与响应式网格布局
│   └── pages/                   # Astro 静态路由 (brands, compass, series, posts, sitemap.xml 等)
├── astro.config.mjs             # Astro 核心构建配置
├── package.json                 # 项目依赖与构建脚本 (pnpm)
└── tsconfig.json                # TypeScript 配置
```

---

## 🚀 本地开发与构建部署

### 1. 环境要求

- **Node.js**：推荐 `>= 22.x` / `24.x+`
- **包管理器**：`pnpm`（`>= 10.x` / `11.x`）

### 2. 常用命令

```bash
# 1. 安装依赖
pnpm install

# 2. 启动本地开发服务器 (默认 http://localhost:4321/)
pnpm dev

# 3. 执行生产环境静态构建 (含内容同步、Astro SSG、Pagefind 全文索引与字体子集化检查)
pnpm build

# 4. 本地预览生产构建产物
pnpm preview
```

### 3. 构建产物说明 (`dist/`)

执行 `pnpm build` 后，所有静态文件输出至 `dist/` 目录，可直接托管于 **Cloudflare Pages**、**Vercel**、**Netlify** 或任意 Nginx 静态服务器：

- `dist/sitemap.xml` & `dist/sitemap-index.xml`：自动生成的搜索引擎站点地图（含 34 个规范索引 URL）
- `dist/robots.txt`：面向 Googlebot / bingbot / Baiduspider / yisouspider 的抓取规则
- `dist/llms.txt` & `dist/llms-full.txt`：面向生成式 AI 搜索引擎的结构化知识摘要
- `dist/pagefind/`：静态全站中文分词搜索索引

---

## ⚖️ 合规与透明化声明

1. **商业推广透明化**：本站收录的部分机场官网链接包含推广参数（Affiliate Links），所有商业外链均严格遵循 Google Search Essentials 规范添加 `rel="nofollow sponsored noopener"` 属性。
2. **客观评测立场**：所有测速截图均明确标注测试批次时间与网络拓扑环境，仅代表当次实测表现；历史待核实档案独立标记，不混充当期实测结论。

---

<div align="center">
  <sub>Copyright © 2026 <a href="https://jichangblog.cc/">机场blog (jichangblog.cc)</a>. All Rights Reserved.</sub>
</div>
