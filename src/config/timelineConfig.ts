import type { TimelineConfig } from "@/types/timelineConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

export const timelineConfig: TimelineConfig = withUserConfig("timeline", {
	enable: false,
	title: "$t:timeline",
	description: "$t:timelineBanner",
	categories: [],
	order: "desc",
});
