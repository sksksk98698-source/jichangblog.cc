<script lang="ts">
import Card from "@components/atoms/display/Card.svelte";
import PageHeader from "@components/molecules/PageHeader.svelte";
import Icon from "@iconify/svelte";
import { onMount } from "svelte";
import {
	AFFILIATE_DISCLOSURE,
	AFFILIATE_REL,
	type AirportBrand,
	type BrandTier,
	brands,
} from "../../data/brands";

let query = $state("");
let selectedTier = $state<"all" | BrandTier>("all");
let selectedLine = $state<string>("all");
let onlyMeasured = $state(false);
let expandedSlugs = $state<Record<string, boolean>>({ guangsuyun: true });
let copiedCode = $state<string>("");
let previewImage = $state<{ src: string; title: string } | null>(null);

const tierFilters: { key: "all" | BrandTier; label: string; count: number }[] = [
	{ key: "all", label: "全部品牌 (43)", count: brands.length },
	{
		key: "top10",
		label: "Top 10 主推榜",
		count: brands.filter((b) => b.tier === "top10").length,
	},
	{
		key: "main",
		label: "主力评测库 (#11-#28)",
		count: brands.filter((b) => b.tier === "main").length,
	},
	{
		key: "historical",
		label: "历史归档/待核实 (15)",
		count: brands.filter((b) => b.tier === "historical").length,
	},
];

const lineFilters = ["all", "IEPL", "IPLC", "BGP", "中转优化"];

const filteredBrands = $derived.by(() => {
	const q = query.trim().toLowerCase();
	return brands.filter((b) => {
		if (selectedTier !== "all" && b.tier !== selectedTier) return false;
		if (
			selectedLine !== "all" &&
			!b.lines.some((l) => l.toLowerCase().includes(selectedLine.toLowerCase()))
		) {
			return false;
		}
		if (onlyMeasured && !b.speedtestImage && !b.unlockImages?.length) {
			return false;
		}
		if (!q) return true;
		const hay = [
			b.name,
			b.slug,
			b.summary,
			b.entry,
			b.code ?? "",
			...b.lines,
			...b.protocols,
			...b.tags,
		]
			.join(" ")
			.toLowerCase();
		return hay.includes(q);
	});
});

function toggleExpand(slug: string) {
	expandedSlugs[slug] = !expandedSlugs[slug];
}

async function copyPromoCode(code: string) {
	try {
		await navigator.clipboard.writeText(code);
		copiedCode = code;
		setTimeout(() => {
			if (copiedCode === code) copiedCode = "";
		}, 2000);
	} catch {
		copiedCode = code;
	}
}

function statusLabel(status: AirportBrand["dataStatus"]) {
	if (status === "measured") return "本站实测截图";
	if (status === "vendor") return "品牌资料显示";
	return "历史档案·待核实";
}

onMount(() => {
	const hash = window.location.hash.replace("#", "").trim();
	if (hash) {
		expandedSlugs[hash] = true;
		setTimeout(() => {
			const el = document.getElementById(hash);
			el?.scrollIntoView({ behavior: "smooth", block: "center" });
		}, 150);
	}
});
</script>

