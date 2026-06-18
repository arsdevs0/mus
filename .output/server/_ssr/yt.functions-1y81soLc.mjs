import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { i as stringType, r as objectType, t as booleanType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/yt.functions-1y81soLc.js
var normalizeThumb = (url) => {
	if (!url) return null;
	try {
		if (/yt3\.(googleusercontent|ggpht)\.com/.test(url)) return url.replace(/=[^/?&#]+(?=$|[?&#])/i, "=w320-h320-l90-rj");
		return url;
	} catch {
		return url;
	}
};
var pickThumb = (thumbs) => {
	if (!Array.isArray(thumbs) || thumbs.length === 0) return null;
	const sorted = [...thumbs.filter((t) => typeof t?.width === "number")].sort((a, b) => a.width - b.width);
	return normalizeThumb((sorted.find((t) => t.width >= 300) ?? sorted[sorted.length - 1] ?? thumbs[0])?.url ?? null);
};
var safeArtists = (artists) => {
	if (!Array.isArray(artists)) return "";
	return artists.map((a) => a?.name).filter(Boolean).join(", ");
};
var textOf = (value) => String(value?.text ?? value?.title?.text ?? value?.title ?? value?.name ?? "");
var payloadOf = (item) => item?.endpoint?.payload ?? item?.title?.endpoint?.payload ?? item?.flex_columns?.[0]?.title?.endpoint?.payload ?? item?.flex_columns?.[0]?.title?.runs?.[0]?.endpoint?.payload ?? item?.menu?.items?.find((m) => m?.endpoint?.payload?.videoId)?.endpoint?.payload ?? {};
var pageTypeOf = (item) => payloadOf(item)?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType ?? "";
var flattenSearchContents = (contents) => (contents ?? []).flatMap((item) => item?.contents ?? [item]);
var subtitleRuns = (item) => item?.flex_columns?.[1]?.title?.runs ?? item?.subtitle?.runs ?? [];
var subtitleText = (item) => {
	const col = item?.flex_columns?.[1]?.title;
	return String(col?.text ?? col?.runs?.map((r) => r.text).join("") ?? item?.subtitle?.text ?? "");
};
var toSong = (item) => {
	const payload = payloadOf(item);
	const runs = subtitleRuns(item).filter((r) => r?.text && r.text !== " • ");
	const fallbackParts = subtitleText(item).split(" • ").filter(Boolean);
	const duration = [...runs].reverse().find((r) => /^\d{1,2}:\d{2}(?::\d{2})?$/.test(r.text))?.text ?? null;
	return {
		id: String(item?.id ?? payload?.videoId ?? ""),
		title: textOf(item?.flex_columns?.[0]?.title ?? item),
		artist: safeArtists(item?.artists ?? item?.authors) || runs[0]?.text || fallbackParts[0] || "",
		album: item?.album?.name ?? runs.find((r) => r?.endpoint?.payload?.browseId?.startsWith("MPRE"))?.text ?? null,
		thumbnail: pickThumb(item?.thumbnail?.contents) ?? pickThumb(item?.thumbnails),
		duration
	};
};
var toArtist = (item) => ({
	id: String(item?.id ?? payloadOf(item)?.browseId ?? ""),
	name: textOf(item?.flex_columns?.[0]?.title ?? item),
	thumbnail: pickThumb(item?.thumbnail?.contents) ?? pickThumb(item?.thumbnails)
});
var toAlbum = (item) => {
	const runs = subtitleRuns(item).filter((r) => r?.text && r.text !== " • ");
	return {
		id: String(item?.id ?? payloadOf(item)?.browseId ?? ""),
		title: textOf(item?.flex_columns?.[0]?.title ?? item),
		artist: safeArtists(item?.artists ?? item?.authors) || runs[0]?.text || "",
		thumbnail: pickThumb(item?.thumbnail?.contents) ?? pickThumb(item?.thumbnails)
	};
};
async function getTrendingBollywoodPlaylists(yt) {
	try {
		return {
			title: "Trending community playlists",
			items: ((await yt.music.search("Bollywood Pop Dance Hits", { type: "playlist" }))?.playlists?.contents ?? []).map((p) => {
				return {
					id: String(p.id ?? p.endpoint?.payload?.playlistId ?? ""),
					title: String(p.title ?? ""),
					subtitle: String(p.author?.name ?? p.subtitle ?? "Bollywood Mix"),
					thumbnail: pickThumb(p.thumbnail?.contents) ?? pickThumb(p.thumbnails),
					type: "playlist"
				};
			}).filter((p) => p.id && p.title).slice(0, 12)
		};
	} catch (err) {
		console.error("Failed to fetch trending Bollywood playlists", err);
		return {
			title: "Trending community playlists",
			items: []
		};
	}
}
async function getDancingOnYourOwnSongs(yt) {
	try {
		const userArtists = [
			"Talha Anjum",
			"Umer Anjum",
			"Bella Indian Rapper",
			"Straight Outta Srinagar SOS",
			"Seedhe Maut",
			"Eminem",
			"Raftaar",
			"Siyaahi",
			"Naam Sujal",
			"Vichaar",
			"Taimour Baig",
			"Farhan Khan",
			"Yungsta Indian Rapper",
			"Saiyaara",
			"Main Yahaan Hoon",
			"Jeene Laga Hoon",
			"Bekhayali",
			"Slowed Reverb Bollywood Songs"
		];
		const randomQuery = userArtists[Math.floor(Math.random() * userArtists.length)];
		const rawSongs = ((await yt.music.search(randomQuery + " songs", { type: "song" }))?.songs?.contents ?? []).map((s) => {
			const lowerTitle = String(s.title ?? "").toLowerCase();
			if (lowerTitle.includes("karaoke") || lowerTitle.includes("cover")) return null;
			return {
				id: String(s.id ?? s.endpoint?.payload?.videoId ?? ""),
				title: String(s.title ?? ""),
				subtitle: String(safeArtists(s.artists) || s.author?.name || ""),
				thumbnail: pickThumb(s.thumbnail?.contents) ?? pickThumb(s.thumbnails),
				type: "song"
			};
		}).filter((s) => s && s.id && s.title);
		const unique = [];
		const seen = /* @__PURE__ */ new Set();
		for (const s of rawSongs) {
			const key = s.title.toLowerCase().trim();
			if (!seen.has(key)) {
				seen.add(key);
				unique.push(s);
			}
		}
		return {
			title: "Dancing on your own",
			items: unique.slice(0, 12)
		};
	} catch (err) {
		console.error("Failed to fetch Dancing on your own songs", err);
		return {
			title: "Dancing on your own",
			items: []
		};
	}
}
async function getHelloSummerSongs(yt) {
	try {
		const userBollywood = [
			"Saiyaara",
			"Main Yahaan Hoon",
			"Jeene Laga Hoon",
			"Bekhayali",
			"Tera Zikr",
			"Ek Raat Vilen",
			"Main Hoon Na"
		];
		const randomQuery = userBollywood[Math.floor(Math.random() * userBollywood.length)];
		const rawSongs = ((await yt.music.search(randomQuery + " songs", { type: "song" }))?.songs?.contents ?? []).map((s) => {
			const lowerTitle = String(s.title ?? "").toLowerCase();
			if (lowerTitle.includes("karaoke") || lowerTitle.includes("cover")) return null;
			return {
				id: String(s.id ?? s.endpoint?.payload?.videoId ?? ""),
				title: String(s.title ?? ""),
				subtitle: String(safeArtists(s.artists) || s.author?.name || ""),
				thumbnail: pickThumb(s.thumbnail?.contents) ?? pickThumb(s.thumbnails),
				type: "song"
			};
		}).filter((s) => s && s.id && s.title);
		const unique = [];
		const seen = /* @__PURE__ */ new Set();
		for (const s of rawSongs) {
			const key = s.title.toLowerCase().trim();
			if (!seen.has(key)) {
				seen.add(key);
				unique.push(s);
			}
		}
		return {
			title: "Hello Summer",
			items: unique.slice(0, 12)
		};
	} catch (err) {
		console.error("Failed to fetch Hello Summer songs", err);
		return {
			title: "Hello Summer",
			items: []
		};
	}
}
var ytHome_createServerFn_handler = createServerRpc({
	id: "944f1d92a864fa4dcc375fb23241e83e356494f9dd61e9efb0dff035af53267e",
	name: "ytHome",
	filename: "src/lib/innertube/yt.functions.ts"
}, (opts) => ytHome.__executeServer(opts));
var ytHome = createServerFn({ method: "POST" }).validator((d) => objectType({ refresh: booleanType().optional() }).optional().parse(d)).handler(ytHome_createServerFn_handler, async () => {
	const { getInnertube } = await import("./client-DyxlH9AC.mjs");
	const yt = await getInnertube();
	try {
		const [home, trendingPlaylists, dancingSongs, helloSummer] = await Promise.all([
			yt.music.getHomeFeed(),
			getTrendingBollywoodPlaylists(yt),
			getDancingOnYourOwnSongs(yt),
			getHelloSummerSongs(yt)
		]);
		const feedSections = (home?.sections ?? home?.contents ?? []).map((sec) => {
			const items = (sec?.contents ?? []).map((it) => {
				const id = it?.id ?? it?.endpoint?.payload?.videoId ?? it?.endpoint?.payload?.browseId ?? it?.endpoint?.payload?.playlistId ?? "";
				const title = it?.title?.text ?? it?.title ?? "";
				const subtitle = it?.subtitle?.text ?? safeArtists(it?.authors ?? it?.artists) ?? it?.author?.name ?? "";
				const thumbnail = pickThumb(it?.thumbnail?.contents) ?? pickThumb(it?.thumbnails) ?? null;
				return {
					id: String(id),
					title: String(title),
					subtitle: String(subtitle),
					thumbnail,
					type: it?.item_type ?? "song"
				};
			}).filter((i) => i.id && i.title);
			return {
				title: sec?.header?.title?.text ?? sec?.title?.text ?? sec?.title ?? "Recommended",
				items: items.slice(0, 12)
			};
		}).filter((s) => {
			const t = s.title.toLowerCase();
			const itemsWithThumbs = s.items.filter((i) => i.thumbnail != null).length;
			if (s.items.length > 0 && itemsWithThumbs / s.items.length < .5) return false;
			return s.items.length > 0 && s.title !== "Trending community playlists" && s.title !== "Dancing on your own" && !t.includes("india's biggest hits") && !t.includes("india biggest hits") && !t.includes("hello, summer") && !t.includes("hello summer") && !t.includes("hindi hits") && !t.includes("brb, being nostalgic") && !t.includes("brb being nostalgic");
		});
		const sections = [];
		if (helloSummer.items.length > 0) sections.push(helloSummer);
		if (dancingSongs.items.length > 0) sections.push(dancingSongs);
		if (trendingPlaylists.items.length > 0) sections.push(trendingPlaylists);
		const shuffledFeed = [...feedSections].sort(() => Math.random() - .5).slice(0, 8);
		sections.push(...shuffledFeed);
		return { sections };
	} catch (err) {
		console.error("[ytHome] failed", err);
		return { sections: [] };
	}
});
var ytSearch_createServerFn_handler = createServerRpc({
	id: "b32b7a2bc38062874d9f581adaa141c5ced11256f8d7baeedfe3af5edd355f08",
	name: "ytSearch",
	filename: "src/lib/innertube/yt.functions.ts"
}, (opts) => ytSearch.__executeServer(opts));
var ytSearch = createServerFn({ method: "POST" }).inputValidator((d) => objectType({ query: stringType().min(1).max(120) }).parse(d)).handler(ytSearch_createServerFn_handler, async ({ data }) => {
	const { getInnertube } = await import("./client-DyxlH9AC.mjs");
	const yt = await getInnertube();
	try {
		const [songRes, videoRes, artistRes, albumRes] = await Promise.all([
			yt.music.search(data.query, { type: "song" }),
			yt.music.search(data.query, { type: "video" }),
			yt.music.search(data.query, { type: "artist" }),
			yt.music.search(data.query, { type: "album" })
		]);
		return {
			songs: [...flattenSearchContents(songRes?.contents), ...flattenSearchContents(videoRes?.contents)].map(toSong).filter((s) => s.id && s.title).slice(0, 30),
			artists: flattenSearchContents(artistRes?.contents).filter((a) => pageTypeOf(a).includes("ARTIST") || subtitleText(a).toLowerCase().includes("artist")).map(toArtist).filter((a) => a.id && a.name).slice(0, 10),
			albums: flattenSearchContents(albumRes?.contents).filter((al) => pageTypeOf(al).includes("ALBUM") || String(al?.id ?? payloadOf(al)?.browseId ?? "").startsWith("MPRE")).map(toAlbum).filter((a) => a.id && a.title).slice(0, 10)
		};
	} catch (err) {
		console.error("[ytSearch] failed", err);
		return {
			songs: [],
			artists: [],
			albums: []
		};
	}
});
var ytStream_createServerFn_handler = createServerRpc({
	id: "803ca2a66f31db75ff1b16878077ba2612d20ed5cbe95378c9d6027dfca6baf6",
	name: "ytStream",
	filename: "src/lib/innertube/yt.functions.ts"
}, (opts) => ytStream.__executeServer(opts));
var ytStream = createServerFn({ method: "POST" }).inputValidator((d) => objectType({ videoId: stringType().min(5) }).parse(d)).handler(ytStream_createServerFn_handler, async ({ data }) => {
	const { getInnertube } = await import("./client-DyxlH9AC.mjs");
	const yt = await getInnertube();
	const info = await yt.getBasicInfo(data.videoId, { client: "IOS" });
	const format = info.chooseFormat({
		type: "audio",
		quality: "best"
	});
	let url = format?.url ?? "";
	try {
		if (typeof format?.decipher === "function") url = await Promise.resolve(format.decipher(yt.session.player));
	} catch (e) {
		console.warn("[ytStream] decipher fallback", e);
	}
	if (!url) throw new Error("No audio stream available");
	return {
		url,
		title: info?.basic_info?.title ?? "",
		author: info?.basic_info?.author ?? "",
		duration: info?.basic_info?.duration ?? 0,
		thumbnail: pickThumb(info?.basic_info?.thumbnail) ?? null
	};
});
var ytPrepareStream_createServerFn_handler = createServerRpc({
	id: "1b639f0b073019858c4e6722dd640b44b24b3f504de42ac93a7c4be689b82822",
	name: "ytPrepareStream",
	filename: "src/lib/innertube/yt.functions.ts"
}, (opts) => ytPrepareStream.__executeServer(opts));
var ytPrepareStream = createServerFn({ method: "POST" }).inputValidator((d) => objectType({ videoId: stringType().min(5) }).parse(d)).handler(ytPrepareStream_createServerFn_handler, async ({ data }) => {
	const { resolveAudioStream } = await import("./stream-cache.server-hyro7GWe.mjs");
	const stream = await resolveAudioStream(data.videoId);
	return {
		url: `/api/public/stream/${encodeURIComponent(data.videoId)}`,
		contentType: stream.contentType
	};
});
var ytSuggestions_createServerFn_handler = createServerRpc({
	id: "e122c249daa4ed51794f8ad3b3ac2721a46725beeefe7e448e05b88afe3f2288",
	name: "ytSuggestions",
	filename: "src/lib/innertube/yt.functions.ts"
}, (opts) => ytSuggestions.__executeServer(opts));
var ytSuggestions = createServerFn({ method: "POST" }).inputValidator((d) => objectType({ query: stringType().min(1).max(80) }).parse(d)).handler(ytSuggestions_createServerFn_handler, async ({ data }) => {
	const { getInnertube } = await import("./client-DyxlH9AC.mjs");
	const yt = await getInnertube();
	try {
		const res = await yt.music.getSearchSuggestions(data.query);
		const list = [];
		for (const sec of res ?? []) for (const item of sec?.contents ?? []) {
			const t = item?.suggestion?.text ?? item?.query ?? null;
			if (t) list.push(t);
		}
		return { suggestions: list.slice(0, 10) };
	} catch {
		return { suggestions: [] };
	}
});
//#endregion
export { ytHome_createServerFn_handler, ytPrepareStream_createServerFn_handler, ytSearch_createServerFn_handler, ytStream_createServerFn_handler, ytSuggestions_createServerFn_handler };
