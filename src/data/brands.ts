/**
 * 机场blog · 42 家机场品牌单一数据源。
 * 所有推广链接只允许从此处读取，渲染时统一 rel="nofollow sponsored noopener"。
 * dataStatus: measured = 本站实测截图 / vendor = 品牌资料显示 / historical = 历史归档待核实
 */

export type DataStatus = "measured" | "vendor" | "historical";
export type BrandTier = "top10" | "main" | "historical";

export interface BrandPlan {
	name: string;
	cycle: string;
	price: string;
	traffic: string;
}

export interface SpeedNode {
	region: string;
	latency: string;
	download: string;
}

export interface AirportBrand {
	rank: number;
	slug: string;
	name: string;
	tier: BrandTier;
	dataStatus: DataStatus;
	featured?: boolean;
	founded?: string;
	url?: string;
	code?: string;
	entry: string;
	lines: string[];
	protocols: string[];
	client: "专属客户端" | "自研+订阅" | "订阅" | "待核实";
	tags: string[];
	summary: string;
	unlock?: string;
	plans: BrandPlan[];
	speed?: SpeedNode[];
	speedNote?: string;
	speedtestImage?: string;
	unlockImages?: string[];
}

const P = (name: string, cycle: string, price: string, traffic: string): BrandPlan => ({
	name,
	cycle,
	price,
	traffic,
});
const S = (region: string, latency: string, download: string): SpeedNode => ({
	region,
	latency,
	download,
});
const VENDOR_SPEED_NOTE = "品牌资料显示，2026-10-19 标注，非晚高峰";

export const AFFILIATE_REL = "nofollow sponsored noopener";
export const AFFILIATE_DISCLOSURE =
	"含推广链接，通过链接注册可能为本站带来佣金，不影响你的支付价格。";

