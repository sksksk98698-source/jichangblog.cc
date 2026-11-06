/**
 * 2026 代理客户端导航与下载大全（本地数据源）。
 * 用途：src/pages/compass.astro → organisms/CompassSection → molecules/CompassTile。
 */

/** 单条站点记录 */
export interface CompassEntry {
	/** 站点名（瓷砖标题） */
	label: string;
	/** 外链地址 */
	href: string;
	/** 一句话说明（瓷砖副行；省略则显示域名） */
	note?: string;
	/** 图标：Iconify 名或图片 URL；省略 = 首字母兜底 */
	icon?: string;
	/** 用户自定义图片（http(s)/绝对路径）：优先于 icon 渲染；省略则走 icon/首字母 */
	image?: string;
}

/** 分组（Shelf = 罗盘上的收纳格） */
export interface CompassShelf {
	/** 锚点 id（字母数字，作分组定位与跳转） */
	key: string;
	/** 分组名 */
	name: string;
	/** 分组图标（Iconify 名，SectionTitle 行首） */
	icon?: string;
	/** 分组副文案（标题下弱文本，可选） */
	blurb?: string;
	entries: CompassEntry[];
}

export const compassData: CompassShelf[] = [
	{
		key: "windows",
		name: "Windows 电脑客户端",
		icon: "material-symbols:desktop-windows-outline-rounded",
		blurb: "支持 Mihomo / Xray / sing-box 内核，覆盖 Clash Verge Rev、v2rayN、FlClash 等主流电脑代理软件",
		entries: [
			{
				label: "Clash Verge Rev",
				href: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
				note: "Mihomo 内核 · 订阅管理 · 规则分流 · TUN 模式，新手及进阶首选",
				icon: "material-symbols:bolt-rounded",
			},
			{
				label: "v2rayN",
				href: "https://github.com/2dust/v2rayN/releases",
				note: "支持 Xray / sing-box 等多核心，适合 VLESS / Trojan 多协议节点管理",
				icon: "material-symbols:terminal-rounded",
			},
			{
				label: "FlClash",
				href: "https://github.com/chen08209/FlClash/releases",
				note: "基于 Mihomo 内核 · Material 简洁界面 · 跨平台规则分流",
				icon: "material-symbols:widgets-rounded",
			},
			{
				label: "Clash Nyanpasu",
				href: "https://github.com/libnyanpasu/clash-nyanpasu/releases",
				note: "Clash 现代化图形界面 · 配置增强 · 多内核切换",
				icon: "material-symbols:auto-awesome-outline-rounded",
			},
			{
				label: "Hiddify",
				href: "https://github.com/hiddify/hiddify-app/releases",
				note: "多协议支持 · 自动节点选择 · 远程配置导入，对新手友好",
				icon: "material-symbols:shield-outline-rounded",
			},
			{
				label: "Karing",
				href: "https://github.com/KaringX/karing/releases",
				note: "sing-box 系跨平台客户端 · 面向新手的简易配置与多订阅管理",
				icon: "material-symbols:explore-rounded",
			},
			{
				label: "Clash Mi",
				href: "https://github.com/KaringX/clashmi/releases",
				note: "Mihomo 内核 · 跨平台支持 · 兼容标准 Clash YAML 配置",
				icon: "material-symbols:deployed-code-outline-rounded",
			},
			{
				label: "Mihomo Party (历史/迁移参考)",
				href: "https://github.com/mihomo-party-org/mihomo-party",
				note: "Mihomo 内核配置管理，建议关注仓库维护状态，优先选 Clash Verge Rev",
				icon: "material-symbols:history-rounded",
			},
		],
	},
	{
		key: "android",
		name: "Android 安卓手机客户端",
		icon: "material-symbols:android-rounded",
		blurb: "安卓端推荐从 GitHub Releases 下载官方 APK，警惕第三方假冒商店版本",
		entries: [
			{
				label: "v2rayNG",
				href: "https://github.com/2dust/v2rayNG/releases",
				note: "Xray 系协议主力客户端 · 支持 VLESS / Trojan 节点链接与订阅导入",
				icon: "material-symbols:android-rounded",
			},
			{
				label: "FlClash (Android)",
				href: "https://github.com/chen08209/FlClash/releases",
				note: "Mihomo 内核 · 桌面与移动端统一体验 · 规则分流清晰",
				icon: "material-symbols:phone-android-rounded",
			},
			{
				label: "Clash Meta for Android",
				href: "https://github.com/MetaCubeX/ClashMetaForAndroid/releases",
				note: "Mihomo 系安卓规则代理 · 完整支持 Clash Meta 配置语法",
				icon: "material-symbols:settings-ethernet-rounded",
			},
			{
				label: "Hiddify (Android)",
				href: "https://github.com/hiddify/hiddify-app/releases",
				note: "多协议与多种订阅格式一键导入 · 界面简洁适合新手",
				icon: "material-symbols:verified-user-outline-rounded",
			},
			{
				label: "Karing (Android)",
				href: "https://github.com/KaringX/karing/releases",
				note: "sing-box 系客户端 · 支持多机场订阅聚合与分流规则管理",
				icon: "material-symbols:hub-outline-rounded",
			},
			{
				label: "sing-box for Android (SFA)",
				href: "https://sing-box.sagernet.org/clients/android/",
				note: "官方 sing-box 安卓客户端 · 适合原生 sing-box JSON 配置玩家",
				icon: "material-symbols:code-blocks-outline-rounded",
			},
			{
				label: "Clash Mi (Android)",
				href: "https://github.com/KaringX/clashmi/releases",
				note: "Mihomo 内核 · 轻量级 Clash YAML 订阅客户端",
				icon: "material-symbols:layers-outline-rounded",
			},
			{
				label: "NekoBox for Android (注意防伪)",
				href: "https://github.com/MatsuriDayo/NekoBoxForAndroid/releases",
				note: "sing-box 系进阶工具 · 切勿下载 Google Play 上被第三方控制的同名应用",
				icon: "material-symbols:warning-outline-rounded",
			},
		],
	},
	{
		key: "ios",
		name: "iPhone / iPad (iOS) 客户端",
		icon: "material-symbols:phone-iphone",
		blurb: "需使用非国区 Apple ID（如美区/港区）登录 App Store 下载，部分应用为付费买断制",
		entries: [
			{
				label: "Shadowrocket (小火箭)",
				href: "https://apps.apple.com/us/app/shadowrocket/id932747118",
				note: "iOS 装机量最高的规则代理 · 协议兼容性极强 · 美区付费应用 ($2.99)",
				icon: "material-symbols:rocket-launch-rounded",
			},
			{
				label: "Stash",
				href: "https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063349",
				note: "iOS 端原生 Clash 风格规则配置 · 支持策略组与覆写 · 付费应用",
				icon: "material-symbols:tune-rounded",
			},
			{
				label: "Quantumult X (圈 X)",
				href: "https://apps.apple.com/us/app/quantumult-x/id1443988620",
				note: "强大的规则分流、请求重写、脚本与 DNS 自定义能力 · 付费应用",
				icon: "material-symbols:data-object-rounded",
			},
			{
				label: "Surge 5",
				href: "https://apps.apple.com/us/app/surge-5/id1442620678",
				note: "专业级网络代理、流量分析与网络调试工具 · 含专业版内购",
				icon: "material-symbols:monitoring-rounded",
			},
			{
				label: "sing-box (SFI)",
				href: "https://sing-box.sagernet.org/clients/apple/",
				note: "官方 sing-box Apple 全平台客户端 · 免费开源",
				icon: "material-symbols:deployed-code-outline-rounded",
			},
			{
				label: "Karing (iOS)",
				href: "https://apps.apple.com/us/app/karing/id6472431552",
				note: "支持多种订阅格式与规则分流 · 免费跨设备使用",
				icon: "material-symbols:check-circle-outline-rounded",
			},
			{
				label: "Clash Mi (iOS)",
				href: "https://apps.apple.com/us/app/clash-mi/id6744321968",
				note: "Mihomo 内核 · 在 iPhone/iPad 上直接使用 Clash 风格配置",
				icon: "material-symbols:phone-android-rounded",
			},
			{
				label: "Streisand",
				href: "https://apps.apple.com/us/app/streisand/id6450534064",
				note: "支持 VLESS、VMess、Trojan、Hysteria 2 等主流协议",
				icon: "material-symbols:vpn-key-outline-rounded",
			},
			{
				label: "Hiddify (iOS)",
				href: "https://github.com/hiddify/hiddify-app",
				note: "多协议代理与订阅导入 · 新手友好界面",
				icon: "material-symbols:shield-lock-outline-rounded",
			},
		],
	},
	{
		key: "macos",
		name: "macOS 苹果电脑客户端",
		icon: "material-symbols:laptop-mac-rounded",
		blurb: "下载时请区分 Apple Silicon (M1/M2/M3/M4 选 arm64/aarch64) 与 Intel (x64) 架构安装包",
		entries: [
			{
				label: "Clash Verge Rev (macOS)",
				href: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
				note: "提供 dmg 安装包（区分 Apple Silicon 与 Intel）· Mihomo 内核 + TUN 模式",
				icon: "material-symbols:laptop-mac-rounded",
			},
			{
				label: "FlClash (macOS)",
				href: "https://github.com/chen08209/FlClash/releases",
				note: "Mihomo 内核 · 原生流畅界面 · 支持 macOS 双架构",
				icon: "material-symbols:desktop-mac-outline-rounded",
			},
			{
				label: "Clash Nyanpasu (macOS)",
				href: "https://github.com/libnyanpasu/clash-nyanpasu/releases",
				note: "多内核切换 · 增强型配置与订阅管理",
				icon: "material-symbols:auto-awesome-outline-rounded",
			},
			{
				label: "v2rayN (macOS)",
				href: "https://github.com/2dust/v2rayN/releases",
				note: "现已支持 macOS 桌面端 · Xray 与 sing-box 双核心驱动",
				icon: "material-symbols:terminal-rounded",
			},
			{
				label: "Surge Mac",
				href: "https://nssurge.com/",
				note: "macOS 旗舰级网络代理、增强模式 (Enhanced Mode) 与网关调试工具",
				icon: "material-symbols:speed-rounded",
			},
			{
				label: "sing-box for macOS (SFM)",
				href: "https://sing-box.sagernet.org/clients/apple/",
				note: "官方 sing-box 客户端 · 轻量级系统级代理",
				icon: "material-symbols:code-rounded",
			},
			{
				label: "Hiddify / Karing / Clash Mi",
				href: "https://github.com/KaringX/karing/releases",
				note: "跨平台统一客户端，均提供 macOS 版本安装包",
				icon: "material-symbols:devices-rounded",
			},
		],
	},
	{
		key: "linux-router",
		name: "Linux 与 OpenWrt 软路由客户端",
		icon: "material-symbols:router-outline-rounded",
		blurb: "涵盖 Linux 桌面 DEB/RPM/AppImage 客户端与 OpenWrt 透明代理插件（需确认固件版本与 CPU 架构）",
		entries: [
			{
				label: "Clash Verge Rev (Linux)",
				href: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
				note: "Linux 桌面图形界面 · 提供 deb / rpm / AppImage 多格式安装包",
				icon: "material-symbols:computer-rounded",
			},
			{
				label: "v2rayA",
				href: "https://github.com/v2rayA/v2rayA/releases",
				note: "Web 控制界面 + 透明代理 · 极适合无桌面的 Linux 服务器、NAS 与旁路由",
				icon: "material-symbols:dns-rounded",
			},
			{
				label: "FlClash (Linux)",
				href: "https://github.com/chen08209/FlClash/releases",
				note: "Mihomo 内核 · 完善的 Linux 桌面安装包支持",
				icon: "material-symbols:widgets-rounded",
			},
			{
				label: "OpenClash (OpenWrt)",
				href: "https://github.com/vernesong/OpenClash",
				note: "OpenWrt 最主流的 Mihomo/Clash 透明代理与分流管理插件",
				icon: "material-symbols:router-rounded",
			},
			{
				label: "PassWall2 (OpenWrt)",
				href: "https://github.com/xiaorouji/openwrt-passwall2",
				note: "基于 Xray / sing-box 核心 · 支持分流节点与透明代理访问控制",
				icon: "material-symbols:alt-route-rounded",
			},
			{
				label: "Nikki (OpenWrt 24.10+)",
				href: "https://github.com/nikkinikki-org/OpenWrt-nikki",
				note: "新一代 Mihomo 透明代理与策略管理插件（要求 OpenWrt 24.10 及以上）",
				icon: "material-symbols:bolt-rounded",
			},
			{
				label: "HomeProxy (ImmortalWrt)",
				href: "https://github.com/immortalwrt/homeproxy",
				note: "基于 sing-box 的现代路由透明代理管理插件",
				icon: "material-symbols:home-iot-device-rounded",
			},
		],
	},
];
