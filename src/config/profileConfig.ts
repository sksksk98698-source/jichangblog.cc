import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/demo-avatar.webp", // 保留原主题头像
	name: "机场blog",
	bio: "专注 IEPL / IPLC 专线机场节点测速、AI 与流媒体解锁核验及代理客户端指南。",
	links: [
		{
			name: "42家机场库",
			icon: "material-symbols:dns-rounded",
			url: "/brands/",
		},
		{
			name: "客户端导航",
			icon: "material-symbols:explore-rounded",
			url: "/compass/",
		},
		{
			name: "推荐专题",
			icon: "material-symbols:auto-stories-outline-rounded",
			url: "/series/",
		},
	],
});
