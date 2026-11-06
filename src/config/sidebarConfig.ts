import type { SidebarConfig } from "@/types/sidebarConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

export const sidebarConfig: SidebarConfig = withUserConfig("sidebar", {
	enable: true,
	arrangement: "dual",
	side: "left",
	components: [
		{ type: "profile", enable: true, slot: "top" },
		{ type: "music", enable: true, slot: "top" },
		{
			type: "announcement",
			enable: true,
			slot: "top",
			pages: ["home", "brands", "compass", "series"],
		},
		{
			type: "categories",
			enable: true,
			slot: "sticky",
			collapseAfter: 6,
			pages: [
				"home",
				"archive",
				"compass",
				"brands",
				"series",
				"about",
				"post",
			],
		},
		{
			type: "series",
			enable: true,
			slot: "sticky",
			collapseAfter: 6,
			pages: [
				"home",
				"archive",
				"compass",
				"brands",
				"series",
				"about",
				"post",
			],
		},
		{
			type: "tags",
			enable: true,
			slot: "sticky",
			collapseAfter: 12,
			pages: [
				"home",
				"archive",
				"compass",
				"brands",
				"series",
				"about",
				"post",
			],
		},
		{
			type: "stats",
			enable: true,
			slot: "top",
			column: "secondary",
			pages: ["home", "archive", "categories", "tags", "brands", "compass", "series"],
		},
		{ type: "calendar", enable: true, slot: "top", column: "secondary" },
		{
			type: "toc",
			enable: true,
			slot: "sticky",
			column: "secondary",
			pages: ["post"],
		},
	],
});
