import type { APIRoute } from "astro";
import { getSeriesCatalog, getSortedPosts } from "@utils/content-utils";
import { getPostUrl, getSeriesUrl } from "@utils/url-utils";
import { siteConfig } from "@/config";

export const GET: APIRoute = async (context) => {
	const site = context.site ?? new URL(siteConfig.site);
	const posts = await getSortedPosts();
	const seriesCatalog = await getSeriesCatalog();

	const staticPaths = [
		"/",
		"/brands/",
		"/compass/",
		"/series/",
		"/archive/",
		"/categories/",
		"/tags/",
		"/about/",
	];

	const seriesPaths = [...seriesCatalog.keys()].map((slug) =>
		getSeriesUrl(slug),
	);
	const postPaths = posts.map((post) => getPostUrl(post));

	const allUrls = [
		...new Set([...staticPaths, ...seriesPaths, ...postPaths]),
	].map((p) => new URL(p, site).href);

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map((loc) => `  <url><loc>${loc}</loc></url>`).join("\n")}
</urlset>`;

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	});
};
