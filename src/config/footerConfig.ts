import type { FooterConfig } from "@/types/footerConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 页脚自定义 HTML 注入配置。
 */
export const footerConfig: FooterConfig = withUserConfig("footer", {
	enable: true,
});
