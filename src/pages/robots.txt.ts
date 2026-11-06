import type { APIRoute } from "astro";

const siteUrl = import.meta.env.SITE || "https://jichangblog.cc/";

const robotsTxt = `
User-agent: *
Allow: /
Disallow: /404/

Sitemap: ${new URL("sitemap.xml", siteUrl).href}
Sitemap: ${new URL("sitemap-index.xml", siteUrl).href}
`.trim();

export const GET: APIRoute = () => {
	return new Response(robotsTxt, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
