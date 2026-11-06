import type { AnnouncementConfig } from "@/types/announcementConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 公告栏配置
 * 组件显示由 sidebarConfig 统一控制
 */
export const announcementConfig: AnnouncementConfig = withUserConfig(
	"announcement",
	{
		title: "站点实测与合规声明", // 公告标题
		content:
			"本站收录 42 家机场档案与 2026 多批次实测截图。所有测速与解锁数据均标注测量时间与来源状态（Measured / Vendor / Historical），注册推广链接已统一声明且不影响您的购买价格。",
		closable: true, // 允许用户关闭公告
		link: {
			enable: true, // 启用链接
			text: "查看 42 家机场品牌库", // 链接文本
			url: "/brands/", // 链接 URL
			external: false, // 站内链接
		},
	},
);
