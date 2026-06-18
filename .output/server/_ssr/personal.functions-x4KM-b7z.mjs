import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { i as stringType, n as numberType, r as objectType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/personal.functions-x4KM-b7z.js
var ytRelated_createServerFn_handler = createServerRpc({
	id: "f8b0d440de6b69ab701a20d1033c2fb474a623eee1ad5234f220692a72e0114a",
	name: "ytRelated",
	filename: "src/lib/innertube/personal.functions.ts"
}, (opts) => ytRelated.__executeServer(opts));
var ytRelated = createServerFn({ method: "POST" }).inputValidator((d) => objectType({ videoId: stringType().min(5) }).parse(d)).handler(ytRelated_createServerFn_handler, async ({ data }) => {
	const { getInnertube } = await import("./client-DyxlH9AC.mjs");
	const yt = await getInnertube();
	try {
		return { songs: ((await yt.music.getUpNext(data.videoId))?.contents ?? []).map(songFromResult).filter((x) => !!x && x.id !== data.videoId).slice(0, 20) };
	} catch {
		return { songs: [] };
	}
});
var pickThumb = (thumbs) => {
	if (!Array.isArray(thumbs) || thumbs.length === 0) return null;
	const url = [...thumbs].sort((a, b) => (b?.width ?? 0) - (a?.width ?? 0))[0]?.url ?? null;
	return typeof url === "string" && /yt3\.(googleusercontent|ggpht)\.com/.test(url) ? url.replace(/=[^/?&#]+(?=$|[?&#])/i, "=w320-h320-l90-rj") : url;
};
var safeArtists = (artists) => {
	if (!Array.isArray(artists)) return "";
	return artists.map((a) => a?.name).filter(Boolean).join(", ");
};
var songFromResult = (s) => {
	const id = String(s?.id ?? "");
	const title = s?.title?.text ?? s?.title ?? "";
	if (!id || !title) return null;
	const lowerTitle = title.toLowerCase();
	const artistName = safeArtists(s?.artists ?? s?.authors) || s?.author?.name || "";
	const lowerArtist = artistName.toLowerCase();
	if (lowerTitle.includes("karaoke") || lowerTitle.includes("cover") || lowerArtist.includes("nanku") || lowerArtist.includes("drv") || lowerArtist.includes("byg smyle") || lowerArtist.includes("byg smile")) return null;
	return {
		id,
		title,
		artist: artistName,
		album: s?.album?.name ?? null,
		thumbnail: pickThumb(s?.thumbnail?.contents) ?? pickThumb(s?.thumbnails),
		duration: s?.duration?.text ?? null
	};
};
async function searchSongs(yt, query, limit = 6) {
	try {
		const res = await yt.music.search(query, { type: "song" });
		return (res?.songs?.contents ?? res?.contents ?? []).map(songFromResult).filter((x) => !!x).slice(0, limit);
	} catch {
		return [];
	}
}
async function relatedFromVideo(yt, videoId, limit = 12) {
	try {
		return ((await yt.music.getUpNext(videoId))?.contents ?? []).map(songFromResult).filter((x) => !!x && x.id !== videoId).slice(0, limit);
	} catch {
		return [];
	}
}
function dedupe(songs) {
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const s of songs) {
		if (seen.has(s.id)) continue;
		seen.add(s.id);
		out.push(s);
	}
	return out;
}
function shuffle(arr) {
	const a = arr.slice();
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}
var personalCache = {};
var ytPersonal_createServerFn_handler = createServerRpc({
	id: "77aec30d19e330428e736ba05be692be04a1f485e744143aa915470963822c19",
	name: "ytPersonal",
	filename: "src/lib/innertube/personal.functions.ts"
}, (opts) => ytPersonal.__executeServer(opts));
var ytPersonal = createServerFn({ method: "POST" }).validator((d) => {
	try {
		return objectType({ historySeedId: stringType().optional() }).parse(d);
	} catch {
		return { historySeedId: void 0 };
	}
}).handler(ytPersonal_createServerFn_handler, async ({ data }) => {
	const seed = data.historySeedId || "default";
	const { getInnertube } = await import("./client-DyxlH9AC.mjs");
	const { getTasteProfile, rotatePick } = await import("./taste.server-Bvz3gUqT.mjs");
	const yt = await getInnertube();
	const profile = getTasteProfile();
	const userArtistsOnly = [
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
		"Yungsta Indian Rapper"
	];
	const userPrefs = [
		...userArtistsOnly,
		"Saiyaara",
		"Main Yahaan Hoon",
		"Jeene Laga Hoon",
		"Bekhayali",
		"Slowed Reverb Bollywood Songs"
	];
	const randomOffset = Math.floor(Math.random() * 1e3);
	const topArtists = [
		userPrefs[randomOffset % userPrefs.length],
		userPrefs[(randomOffset + 1) % userPrefs.length],
		userPrefs[(randomOffset + 2) % userPrefs.length],
		userPrefs[(randomOffset + 3) % userPrefs.length]
	];
	const artistResults = await Promise.all(topArtists.map(async (name) => ({
		name,
		songs: await searchSongs(yt, name, 4)
	})));
	const forYouRaw = [];
	for (let i = 0; i < 4; i++) for (const a of artistResults) if (a.songs[i]) forYouRaw.push(a.songs[i]);
	const forYou = dedupe(forYouRaw).slice(0, 30);
	const groupSize = Math.max(2, Math.ceil(topArtists.length / 3));
	const dailyMixes = [];
	for (let g = 0; g < 3; g++) {
		const group = artistResults.slice(g * groupSize, g * groupSize + groupSize);
		if (group.length === 0) continue;
		const songs = dedupe(group.flatMap((x) => x.songs)).slice(0, 20);
		if (songs.length === 0) continue;
		dailyMixes.push({
			id: `mix-${g + 1}`,
			title: `Daily Mix ${g + 1}`,
			subtitle: group.map((x) => x.name).join(" · "),
			songs: shuffle(songs)
		});
	}
	const seedLib = rotatePick(profile.library, 3, randomOffset);
	const feed = {
		forYou,
		dailyMixes,
		radios: (await Promise.all(seedLib.map(async (seed) => {
			const related = await relatedFromVideo(yt, seed.id, 20);
			if (related.length < 3) return null;
			return {
				id: `radio-${seed.id}`,
				title: `${seed.title} Radio`,
				subtitle: seed.artists.slice(0, 2).join(", "),
				seedId: seed.id,
				songs: related
			};
		}))).filter((r) => !!r),
		topArtists: await Promise.all([
			userArtistsOnly[(randomOffset + 4) % userArtistsOnly.length],
			userArtistsOnly[(randomOffset + 5) % userArtistsOnly.length],
			userArtistsOnly[(randomOffset + 6) % userArtistsOnly.length],
			userArtistsOnly[(randomOffset + 7) % userArtistsOnly.length],
			userArtistsOnly[(randomOffset + 8) % userArtistsOnly.length],
			userArtistsOnly[(randomOffset + 9) % userArtistsOnly.length]
		].map(async (name) => {
			try {
				const a = ((await yt.music.search(name, { type: "artist" }))?.artists?.contents ?? [])[0];
				return {
					id: String(a?.browseId ?? a?.id ?? ""),
					name: name.replace(/Indian Rapper|Straight Outta Srinagar |Songs/gi, "").trim(),
					thumbnail: pickThumb(a?.thumbnail?.contents) ?? pickThumb(a?.thumbnails) ?? null
				};
			} catch {
				return {
					id: "",
					name: name.replace(/Indian Rapper|Straight Outta Srinagar |Songs/gi, "").trim(),
					thumbnail: null
				};
			}
		}))
	};
	personalCache[seed] = {
		feed,
		time: Date.now()
	};
	return feed;
});
var ytMoreRecommendations_createServerFn_handler = createServerRpc({
	id: "a2376eb0ea561ee6444303ea141c2e4f30b16eff26fde53723b8d06fcaa6a7b0",
	name: "ytMoreRecommendations",
	filename: "src/lib/innertube/personal.functions.ts"
}, (opts) => ytMoreRecommendations.__executeServer(opts));
var ytMoreRecommendations = createServerFn({ method: "POST" }).validator((d) => objectType({ page: numberType().int().min(1).max(50) }).parse(d)).handler(ytMoreRecommendations_createServerFn_handler, async ({ data }) => {
	const { getInnertube } = await import("./client-DyxlH9AC.mjs");
	const { getTasteProfile, rotatePick } = await import("./taste.server-Bvz3gUqT.mjs");
	const yt = await getInnertube();
	const profile = getTasteProfile();
	const artists = rotatePick(profile.topArtists, 3, data.page * 2);
	const seeds = rotatePick(profile.library, 2, data.page * 3);
	const userPrefs = [
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
	const searchQuery = userPrefs[(data.page - 1) % userPrefs.length] + " songs";
	const [artistSongs, relatedSongs, mixSongs] = await Promise.all([
		Promise.all(artists.map((name) => searchSongs(yt, name, 6))),
		Promise.all(seeds.map((seed) => relatedFromVideo(yt, seed.id, 6))),
		searchSongs(yt, searchQuery, 12)
	]);
	return {
		title: "More songs for you",
		songs: shuffle(dedupe([
			...artistSongs.flat(),
			...relatedSongs.flat(),
			...mixSongs
		])).slice(0, 24)
	};
});
//#endregion
export { ytMoreRecommendations_createServerFn_handler, ytPersonal_createServerFn_handler, ytRelated_createServerFn_handler };
