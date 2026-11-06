import type { TrackDescriptor } from "@/types/musicConfig";

/**
 * 侧栏音乐本地曲目数据源（机场blog 晚高峰测速专注轻音乐与白噪音）。
 */
export const musicTracks: readonly TrackDescriptor[] = [
	{
		id: "dazbee",
		title: "IEPL 晚高峰测速专注轻音 · Track 01",
		artist: "机场blog Audio Lab",
		cover: "assets/images/music/dazbee.webp",
		source: "/assets/music/url/dazbee.mp3",
		duration: 241,
	},
	{
		id: "hitori",
		title: "跨境节点拓扑巡检背景轻音 · Track 02",
		artist: "机场blog Audio Lab",
		cover: "assets/images/music/hitori.webp",
		source: "/assets/music/url/hitori.mp3",
		duration: 253,
	},
	{
		id: "xryx",
		title: "深港专线夜间低延迟白噪音 · Track 03",
		artist: "机场blog Audio Lab",
		cover: "assets/images/music/xryx.webp",
		source: "/assets/music/url/xryx.mp3",
		duration: 245,
	},
	{
		id: "cl",
		title: "三网流媒体解锁实验室环境音 · Track 04",
		artist: "机场blog Audio Lab",
		cover: "assets/images/music/cl.webp",
		source: "/assets/music/url/cl.mp3",
		duration: 242,
	},
];
