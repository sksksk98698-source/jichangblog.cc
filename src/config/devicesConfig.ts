import type { DevicesConfig } from "@/types/devicesConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

export const devicesConfig: DevicesConfig = withUserConfig("devices", {
	enable: false,
	title: "$t:devices",
	description: "$t:devicesBanner",
	categories: [],
});
