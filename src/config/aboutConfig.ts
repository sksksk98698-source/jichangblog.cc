import type { AboutConfig } from "../types/aboutConfig.ts";
import { withUserConfig } from "../utils/config-overlay.ts";

export const aboutConfig: AboutConfig = withUserConfig("about", {
	enable: true,
	title: "关于机场blog · 评测方法与合规声明",
	description: "机场blog 网络可观测性评测标准、数据分级规范（Measured / Vendor / Historical）与推广链接透明披露说明。",
});
