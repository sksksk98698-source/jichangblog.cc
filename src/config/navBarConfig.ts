import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { aboutConfig } from "@/config/aboutConfig";
import { albumsConfig } from "@/config/albumsConfig";
import { animeConfig } from "@/config/animeConfig";
import { compassConfig } from "@/config/compassConfig";
import { devicesConfig } from "@/config/devicesConfig";
import { friendsConfig } from "@/config/friendsConfig";
import { gamesConfig } from "@/config/gamesConfig";
import { momentsConfig } from "@/config/momentsConfig";
import { projectsConfig } from "@/config/projectsConfig";
import { seriesConfig } from "@/config/seriesConfig";
import { skillsConfig } from "@/config/skillsConfig";
import { timelineConfig } from "@/config/timelineConfig";
import type {
	NavBarConfig,
	NavBarConfigOverride,
	NavBarLink,
	NavBarLinkOverride,
} from "@/types/navBarConfig";
import { getUserConfig } from "../utils/config-overlay.ts";
import { resolveI18nText } from "../utils/i18n-utils.ts";
import { pruneUnavailableNavLinks } from "../utils/nav-utils.ts";

/**
 * 导航栏配置（统一单一来源）。
 */
export const LinkPresets: Record<string, NavBarLink> = {
	Home: {
		name: i18n(I18nKey.home),
		url: "/",
		icon: "material-symbols:home-outline-rounded",
		pageKey: "home",
	},
	Brands: {
		name: "42家机场库",
		url: "/brands/",
		icon: "material-symbols:dns-rounded",
		pageKey: "brands",
	},
	Compass: {
		name: "客户端导航",
		url: "/compass/",
		icon: "material-symbols:explore-rounded",
		pageKey: "compass",
	},
	Series: {
		name: "评测专题",
		url: "/series/",
		icon: "material-symbols:auto-stories-outline-rounded",
		pageKey: "series",
	},
	Archive: {
		name: i18n(I18nKey.archive),
		url: "/archive/",
		icon: "material-symbols:archive-outline-rounded",
		pageKey: "archive",
	},
	Friends: {
		name: i18n(I18nKey.friends),
		url: "/friends/",
		icon: "material-symbols:handshake-outline-rounded",
		pageKey: "friends",
	},
	Moments: {
		name: i18n(I18nKey.moments),
		url: "/moments/",
		icon: "material-symbols:auto-awesome-outline-rounded",
		pageKey: "moments",
	},
	Anime: {
		name: i18n(I18nKey.anime),
		url: "/anime/",
		icon: "material-symbols:live-tv-outline-rounded",
		pageKey: "anime",
	},
	Skills: {
		name: i18n(I18nKey.skills),
		url: "/skills/",
		icon: "material-symbols:workspaces-outline-rounded",
		pageKey: "skills",
	},
	Projects: {
		name: i18n(I18nKey.projects),
		url: "/projects/",
		icon: "material-symbols:deployed-code-outline-rounded",
		pageKey: "projects",
	},
	Devices: {
		name: i18n(I18nKey.devices),
		url: "/devices/",
		icon: "material-symbols:devices-rounded",
		pageKey: "devices",
	},
	Games: {
		name: i18n(I18nKey.games),
		url: "/games/",
		icon: "material-symbols:sports-esports-outline-rounded",
		pageKey: "games",
	},
	Timeline: {
		name: i18n(I18nKey.timeline),
		url: "/timeline/",
		icon: "material-symbols:timeline-rounded",
		pageKey: "timeline",
	},
	Albums: {
		name: i18n(I18nKey.albums),
		url: "/albums/",
		icon: "material-symbols:photo-library-outline-rounded",
		pageKey: "albums",
	},
	Categories: {
		name: i18n(I18nKey.categories),
		url: "/categories/",
		icon: "material-symbols:folder-outline-rounded",
		pageKey: "categories",
	},
	Tags: {
		name: i18n(I18nKey.tags),
		url: "/tags/",
		icon: "material-symbols:tag-rounded",
		pageKey: "tags",
	},
	About: {
		name: "评测说明",
		url: "/about/",
		icon: "material-symbols:info-outline-rounded",
		pageKey: "about",
	},
};

