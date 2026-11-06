import type { CompassConfig } from "../types/compassConfig.ts";
import { withUserConfig } from "../utils/config-overlay.ts";

export const compassConfig: CompassConfig = withUserConfig("compass", {
	enable: true,
	title: "2026 代理客户端导航与下载大全",
	description:
		"涵盖 Windows、macOS、iOS、Android、Linux 与 OpenWrt 软路由全平台第三方通用客户端及专属客户端指南。",
});
