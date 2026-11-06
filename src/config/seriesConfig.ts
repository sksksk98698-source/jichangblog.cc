import type { SeriesConfig } from "../types/seriesConfig.ts";
import { withUserConfig } from "../utils/config-overlay.ts";

export const seriesConfig: SeriesConfig = withUserConfig("series", {
	enable: true,
	title: "机场评测与客户端专题系列",
	description: "按专线机场推荐、16家实测深度评测、客户端配置与防跑路避坑指南系统化整理的核心专题。",
	cardPosition: "bottom",
});
