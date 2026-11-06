import type { GamesConfig } from "@/types/gamesConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

export const gamesConfig: GamesConfig = withUserConfig("games", {
	enable: false,
	title: "$t:games",
	description: "$t:gamesBanner",
	categories: [],
});
