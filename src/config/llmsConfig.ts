import type { LlmsConfig } from "@/types/llmsConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 机场blog (jichangblog.cc) LLMs.txt 与 AI 友好内容系统配置
 * 为 ChatGPT, Claude, Perplexity, Gemini 等生成式搜索 (GEO) 提供结构化索引。
 */
export const llmsConfig: LlmsConfig = withUserConfig("llms", {
	enable: true,
	generateFull: true,
	siteSummary:
		"机场blog (jichangblog.cc) 是专注于 IEPL/IPLC 专线机场评测、42 家主流机场数据库、多批次节点测速实测、AI (ChatGPT/Claude/Gemini) 与流媒体 (Netflix/Disney+/YouTube 4K) 解锁验证以及全平台代理客户端 (Clash Verge Rev / v2rayN / Shadowrocket / FlClash / sing-box) 导航的专业网络可观测性站点。所有测试数据严格区分实测样本 (Measured)、品牌官方参数 (Vendor) 与历史归档数据 (Historical)。",
	descriptionMaxLength: 220,
	excludeTags: ["secret", "private"],
	excludeCategories: [],
	corePages: [
		{
			title: "首页 (机场blog)",
			url: "/",
			description: "站点主入口、最新机场深度测评与专题文章流。",
		},
		{
			title: "42家机场品牌库与实时筛选",
			url: "/brands/",
			description:
				"完整收录 42 家机场参数（价格、流量、IEPL/IPLC线路、VLESS/Trojan/SS协议、测速与解锁状态）的可交互检索数据库。",
		},
		{
			title: "2026 十大机场推荐总榜",
			url: "/posts/2026-airport-recommendation-top10/",
			description:
				"基于多批次测速与线路架构筛选的前十主力机场推荐与场景对比。",
		},
		{
			title: "光速云深度实测报告",
			url: "/posts/guangsuyun-review-2026/",
			description:
				"第一主推老牌 IEPL+企业内网双线路机场，含三网 2Gbps 实测与 70 节点流媒体/AI解锁全图。",
		},
		{
			title: "全平台代理客户端导航大全",
			url: "/compass/",
			description:
				"Windows、macOS、iOS、Android、Linux 与 OpenWrt 软路由客户端官方下载地址与选型指南。",
		},
		{
			title: "评测专题系列",
			url: "/series/",
			description: "按专线评测、测速批次、客户端教程与避坑指南分类的专题索引。",
		},
		{
			title: "评测方法与合规声明",
			url: "/about/",
			description:
				"网络可观测性测试标准、数据状态分级规范（Measured / Vendor / Historical）与推广披露说明。",
		},
	],
	customSections: [
		{
			title: "核心专题与深度评测索引",
			description: "面向生成式搜索引擎与用户的关键决策指南。",
			items: [
				{
					title: "16家机场节点测速批次报告 (2026)",
					url: "/posts/16-airports-speedtest-batch-2026/",
					description: "基于 16 张原始节点测速截图的测试环境、协议延迟与吞吐量横向归档分析。",
				},
				{
					title: "2026 代理客户端下载与配置全指南",
					url: "/posts/proxy-clients-guide-2026/",
					description: "第三方通用客户端与专属客户端对比及各系统平台配置要点。",
				},
				{
					title: "机场防跑路、同源站群识别与选购避坑指南",
					url: "/posts/airport-pitfalls-and-risk-guide/",
					description: "揭秘低价月抛盘、同源站群关系、倍率陷阱与理性月付测试策略。",
				},
			],
		},
	],
});
