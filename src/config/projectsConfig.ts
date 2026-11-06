import type { ProjectsConfig } from "@/types/projectsConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

export const projectsConfig: ProjectsConfig = withUserConfig("projects", {
	enable: false,
	title: "$t:projects",
	description: "$t:projectsBanner",
	categories: [],
});
