import type { SkillsConfig } from "@/types/skillsConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

export const skillsConfig: SkillsConfig = withUserConfig("skills", {
	enable: false,
	title: "$t:skills",
	description: "$t:skillsBanner",
	categories: [],
});