const defaultNavBarConfig: NavBarConfig = {
	links: [
		LinkPresets.Home,
		{
			name: "机场推荐榜",
			url: "/posts/2026-airport-recommendation-top10/",
			icon: "material-symbols:workspace-premium-rounded",
		},
		LinkPresets.Brands,
		LinkPresets.Compass,
		LinkPresets.Series,
		{
			name: "更多专栏",
			icon: "material-symbols:apps-rounded",
			children: [
				{
					name: "光速云深度实测",
					url: "/posts/guangsuyun-review-2026/",
					icon: "material-symbols:bolt-rounded",
				},
				{
					name: "16家测速批次报告",
					url: "/posts/16-airports-speedtest-batch-2026/",
					icon: "material-symbols:speed-rounded",
				},
				{
					name: "防跑路与避坑指南",
					url: "/posts/airport-pitfalls-and-risk-guide/",
					icon: "material-symbols:shield-lock-outline-rounded",
				},
				LinkPresets.Categories,
				LinkPresets.Tags,
				LinkPresets.Archive,
				LinkPresets.About,
			],
		},
	],
};

function fail(message: string): never {
	throw new Error(`[config] nav-bar：${message}`);
}

function resolveName(name: string): string {
	return resolveI18nText(name);
}

const unavailableFeatureRoutes: ReadonlySet<string> = new Set([
	...(friendsConfig.enable ? [] : ["/friends"]),
	...(momentsConfig.enable ? [] : ["/moments"]),
	...(animeConfig.enable ? [] : ["/anime"]),
	...(compassConfig.enable ? [] : ["/compass"]),
	...(albumsConfig.enable ? [] : ["/albums"]),
	...(skillsConfig.enable ? [] : ["/skills"]),
	...(projectsConfig.enable ? [] : ["/projects"]),
	...(devicesConfig.enable ? [] : ["/devices"]),
	...(gamesConfig.enable ? [] : ["/games"]),
	...(timelineConfig.enable ? [] : ["/timeline"]),
	...(aboutConfig.enable ? [] : ["/about"]),
	...(seriesConfig.enable ? [] : ["/series"]),
]);

export function resolveNavBarLinks(
	entries: readonly NavBarLinkOverride[],
	presets: Record<string, NavBarLink> = LinkPresets,
): NavBarLink[] {
	return entries.map((entry) => {
		let base: NavBarLink | null = null;
		if (entry.preset !== undefined) {
			base = presets[entry.preset] ?? null;
			if (!base) {
				fail(
					`未知的预设 "${entry.preset}"。可用预设：${Object.keys(presets).join("、")}。`,
				);
			}
		}

		const name =
			entry.name !== undefined ? resolveName(entry.name) : base?.name;
		if (name === undefined) {
			fail("每个条目都需要 name，或用 preset 引用一个内置预设。");
		}

		return {
			...base,
			name,
			...(entry.url !== undefined ? { url: entry.url } : {}),
			...(entry.icon !== undefined ? { icon: entry.icon } : {}),
			...(entry.pageKey !== undefined ? { pageKey: entry.pageKey } : {}),
			...(entry.external !== undefined ? { external: entry.external } : {}),
			...(entry.children
				? { children: resolveNavBarLinks(entry.children, presets) }
				: {}),
		};
	});
}

const userNavBar = getUserConfig("navBar") as NavBarConfigOverride | undefined;

export const navBarConfig: NavBarConfig = {
	links: pruneUnavailableNavLinks(
		resolveNavBarLinks(
			userNavBar ? userNavBar.links : defaultNavBarConfig.links,
		),
		unavailableFeatureRoutes,
	),
};