export const brands: AirportBrand[] = [
	{
		rank: 1, slug: "guangsuyun", name: "光速云", tier: "top10", dataStatus: "measured", featured: true,
		founded: "2020", url: "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y", code: "AMM",
		entry: "年付 ¥99（约 ¥8/月）", lines: ["IEPL", "企业内网专线"], protocols: ["VLESS"], client: "自研+订阅",
		tags: ["本站主推", "2020年运营", "三网实测", "AI工具", "流媒体"],
		summary: "运营时间较长的综合型机场，IEPL 加企业级内网专线双线路，自研客户端同时保留 Clash、Shadowrocket 订阅导入。8 元/月是年付折算价，并非普通月付价格。",
		unlock: "品牌资料显示支持 Claude、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify；ChatGPT、Gemini 视节点而定。",
		plans: [P("致敬斯诺克147永久套餐", "一次性", "¥147", "247GB 不过期"), P("轻量版", "年付", "¥99", "69GB/月"), P("极速版", "月付", "¥25", "168GB/月"), P("流光版", "月付", "¥34", "268GB/月"), P("量子版", "月付", "¥68", "568GB/月"), P("无界版", "月付", "¥138", "900GB/月"), P("定制套餐", "月付", "¥680", "500GB/月")],
		speed: [S("香港", "22ms", "529Mbps"), S("台湾", "41ms", "114Mbps"), S("新加坡", "46ms", "387Mbps"), S("日本", "57ms", "135Mbps"), S("美国", "143ms", "18Mbps")],
		speedNote: VENDOR_SPEED_NOTE,
		speedtestImage: "/images/speedtest/guangsuyun-speedtest.png",
		unlockImages: ["/images/unlock/guangsuyun-telecom-speed-unlock.jpg", "/images/unlock/guangsuyun-mobile-speed-unlock.jpg", "/images/unlock/guangsuyun-unicom-speed-unlock.jpg", "/images/unlock/guangsuyun-streaming-ai-matrix.jpg", "/images/unlock/guangsuyun-vless-9gbps-speed.jpg"],
	},
	{
		rank: 2, slug: "muguang", name: "暮光加速", tier: "top10", dataStatus: "measured",
		founded: "2023", url: "https://varnexa.twilightaff.com/#/?code=D1LHglg3", code: "muguang5555",
		entry: "月付 ¥20 / 120GB", lines: ["BGP", "专线出口"], protocols: ["待核实"], client: "订阅",
		tags: ["BGP调度", "全平台", "多设备"],
		summary: "主打 BGP 智能调度与专线级出口，覆盖 Windows、macOS、iOS、Android、Linux，流量档位从 120GB 到 1500GB，适合多设备和小团队。",
		unlock: "品牌资料显示支持 ChatGPT、Claude、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify；Gemini 视节点而定。",
		plans: [P("基础版", "月付", "¥20", "120GB/月"), P("标准版", "月付", "¥40", "240GB/月"), P("旗舰版", "月付", "¥100", "700GB/月"), P("至尊版", "月付", "¥180", "1500GB/月"), P("年付轻量版", "年付", "¥109", "70GB/月"), P("不限时轻量包", "一次性", "¥219", "150GB")],
		speed: [S("香港", "26ms", "509Mbps"), S("台湾", "40ms", "107Mbps"), S("新加坡", "43ms", "419Mbps"), S("日本", "53ms", "150Mbps"), S("美国", "160ms", "19Mbps")],
		speedNote: VENDOR_SPEED_NOTE, speedtestImage: "/images/speedtest/muguang-speedtest.png",
	},
	{
		rank: 3, slug: "feimao", name: "飞猫云", tier: "top10", dataStatus: "measured",
		founded: "2023", url: "https://guangs.flycataff.com/#/?code=6uq0Xe9y", code: "flycat888",
		entry: "年付 ¥84（约 ¥7/月）", lines: ["中转优化"], protocols: ["待核实"], client: "专属客户端",
		tags: ["新手友好", "免订阅", "学生党"],
		summary: "专属客户端下载登录即用，不用找订阅、不用配 Clash，第一次用机场的人也能快速上手，适合日常轻量使用或作为备用。",
		unlock: "品牌资料显示支持 ChatGPT、Claude、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify；Gemini 视节点而定。",
		plans: [P("学生版", "年付", "¥84", "50GB/月"), P("星耀版", "月付", "¥25", "150GB/月"), P("星环版", "月付", "¥45", "300GB/月"), P("银河版", "月付", "¥85", "600GB/月"), P("宇宙版", "月付", "¥150", "1000GB/月"), P("不限时套餐", "一次性", "¥680", "1000GB")],
		speed: [S("香港", "21ms", "526Mbps"), S("台湾", "41ms", "116Mbps"), S("新加坡", "45ms", "413Mbps"), S("日本", "54ms", "138Mbps"), S("美国", "178ms", "14Mbps")],
		speedNote: VENDOR_SPEED_NOTE, speedtestImage: "/images/speedtest/feimao-speedtest.png",
	},
	{
		rank: 4, slug: "weifeng", name: "微风网络", tier: "top10", dataStatus: "measured",
		founded: "2023", url: "https://edp01.breezenetaff.com/#/?code=t3huofyI", code: "flat888",
		entry: "年付 ¥137 / 100GB", lines: ["IEPL"], protocols: ["VLESS"], client: "订阅",
		tags: ["IEPL入门", "原生IP", "7×24客服"],
		summary: "入门级 IEPL + VLESS 方案，覆盖香港、新加坡、日本、美国原生 IP 节点，客服 7×24 在线，夜间由 AI 客服值守。",
		unlock: "品牌资料显示支持 ChatGPT、Claude、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify；Gemini 视节点而定。",
		plans: [P("清风", "年付", "¥137", "100GB/月"), P("乘风", "月付", "¥27", "200GB/月"), P("破风", "月付", "¥57", "500GB/月"), P("御风", "月付", "¥127", "1200GB/月"), P("信风·不限时", "一次性", "¥200", "270GB"), P("长风·不限时", "一次性", "¥370", "570GB")],
		speed: [S("香港", "25ms", "546Mbps"), S("台湾", "40ms", "115Mbps"), S("新加坡", "43ms", "384Mbps"), S("日本", "54ms", "131Mbps"), S("美国", "167ms", "17Mbps")],
		speedNote: VENDOR_SPEED_NOTE, speedtestImage: "/images/speedtest/weifeng-speedtest.png",
	},
	{
		rank: 5, slug: "dalaoyun", name: "大佬云", tier: "top10", dataStatus: "vendor",
		founded: "2024", url: "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN", code: "dly888",
		entry: "年付约 ¥5.6/月 · 60GB", lines: ["IEPL"], protocols: ["VLESS"], client: "自研+订阅",
		tags: ["5.6元档", "季付7折"],
		summary: "5.6 元档的标准方案（IEPL + VLESS + 60GB），季付及以上 7 折。同价位有闪电鼠、云界线、榴莲云、环球梯，规格相似，建议以实测为准。",
		plans: [P("年付小包", "年付", "约 ¥67", "60GB/月")],
	},
	{
		rank: 6, slug: "xingdaomeng", name: "星岛梦", tier: "top10", dataStatus: "measured",
		founded: "2020", url: "https://guangs.xingdaomeng.com/#/?code=1TynBYnR", code: "nmw888",
		entry: "年付 ¥96（约 ¥8/月）", lines: ["IEPL"], protocols: ["Trojan"], client: "订阅",
		tags: ["2020年运营", "不限设备", "永久流量包"],
		summary: "IEPL 专线、1 倍流量不限设备，节点延伸到韩国与东南亚，提供永久不限时流量包，适合多设备家庭。",
		unlock: "品牌资料显示支持 ChatGPT、Claude、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify；Gemini 视节点而定。",
		plans: [P("贴心小包", "年付", "¥96", "60GB/月"), P("超量150G", "月付", "¥25", "150GB/月"), P("进阶300G", "月付", "¥50", "300GB/月"), P("闪光500G", "月付", "¥70", "500GB/月"), P("旗舰1T版", "月付", "¥130", "1000GB/月"), P("永久不限时100", "一次性", "¥100", "100GB")],
		speed: [S("香港", "27ms", "504Mbps"), S("台湾", "41ms", "103Mbps"), S("新加坡", "44ms", "411Mbps"), S("日本", "57ms", "136Mbps"), S("美国", "177ms", "18Mbps")],
		speedNote: VENDOR_SPEED_NOTE, speedtestImage: "/images/speedtest/xingdaomeng-speedtest.png",
	},
	{
		rank: 7, slug: "ermao", name: "二猫云", tier: "top10", dataStatus: "measured",
		founded: "2023", url: "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW", code: "ermao5555",
		entry: "月付 ¥20 / 130GB", lines: ["IEPL"], protocols: ["VLESS"], client: "自研+订阅",
		tags: ["全线IEPL", "不限设备", "定制客户端"],
		summary: "全线 IEPL，主打长期稳定而不是低价走量，账号不限设备连接数。节点覆盖香港、日本、美国，Claude 与 Gemini 官方未给确定说法。",
		unlock: "品牌资料显示支持 ChatGPT、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify；Claude、Gemini 视节点而定。",
		plans: [P("不限时套餐", "一次性", "¥99", "100GB"), P("年付小包", "年付", "¥89", "60GB/月"), P("白猫套餐", "月付", "¥20", "130GB/月"), P("橘猫畅玩版", "月付", "¥40", "230GB/月"), P("牛奶猫尊享版", "月付", "¥80", "430GB/月"), P("黑猫重度版", "月付", "¥160", "850GB/月")],
		speed: [S("香港", "22ms", "481Mbps"), S("台湾", "41ms", "118Mbps"), S("新加坡", "46ms", "407Mbps"), S("日本", "53ms", "143Mbps"), S("美国", "134ms", "17Mbps")],
		speedNote: VENDOR_SPEED_NOTE, speedtestImage: "/images/speedtest/ermao-speedtest.png",
	},
	{
		rank: 8, slug: "wuyou", name: "无忧链接", tier: "top10", dataStatus: "measured",
		founded: "2025", url: "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL", code: "wuyou666",
		entry: "年付 ¥79（约 ¥6.5/月）", lines: ["中转优化"], protocols: ["VLESS"], client: "专属客户端",
		tags: ["跨境电商", "TikTok跨区", "50节点实测"],
		summary: "面向轻度用户与跨境电商，全线无倍率、不限速、不限设备，专属客户端登录即用。本站 2026-07-18 珠海联通 9Gbps 环境完成 50 节点测速与解锁实测。",
		unlock: "本站实测截图见解锁矩阵；品牌资料显示 Gemini 视节点而定。",
		plans: [P("MINI链接", "年付", "¥79", "40GB/月"), P("舒心链接", "月付", "¥19", "100GB/月"), P("省心链接", "月付", "¥33", "200GB/月"), P("随心链接", "月付", "¥77", "500GB/月"), P("忘忧链接", "月付", "¥117", "1000GB/月"), P("100G永久不限时", "一次性", "¥108", "100GB")],
		speed: [S("香港", "23ms", "531Mbps"), S("台湾", "41ms", "107Mbps"), S("新加坡", "42ms", "418Mbps"), S("日本", "55ms", "147Mbps"), S("美国", "145ms", "17Mbps")],
		speedNote: VENDOR_SPEED_NOTE,
		unlockImages: ["/images/unlock/wuyou-speedtest-50nodes.jpg", "/images/unlock/wuyou-streaming-unlock-50nodes.jpg"],
	},
	{
		rank: 9, slug: "weitu", name: "唯兔云", tier: "top10", dataStatus: "measured",
		founded: "2023", url: "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA", code: "weitu666",
		entry: "年付 ¥79.9 / 45GB", lines: ["IPLC"], protocols: ["Trojan"], client: "订阅",
		tags: ["IPLC", "AI办公", "不限设备"],
		summary: "IPLC 专线、1 倍流量、不限速不限设备，同时覆盖 AI 工具与主流流媒体，价格处在入门中转与顶级专线之间。",
		unlock: "品牌资料显示支持 ChatGPT、Claude、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify；Gemini 视节点而定。",
		plans: [P("年付加强专线", "年付", "¥120", "75GB/月"), P("年付版限量款", "年付", "¥79.9", "45GB/月"), P("节假日限时", "月付", "¥14.9", "100GB/月"), P("普通版", "月付", "¥19.9", "150GB/月"), P("进阶版", "月付", "¥29.9", "200GB/月"), P("专业版", "月付", "¥59.9", "500GB/月")],
		speed: [S("香港", "27ms", "500Mbps"), S("台湾", "37ms", "100Mbps"), S("新加坡", "44ms", "414Mbps"), S("日本", "56ms", "147Mbps"), S("美国", "179ms", "17Mbps")],
		speedNote: VENDOR_SPEED_NOTE, speedtestImage: "/images/speedtest/weitu-speedtest.png",
	},
	{
		rank: 10, slug: "firefly", name: "Firefly", tier: "top10", dataStatus: "vendor",
		url: "https://vip02.fireflyaff.com/#/?code=2n7VURre", code: "firefly",
		entry: "年付 ¥96（约 ¥8/月）", lines: ["IPLC"], protocols: ["VLESS"], client: "专属客户端",
		tags: ["IPLC", "原生IP", "优惠码8折"],
		summary: "IPLC 专线接入、原生 IP 节点，品牌资料显示全节点不限速、不限设备。优惠码 firefly 8 折（年付版不适用）。",
		unlock: "品牌资料显示支持 ChatGPT、Claude、Netflix、Disney+、YouTube、HBO Max、TikTok、Spotify；Gemini 视节点而定。",
		plans: [P("年付版", "年付", "¥96", "60GB/月"), P("Lite", "月付", "¥25", "150GB/月"), P("Plus", "月付", "¥45", "300GB/月"), P("Blaze", "月付", "¥85", "600GB/月"), P("Nova", "月付", "¥150", "1000GB/月"), P("不限时", "一次性", "¥100", "100GB")],
		speed: [S("香港", "27ms", "547Mbps"), S("台湾", "39ms", "135Mbps"), S("新加坡", "42ms", "445Mbps"), S("日本", "57ms", "147Mbps"), S("美国", "143ms", "30Mbps")],
		speedNote: VENDOR_SPEED_NOTE,
	},
	{
		rank: 11, slug: "yuzhou", name: "宇宙云", tier: "main", dataStatus: "measured",
		url: "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1", code: "YUZHOU553",
		entry: "¥96/年起（流量待核实）", lines: ["待核实"], protocols: ["VLESS"], client: "待核实",
		tags: ["有测速图", "套餐待核实"],
		summary: "早期资料显示 VLESS、60+ 节点与三网优化。当期完整套餐尚未核实，本站仅保留 2026-08-11 测速截图。",
		plans: [], speedtestImage: "/images/speedtest/yuzhou-speedtest.png",
	},
	{
		rank: 12, slug: "u1s1", name: "U1S1", tier: "main", dataStatus: "measured",
		founded: "2025", url: "https://guangs.vipaff.cc/#/?code=xhX5X22f", code: "akaka",
		entry: "月付 ¥20 / 120GB", lines: ["IPLC"], protocols: ["待核实"], client: "订阅",
		tags: ["新机场", "2000Mbps宣称"],
		summary: "2025 年上线的 IPLC 机场，品牌资料宣称 2000Mbps 带宽、晚高峰不限速。运营时间短，建议先用月付试。",
		plans: [P("就是好用包", "年付", "¥96", "60GB/月"), P("普通人真够了包", "月付", "¥20", "120GB/月"), P("你以为用不到包", "月付", "¥40", "300GB/月"), P("瘾大就拉满包", "月付", "¥100", "700GB/月"), P("我全都要包", "月付", "¥180", "1500GB/月")],
		speed: [S("香港", "24ms", "538Mbps"), S("台湾", "39ms", "107Mbps"), S("新加坡", "46ms", "414Mbps"), S("日本", "57ms", "133Mbps"), S("美国", "134ms", "20Mbps")],
		speedNote: VENDOR_SPEED_NOTE, speedtestImage: "/images/speedtest/u1s1-speedtest.png",
	},
	{
		rank: 13, slug: "lingmao", name: "灵猫网络", tier: "main", dataStatus: "measured",
		founded: "2025", url: "https://vip01.civetnet.com/#/?code=8MIAyxak", code: "lingmao",
		entry: "年付 ¥85（约 ¥7.1/月）", lines: ["中转优化"], protocols: ["待核实"], client: "专属客户端",
		tags: ["不限设备", "专属客户端"],
		summary: "中转优化线路，1 倍流量、不限速不限设备，专属客户端登录即用。优惠码 lingmao 8 折（年付小包不适用）。",
		plans: [P("年付小包", "年付", "¥85", "45GB/月"), P("年付Small", "年付", "¥195", "150GB/月"), P("年付Big", "年付", "¥295", "300GB/月"), P("月付Small", "月付", "¥25", "150GB/月"), P("月付Big", "月付", "¥45", "300GB/月")],
		speed: [S("香港", "22ms", "492Mbps"), S("台湾", "40ms", "109Mbps"), S("新加坡", "46ms", "409Mbps"), S("日本", "57ms", "147Mbps"), S("美国", "164ms", "19Mbps")],
		speedNote: VENDOR_SPEED_NOTE, speedtestImage: "/images/speedtest/lingmao-speedtest.png",
	},
	{
		rank: 14, slug: "jilian", name: "极连云", tier: "main", dataStatus: "measured",
		founded: "2024", url: "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu", code: "ji8888",
		entry: "月付 ¥18 / 100GB", lines: ["IEPL"], protocols: ["待核实"], client: "自研+订阅",
		tags: ["18元档", "AI场景"],
		summary: "18 元/100GB 的 IEPL 方案，品牌资料明确提到覆盖常见 AI 工具使用场景。",
		plans: [P("标准月付", "月付", "¥18", "100GB/月")], speedtestImage: "/images/speedtest/jilian-speedtest.png",
	},
	{
		rank: 15, slug: "guangnian", name: "光年梯", tier: "main", dataStatus: "measured",
		founded: "2025", url: "https://guangs.gntaff.com/#/?code=X1FoxjGE", code: "gnt6666",
		entry: "月付 ¥18 / 110GB", lines: ["IEPL"], protocols: ["VLESS"], client: "自研+订阅",
		tags: ["18元档", "新品牌"],
		summary: "与极连云同为 18 元档，流量多 10GB。2025 年成立，长期稳定性需要观察。",
		plans: [P("标准月付", "月付", "¥18", "110GB/月")], speedtestImage: "/images/speedtest/guangnian-speedtest.png",
	},
	{
		rank: 16, slug: "yifan", name: "一翻云", tier: "main", dataStatus: "measured",
		founded: "2025", url: "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r", code: "1FLYYUN",
		entry: "年付 ¥98 / 60GB", lines: ["IEPL", "原生住宅IP"], protocols: ["Hysteria2", "VLESS", "Shadowsocks"], client: "订阅",
		tags: ["三协议", "永久流量包"],
		summary: "全节点 IEPL 搭配原生住宅 IP，Hysteria 2 / VLESS-Reality / Shadowsocks 三协议可选，提供永久不过期流量包。优惠码 1FLYYUN 9 折。",
		plans: [P("轻享版", "月付", "¥20", "150GB/月"), P("舒享版", "月付", "¥35", "350GB/月"), P("尊享版", "月付", "¥55", "600GB/月"), P("极致版", "月付", "¥95", "1.2TB/月"), P("年付小包", "年付", "¥98", "60GB/月"), P("轻享不限时包", "一次性", "¥100", "100GB")],
		speed: [S("香港", "23ms", "477Mbps"), S("台湾", "40ms", "117Mbps"), S("新加坡", "42ms", "390Mbps"), S("日本", "53ms", "136Mbps"), S("美国", "180ms", "20Mbps")],
		speedNote: VENDOR_SPEED_NOTE, speedtestImage: "/images/speedtest/yifan-speedtest.png",
	},
	{
		rank: 17, slug: "sogo", name: "SOGO云", tier: "main", dataStatus: "measured",
		url: "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7", code: "SOGO10000",
		entry: "年付 ¥98（约 ¥8.2/月）", lines: ["IEPL", "BGP"], protocols: ["VLESS"], client: "专属客户端",
		tags: ["15国节点", "软路由支持"],
		summary: "全线 IEPL + 三网 BGP 优化，节点覆盖 15 个国家和地区，只能用自研客户端，不提供订阅链接。",
		plans: [P("小包-年付版", "年付", "¥98", "60GB/月"), P("基础版", "月付", "¥25", "150GB/月"), P("优选版", "月付", "¥45", "350GB/月"), P("强化版", "月付", "¥80", "550GB/月"), P("顶配版", "月付", "¥150", "1.1TB/月")],
		speed: [S("香港", "26ms", "488Mbps"), S("台湾", "39ms", "118Mbps"), S("新加坡", "43ms", "401Mbps"), S("日本", "57ms", "137Mbps"), S("美国", "140ms", "17Mbps")],
		speedNote: VENDOR_SPEED_NOTE, speedtestImage: "/images/speedtest/sogo-speedtest.png",
	},
	{
		rank: 18, slug: "kexin", name: "可信云", tier: "main", dataStatus: "measured",
		founded: "2024", url: "https://guangs.kosingaff.com/#/register?code=UYDtNlCY", code: "kkk333",
		entry: "月付 ¥25 / 150GB", lines: ["IEPL"], protocols: ["VLESS"], client: "订阅",
		tags: ["资料透明", "25元档"],
		summary: "品牌资料主动说明 AI 与流媒体缺乏统一实测数据，这种透明度在 25 元档不多见。",
		plans: [P("标准月付", "月付", "¥25", "150GB/月")], speedtestImage: "/images/speedtest/kexin-speedtest.png",
	},
	{
		rank: 19, slug: "sujie", name: "速界", tier: "main", dataStatus: "measured",
		founded: "2024", url: "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB", code: "sss1111",
		entry: "月付 ¥25 / 150GB", lines: ["IEPL"], protocols: ["VLESS"], client: "自研+订阅",
		tags: ["AI工具向", "25元档"],
		summary: "25 元档唯一明确主打 ChatGPT、Claude、Gemini 场景的品牌，同时说明 AI 可用性受 IP 与平台规则影响。",
		plans: [P("标准月付", "月付", "¥25", "150GB/月")], speedtestImage: "/images/speedtest/sujie-speedtest.png",
	},
	{
		rank: 20, slug: "shanyue", name: "闪跃", tier: "main", dataStatus: "vendor",
		url: "https://vip02.flashleapaff.com/#/?code=3lgzm9mm", code: "shanyue",
		entry: "年付 ¥96（约 ¥8/月）", lines: ["IPLC"], protocols: ["待核实"], client: "专属客户端",
		tags: ["纯IPLC", "晚高峰"],
		summary: "纯 IPLC 专线，品牌资料强调骨干网接入、晚高峰不掉速，适合长期高频的 AI 办公与追剧用户。",
		plans: [P("年付版", "年付", "¥96", "60GB/月"), P("闪动", "月付", "¥24", "150GB/月"), P("飞跃", "月付", "¥44", "300GB/月"), P("瞬移", "月付", "¥84", "600GB/月"), P("跃迁", "月付", "¥134", "1000GB/月")],
		speed: [S("香港", "23ms", "548Mbps"), S("台湾", "38ms", "110Mbps"), S("新加坡", "44ms", "383Mbps"), S("日本", "53ms", "144Mbps"), S("美国", "143ms", "18Mbps")],
		speedNote: VENDOR_SPEED_NOTE,
	},
	{
		rank: 21, slug: "quanqiu", name: "全球云", tier: "main", dataStatus: "measured",
		url: "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C", code: "qq88",
		entry: "月付 ¥20 / 120GB", lines: ["IPLC", "IEPL"], protocols: ["Trojan", "Shadowsocks"], client: "专属客户端",
		tags: ["60+节点", "2Gbps+"],
		summary: "号称 60+ 全球节点，Trojan 与 Shadowsocks 双协议，节点规模在本站收录里偏大。",
		plans: [P("轻量版", "年付", "¥99", "59GB/月"), P("入门方案", "月付", "¥20", "120GB/月"), P("进阶方案", "月付", "¥40", "300GB/月"), P("高端方案", "月付", "¥100", "700GB/月"), P("不限时轻量包", "一次性", "¥100", "100GB")],
		speed: [S("香港", "25ms", "489Mbps"), S("台湾", "37ms", "117Mbps"), S("新加坡", "45ms", "430Mbps"), S("日本", "55ms", "133Mbps"), S("美国", "138ms", "18Mbps")],
		speedNote: VENDOR_SPEED_NOTE, speedtestImage: "/images/speedtest/quanqiu-speedtest.png",
	},
	{
		rank: 22, slug: "shandianshu", name: "闪电鼠", tier: "main", dataStatus: "vendor",
		founded: "2024", url: "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh", code: "sd88",
		entry: "年付约 ¥5.6/月 · 60GB", lines: ["IEPL"], protocols: ["VLESS"], client: "自研+订阅",
		tags: ["5.6元档", "季付7折"], summary: "5.6 元/月极限平价档，IEPL + VLESS + 60GB，季付及以上 7 折。",
		plans: [P("年付小包", "年付", "约 ¥67", "60GB/月")],
	},
	{
		rank: 23, slug: "yunjiexian", name: "云界线", tier: "main", dataStatus: "vendor",
		founded: "2024", url: "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6", code: "yjx888",
		entry: "年付约 ¥5.6/月 · 60GB", lines: ["IEPL"], protocols: ["VLESS"], client: "自研+订阅",
		tags: ["5.6元档"], summary: "5.6 元档 IEPL + VLESS 方案，推广链接格式与其他品牌略有不同，注册前先确认能正常打开。",
		plans: [P("年付小包", "年付", "约 ¥67", "60GB/月")],
	},
	{
		rank: 24, slug: "liulianyun", name: "榴莲云", tier: "main", dataStatus: "vendor",
		founded: "2024", url: "https://qwerty.liulianyunaff.com/#/?code=hS5pvbfE", code: "ll88",
		entry: "年付约 ¥5.6/月 · 60GB", lines: ["IEPL"], protocols: ["待核实"], client: "自研+订阅",
		tags: ["5.6元档", "协议未明"], summary: "5.6 元档中唯一未标注协议类型的品牌，需要明确 VLESS 的用户可选闪电鼠或大佬云。",
		plans: [P("年付小包", "年付", "约 ¥67", "60GB/月")],
	},
	{
		rank: 25, slug: "shenxing", name: "神行加速", tier: "main", dataStatus: "vendor",
		founded: "2024", url: "https://qwerty.shenxingaff.com/#/?code=gawDQqVE", code: "xs0077",
		entry: "年付约 ¥14/月 · 120GB", lines: ["IEPL"], protocols: ["VLESS"], client: "自研+订阅",
		tags: ["14元档", "新用户7折"], summary: "14 元档中间选择，流量是 5.6 元档的两倍，新用户 7 折。",
		plans: [P("年付标准", "年付", "约 ¥168", "120GB/月")],
	},
	{
		rank: 26, slug: "huanqiuti", name: "环球梯", tier: "main", dataStatus: "vendor",
		founded: "2024", url: "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH", code: "HQ66",
		entry: "年付约 ¥5.6/月 · 60GB", lines: ["IEPL"], protocols: ["VLESS"], client: "自研+订阅",
		tags: ["5.6元档"], summary: "5.6 元档 IEPL + VLESS 方案，推广链接格式特殊，注册前确认链接可打开。",
		plans: [P("年付小包", "年付", "约 ¥67", "60GB/月")],
	},
	{
		rank: 27, slug: "yinxingren", name: "隐形人", tier: "main", dataStatus: "vendor",
		founded: "2024", url: "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT", code: "moon80",
		entry: "年付 ¥109 / 80GB", lines: ["IPLC"], protocols: ["待核实"], client: "专属客户端",
		tags: ["企业级IPLC", "不支持第三方订阅"],
		summary: "企业级 IPLC 直连，品牌资料称晚高峰零卡顿。只能用自带客户端，Clash、Shadowrocket 用不了。优惠码 moon80 8 折。",
		plans: [P("白银纪元", "月付", "¥24", "144GB/月"), P("黄金序列", "月付", "¥48", "360GB/月"), P("铂金至臻", "月付", "¥105", "750GB/月"), P("星耀风暴", "年付", "¥109", "80GB/月"), P("一次性小流量", "一次性", "¥229", "160GB")],
	},
	{
		rank: 28, slug: "tiziyun", name: "梯子云", tier: "main", dataStatus: "vendor",
		founded: "2025", url: "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0", code: "tiziyun",
		entry: "年付约 ¥7.4/月 · 60GB", lines: ["IEPL"], protocols: ["VLESS"], client: "自研+订阅",
		tags: ["新手一键登录", "60+节点"],
		summary: "自研全平台客户端与通用订阅双支持，品牌资料显示 60+ 节点、2Gbps+ 独立带宽。",
		plans: [P("年付小包", "年付", "约 ¥89", "60GB/月")],
	},
	{
		rank: 29, slug: "kuaili", name: "快狸", tier: "historical", dataStatus: "measured",
		entry: "待核实", lines: ["待核实"], protocols: ["VLESS"], client: "待核实",
		tags: ["有测速图", "入口待核实"],
		summary: "本站保留 2026-08-11 珠海联通 9Gbps 环境 VLESS 测速截图，套餐与官网入口待核实，暂不提供注册链接。",
		plans: [], speedtestImage: "/images/speedtest/kuaili-speedtest.png",
	},
	...[
		["wgetcloud", "WgetCloud", "季付 ¥297 / 230GB", ["待核实"], ["Trojan"], "2026-05-02 历史测速覆盖 59 节点，多地区平均下载 50MB/s 以上。当前运营与价格待核实。"],
		["baiyueguang", "白月光", "季付 ¥66 / 100GB", ["待核实"], ["Shadowsocks"], "2026-07-17 历史测速覆盖 108 节点，节点名目多但部分地区速度偏低。"],
		["flyingbird", "FlyingBird 飞鸟", "月付 ¥15 / 100G", ["IPLC"], ["Shadowsocks"], "全专线 IPLC、无倍率，资料显示与一云梯/飞鸟同源站群相关。"],
		["cyberguard", "CyberGuard", "月付 ¥32 / 350GB", ["待核实"], ["Trojan", "VLESS"], "2025-06-21 历史测速覆盖 12 地区，月付流量较大。"],
		["longmaoyun", "龙猫云", "月付 ¥15 / 100G", ["IPLC"], ["Shadowsocks"], "SS + IPLC 全专线，教程完善，已核实为同源站群成员。"],
		["fatcat", "FATCAT 肥猫云", "月付 ¥20 / 120G", ["IEPL", "IPLC"], ["待核实"], "企业级 IEPL/IPLC 内网专线定位，套餐档位齐全。"],
		["tntcloud", "TNTCloud", "月付 ¥20 / 110G", ["IPLC"], ["待核实"], "曾用名 3A 加速器，提供季付限量包和跨境电商定制。"],
		["qingyunti", "青云梯", "月付 ¥25 / 150G", ["IPLC"], ["Shadowsocks"], "运营 6 年以上（曾用名 V4Speed），资料记录 80+ 节点。"],
		["shanshuiyun", "山水云", "月付 ¥15 / 100GB", ["待核实"], ["待核实"], "2026-06-29 历史测速 27 节点，22 个取得非零速度。"],
		["lingdongyun", "灵动云", "月付 ¥20 / 100G", ["IEPL"], ["VLESS"], "2026-07-20 历史实测 OpenAI 基本全解锁，TikTok 多失败。"],
		["langwang", "浪网", "月付 ¥30 / 150G", ["IEPL"], ["待核实"], "截图标注 IEPL，部分套餐流量被遮挡，原资料未实测。"],
		["edgenova", "EdgeNova 边缘节点", "月付 ¥15 / 72G", ["IPLC"], ["待核实"], "高速直连与多线路自动分配定位。"],
		["yinghuochong-archive", "萤火虫（历史档案）", "年付 ¥96 / 60G", ["IPLC"], ["VLESS"], "Firefly 的早期品牌库记录，现行信息请看第 10 名 Firefly。"],
		["sslar", "SSLAR", "月付 ¥17 / 100G", ["IEPL", "BGP"], ["Shadowsocks", "VLESS"], "企业级 IEPL + 多线 BGP，提供自研客户端与远程协助。"],
	].map(([slug, name, entry, lines, protocols, summary], i): AirportBrand => ({
		rank: 30 + i,
		slug: slug as string,
		name: name as string,
		tier: "historical",
		dataStatus: "historical",
		entry: `${entry as string}（历史报价）`,
		lines: lines as string[],
		protocols: protocols as string[],
		client: "待核实",
		tags: ["历史归档", "待核实"],
		summary: summary as string,
		plans: [],
	})),
];

export const getBrand = (slug: string) => brands.find((b) => b.slug === slug);
export const brandsByTier = (tier: BrandTier) => brands.filter((b) => b.tier === tier);
export const measuredBrands = () => brands.filter((b) => b.speedtestImage || b.unlockImages?.length);