<Card color="var(--card-bg)" radius="l" class="brand-dir px-6 py-6 md:px-8">
	<PageHeader
		icon="material-symbols:radar-rounded"
		title="2026 机场品牌全库与三网实测档案"
		subtitle="收录 28 家当期运营机场与 15 家历史归档记录 · 严格区分「本站实测截图」「品牌资料显示」与「历史待核实」"
	/>

	<!-- 顶部合规与方法论横幅 -->
	<div class="brand-dir__notice">
		<div class="brand-dir__notice-main">
			<Icon icon="material-symbols:verified-user-outline-rounded" />
			<span>
				<strong>透明化评测声明：</strong>{AFFILIATE_DISCLOSURE}所有测速截图均标注具体测试时间与网络拓扑，仅代表当次实测表现。
			</span>
		</div>
		<div class="brand-dir__legend">
			<span class="badge badge--measured">● 本站实测截图 (18家)</span>
			<span class="badge badge--vendor">● 品牌资料显示 (10家)</span>
			<span class="badge badge--historical">● 历史归档待核实 (15家)</span>
		</div>
	</div>

	<!-- 搜索与多维过滤工具栏 -->
	<div class="brand-dir__toolbar">
		<div class="brand-dir__search-row">
			<div class="brand-dir__search-box">
				<Icon icon="material-symbols:search-rounded" />
				<input
					type="search"
					bind:value={query}
					placeholder="搜索机场名称、线路 (IEPL/IPLC)、协议 (VLESS/Trojan/Hysteria2)、优惠码..."
					aria-label="搜索机场品牌"
				/>
				{#if query}
					<button
						type="button"
						class="brand-dir__clear"
						onclick={() => (query = "")}
						aria-label="清空搜索"
					>
						<Icon icon="material-symbols:close-rounded" />
					</button>
				{/if}
			</div>

			<label class="brand-dir__toggle">
				<input type="checkbox" bind:checked={onlyMeasured} />
				<span>仅看有实测测速/解锁图 ({brands.filter((b) => b.speedtestImage || b.unlockImages?.length).length})</span>
			</label>
		</div>

		<div class="brand-dir__filter-group">
			<div class="brand-dir__chips">
				{#each tierFilters as tf (tf.key)}
					<button
						type="button"
						class="chip"
						class:chip--active={selectedTier === tf.key}
						onclick={() => (selectedTier = tf.key)}
					>
						{tf.label}
					</button>
				{/each}
			</div>

			<div class="brand-dir__chips">
				{#each lineFilters as lf (lf)}
					<button
						type="button"
						class="chip chip--sub"
						class:chip--active={selectedLine === lf}
						onclick={() => (selectedLine = lf)}
					>
						{lf === "all" ? "全部线路" : lf}
					</button>
				{/each}
			</div>
		</div>

		<div class="brand-dir__result-bar">
			<span>当前匹配 <strong>{filteredBrands.length}</strong> 家机场品牌</span>
			<a href="/posts/2026-airport-recommendation-top10/" class="brand-dir__guide-link">
				查看《2026 十大稳定好用机场深度推荐总榜》 →
			</a>
		</div>
	</div>

	<!-- 品牌卡片列表 -->
	<div class="brand-dir__list">
		{#each filteredBrands as brand (brand.slug)}
			<article
				id={brand.slug}
				class="brand-card"
				class:brand-card--featured={brand.featured}
				class:brand-card--historical={brand.tier === "historical"}
			>
				<div class="brand-card__head">
					<div class="brand-card__title-wrap">
						<span class="brand-card__rank" class:brand-card__rank--top={brand.rank <= 10}>
							#{brand.rank}
						</span>
						<div>
							<div class="brand-card__name-row">
								<h2 class="brand-card__name">{brand.name}</h2>
								{#if brand.featured}
									<span class="badge badge--featured">★ 第一主推</span>
								{/if}
								<span class="badge badge--{brand.dataStatus}">
									{statusLabel(brand.dataStatus)}
								</span>
								{#if brand.founded}
									<span class="brand-card__founded">{brand.founded}年运营</span>
								{/if}
							</div>
							<div class="brand-card__tags">
								{#each brand.tags as tag}
									<span class="tag-pill">{tag}</span>
								{/each}
							</div>
						</div>
					</div>

					<div class="brand-card__cta">
						{#if brand.code}
							<button
								type="button"
								class="code-btn"
								onclick={() => copyPromoCode(brand.code!)}
								title="点击复制优惠码"
							>
								<Icon icon="material-symbols:content-copy-outline-rounded" />
								<span>优惠码: <strong>{brand.code}</strong></span>
								{#if copiedCode === brand.code}
									<em class="code-btn__copied">已复制</em>
								{/if}
							</button>
						{/if}
						{#if brand.url}
							<a
								href={brand.url}
								target="_blank"
								rel={AFFILIATE_REL}
								class="reg-btn"
							>
								<span>官网注册</span>
								<Icon icon="material-symbols:open-in-new-rounded" />
							</a>
						{:else}
							<span class="reg-btn reg-btn--disabled">入口待核实</span>
						{/if}
					</div>
				</div>

				<!-- 核心规格栏 -->
				<div class="brand-card__specs">
					<div class="spec-item">
						<span class="spec-item__label">入门参考价</span>
						<span class="spec-item__value spec-item__value--price">{brand.entry}</span>
					</div>
					<div class="spec-item">
						<span class="spec-item__label">线路架构</span>
						<span class="spec-item__value">{brand.lines.join(" / ")}</span>
					</div>
					<div class="spec-item">
						<span class="spec-item__label">传输协议</span>
						<span class="spec-item__value">{brand.protocols.join(" / ")}</span>
					</div>
					<div class="spec-item">
						<span class="spec-item__label">客户端方式</span>
						<span class="spec-item__value">{brand.client}</span>
					</div>
				</div>

				<p class="brand-card__summary">{brand.summary}</p>

				{#if brand.unlock}
					<p class="brand-card__unlock">
						<strong>流媒体与 AI 解锁：</strong>{brand.unlock}
					</p>
				{/if}

				<!-- 展开详情开关 -->
				{#if brand.plans.length > 0 || brand.speed?.length || brand.speedtestImage || brand.unlockImages?.length}
					<div class="brand-card__actions">
						<button
							type="button"
							class="expand-btn"
							onclick={() => toggleExpand(brand.slug)}
						>
							<Icon
								icon={expandedSlugs[brand.slug]
									? "material-symbols:keyboard-arrow-up-rounded"
									: "material-symbols:keyboard-arrow-down-rounded"}
							/>
							<span>
								{expandedSlugs[brand.slug] ? "收起套餐与实测图" : "展开完整套餐表与实测截图"}
								{#if brand.speedtestImage || brand.unlockImages?.length}
									（含 {(brand.speedtestImage ? 1 : 0) + (brand.unlockImages?.length ?? 0)} 张实测图）
								{/if}
							</span>
						</button>
					</div>
				{/if}

				{#if expandedSlugs[brand.slug]}
					<div class="brand-card__details">
						{#if brand.plans.length > 0}
							<div class="detail-block">
								<h4>套餐价格与流量档位（商务参考，下单前以官网实时显示为准）</h4>
								<div class="table-wrap">
									<table>
										<thead>
											<tr>
												<th>套餐名称</th>
												<th>计费周期</th>
												<th>价格</th>
												<th>流量额度</th>
											</tr>
										</thead>
										<tbody>
											{#each brand.plans as plan}
												<tr>
													<td>{plan.name}</td>
													<td>{plan.cycle}</td>
													<td class="price-cell">{plan.price}</td>
													<td>{plan.traffic}</td>
												</tr>
											{/each}
										</tbody>
									</table>
								</div>
							</div>
						{/if}

						{#if brand.speed?.length}
							<div class="detail-block">
								<h4>节点延迟与下载参考（{brand.speedNote}）</h4>
								<div class="speed-grid">
									{#each brand.speed as s}
										<div class="speed-pill">
											<span class="speed-pill__region">{s.region}</span>
											<span class="speed-pill__lat">{s.latency}</span>
											<strong class="speed-pill__dl">{s.download}</strong>
										</div>
									{/each}
								</div>
							</div>
						{/if}

						{#if brand.speedtestImage || brand.unlockImages?.length}
							<div class="detail-block">
								<h4>本站实测全节点测速图与流媒体/AI解锁矩阵（点击放大查看原图）</h4>
								<div class="img-gallery">
									{#if brand.speedtestImage}
										<button
											type="button"
											class="img-thumb"
											onclick={() =>
												(previewImage = {
													src: brand.speedtestImage!,
													title: `${brand.name} 节点测速实测图`,
												})}
										>
											<img
												src={brand.speedtestImage}
												alt="{brand.name} 节点测速实测截图"
												loading="lazy"
											/>
											<span>{brand.name} · 节点拓扑测速实测图</span>
										</button>
									{/if}
									{#if brand.unlockImages?.length}
										{#each brand.unlockImages as uImg, idx}
											<button
												type="button"
												class="img-thumb"
												onclick={() =>
													(previewImage = {
														src: uImg,
														title: `${brand.name} 实测图 #${idx + 1}`,
													})}
											>
												<img
													src={uImg}
													alt="{brand.name} 多网测速与流媒体AI解锁实测图 {idx + 1}"
													loading="lazy"
												/>
												<span>{brand.name} · 三网测速/流媒体解锁实测 #{idx + 1}</span>
											</button>
										{/each}
									{/if}
								</div>
							</div>
						{/if}
					</div>
				{/if}
			</article>
		{/each}
	</div>
</Card>

{#if previewImage}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="lightbox" onclick={() => (previewImage = null)}>
		<div class="lightbox__inner" onclick={(e) => e.stopPropagation()}>
			<div class="lightbox__bar">
				<span>{previewImage.title}</span>
				<button type="button" onclick={() => (previewImage = null)}>关闭 ✕</button>
			</div>
			<img src={previewImage.src} alt={previewImage.title} />
		</div>
	</div>
{/if}

<style>
.brand-dir__notice {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 0.75rem;
	padding: 0.875rem 1rem;
	margin-bottom: 1.25rem;
	border-radius: 0.75rem;
	background: color-mix(in oklab, var(--primary) 8%, var(--surface-container-low));
	border: 1px solid color-mix(in oklab, var(--primary) 22%, transparent);
	font-size: 0.85rem;
	color: var(--on-surface-variant);
}
.brand-dir__notice-main {
	display: flex;
	align-items: center;
	gap: 0.5rem;
}
.brand-dir__legend {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
}
.badge {
	display: inline-flex;
	align-items: center;
	padding: 0.15rem 0.55rem;
	border-radius: 999px;
	font-size: 0.75rem;
	font-weight: 600;
}
.badge--measured {
	background: rgba(16, 185, 129, 0.15);
	color: #10b981;
	border: 1px solid rgba(16, 185, 129, 0.35);
}
.badge--vendor {
	background: rgba(56, 189, 248, 0.15);
	color: #0284c7;
	border: 1px solid rgba(56, 189, 248, 0.35);
}
.badge--historical {
	background: rgba(245, 158, 11, 0.15);
	color: #d97706;
	border: 1px solid rgba(245, 158, 11, 0.35);
}
.badge--featured {
	background: var(--primary);
	color: var(--on-primary);
}
.brand-dir__toolbar {
	display: flex;
	flex-direction: column;
	gap: 0.85rem;
	margin-bottom: 1.5rem;
	padding-bottom: 1rem;
	border-bottom: 1px solid var(--outline-variant);
}
.brand-dir__search-row {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 0.75rem;
}
.brand-dir__search-box {
	position: relative;
	flex: 1 1 20rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.55rem 0.9rem;
	border-radius: 0.75rem;
	border: 1px solid var(--outline-variant);
	background: var(--surface-container-lowest);
}
.brand-dir__search-box input {
	width: 100%;
	border: none;
	background: transparent;
	color: var(--on-surface);
	font-size: 0.92rem;
	outline: none;
}
.brand-dir__clear {
	border: none;
	background: none;
	color: var(--on-surface-variant);
	cursor: pointer;
}
.brand-dir__toggle {
	display: inline-flex;
	align-items: center;
	gap: 0.45rem;
	font-size: 0.85rem;
	color: var(--on-surface);
	cursor: pointer;
	user-select: none;
}
.brand-dir__filter-group {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 0.5rem;
}
.brand-dir__chips {
	display: flex;
	flex-wrap: wrap;
	gap: 0.4rem;
}
.chip {
	padding: 0.35rem 0.75rem;
	border-radius: 999px;
	border: 1px solid var(--outline-variant);
	background: var(--surface-container-low);
	color: var(--on-surface-variant);
	font-size: 0.8rem;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.15s ease;
}
.chip--active {
	background: var(--primary);
	color: var(--on-primary);
	border-color: var(--primary);
}
.brand-dir__result-bar {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	font-size: 0.85rem;
	color: var(--on-surface-variant);
}
.brand-dir__guide-link {
	color: var(--primary);
	font-weight: 600;
	text-decoration: none;
}
.brand-dir__list {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
.brand-card {
	padding: 1.15rem 1.25rem;
	border-radius: 1rem;
	border: 1px solid var(--outline-variant);
	background: var(--surface-container-lowest);
	transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.brand-card--featured {
	border: 2px solid var(--primary);
	background: color-mix(in oklab, var(--primary) 4%, var(--surface-container-lowest));
}
.brand-card--historical {
	opacity: 0.92;
}
.brand-card__head {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;
	gap: 0.75rem;
}
.brand-card__title-wrap {
	display: flex;
	align-items: flex-start;
	gap: 0.75rem;
}
.brand-card__rank {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: 2.3rem;
	height: 2.3rem;
	padding: 0 0.4rem;
	border-radius: 0.6rem;
	background: var(--surface-container-high);
	color: var(--on-surface-variant);
	font-weight: 700;
	font-size: 0.9rem;
}
.brand-card__rank--top {
	background: var(--primary-container);
	color: var(--on-primary-container);
}
.brand-card__name-row {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 0.45rem;
}
.brand-card__name {
	margin: 0;
	font-size: 1.15rem;
	font-weight: 700;
	color: var(--on-surface);
}
.brand-card__founded {
	font-size: 0.78rem;
	color: var(--on-surface-variant);
}
.brand-card__tags {
	display: flex;
	flex-wrap: wrap;
	gap: 0.35rem;
	margin-top: 0.35rem;
}
.tag-pill {
	font-size: 0.72rem;
	padding: 0.1rem 0.45rem;
	border-radius: 0.35rem;
	background: var(--surface-container);
	color: var(--on-surface-variant);
}
.brand-card__cta {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 0.5rem;
}
.code-btn {
	display: inline-flex;
	align-items: center;
	gap: 0.35rem;
	padding: 0.4rem 0.7rem;
	border-radius: 0.55rem;
	border: 1px dashed var(--primary);
	background: color-mix(in oklab, var(--primary) 8%, transparent);
	color: var(--primary);
	font-size: 0.8rem;
	cursor: pointer;
}
.code-btn__copied {
	font-style: normal;
	font-weight: 700;
	color: #10b981;
}
.reg-btn {
	display: inline-flex;
	align-items: center;
	gap: 0.3rem;
	padding: 0.45rem 0.9rem;
	border-radius: 0.6rem;
	background: var(--primary);
	color: var(--on-primary);
	font-size: 0.84rem;
	font-weight: 600;
	text-decoration: none;
}
.reg-btn--disabled {
	background: var(--surface-container-high);
	color: var(--on-surface-variant);
}
.brand-card__specs {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
	gap: 0.6rem;
	margin: 0.85rem 0;
	padding: 0.7rem 0.85rem;
	border-radius: 0.65rem;
	background: var(--surface-container-low);
}
.spec-item {
	display: flex;
	flex-direction: column;
	gap: 0.15rem;
}
.spec-item__label {
	font-size: 0.72rem;
	color: var(--on-surface-variant);
}
.spec-item__value {
	font-size: 0.88rem;
	font-weight: 600;
	color: var(--on-surface);
}
.spec-item__value--price {
	color: var(--primary);
}
.brand-card__summary {
	margin: 0.5rem 0;
	font-size: 0.9rem;
	line-height: 1.6;
	color: var(--on-surface);
}
.brand-card__unlock {
	margin: 0.35rem 0 0;
	font-size: 0.83rem;
	color: var(--on-surface-variant);
}
.brand-card__actions {
	margin-top: 0.75rem;
}
.expand-btn {
	display: inline-flex;
	align-items: center;
	gap: 0.3rem;
	padding: 0.35rem 0.7rem;
	border-radius: 0.5rem;
	border: 1px solid var(--outline-variant);
	background: var(--surface-container);
	color: var(--on-surface);
	font-size: 0.8rem;
	cursor: pointer;
}
.brand-card__details {
	margin-top: 0.9rem;
	padding-top: 0.9rem;
	border-top: 1px dashed var(--outline-variant);
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
.detail-block h4 {
	margin: 0 0 0.5rem;
	font-size: 0.86rem;
	color: var(--on-surface-variant);
}
.table-wrap {
	overflow-x: auto;
}
.table-wrap table {
	width: 100%;
	border-collapse: collapse;
	font-size: 0.83rem;
}
.table-wrap th,
.table-wrap td {
	padding: 0.45rem 0.65rem;
	text-align: left;
	border-bottom: 1px solid var(--outline-variant);
}
.price-cell {
	font-weight: 700;
	color: var(--primary);
}
.speed-grid {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
}
.speed-pill {
	display: inline-flex;
	align-items: center;
	gap: 0.45rem;
	padding: 0.35rem 0.7rem;
	border-radius: 0.5rem;
	background: var(--surface-container);
	font-size: 0.8rem;
}
.speed-pill__lat {
	color: #10b981;
}
.img-gallery {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
	gap: 0.75rem;
}
.img-thumb {
	display: flex;
	flex-direction: column;
	gap: 0.35rem;
	padding: 0.4rem;
	border-radius: 0.6rem;
	border: 1px solid var(--outline-variant);
	background: var(--surface-container-low);
	cursor: pointer;
	text-align: left;
}
.img-thumb img {
	width: 100%;
	height: 9.5rem;
	object-fit: cover;
	border-radius: 0.4rem;
}
.img-thumb span {
	font-size: 0.76rem;
	color: var(--on-surface-variant);
}
.lightbox {
	position: fixed;
	inset: 0;
	z-index: 9999;
	background: rgba(0, 0, 0, 0.82);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
}
.lightbox__inner {
	max-width: 92vw;
	max-height: 90vh;
	background: var(--surface-container);
	border-radius: 0.75rem;
	padding: 0.75rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}
.lightbox__bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 0.9rem;
	font-weight: 600;
}
.lightbox__bar button {
	border: none;
	background: var(--primary);
	color: var(--on-primary);
	padding: 0.25rem 0.65rem;
	border-radius: 0.4rem;
	cursor: pointer;
}
.lightbox__inner img {
	max-width: 88vw;
	max-height: 80vh;
	object-fit: contain;
}
</style>
