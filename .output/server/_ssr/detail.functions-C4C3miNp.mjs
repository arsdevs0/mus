import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { i as stringType, r as objectType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/detail.functions-C4C3miNp.js
var pickThumb = (thumbs) => {
	if (!Array.isArray(thumbs) || thumbs.length === 0) return null;
	const sorted = [...thumbs.filter((t) => typeof t?.width === "number")].sort((a, b) => a.width - b.width);
	let url = (sorted.find((t) => t.width >= 300) ?? sorted[sorted.length - 1] ?? thumbs[0])?.url ?? null;
	if (url) {
		if (/yt3\.(googleusercontent|ggpht)\.com/.test(url)) url = url.replace(/=[^/?&#]+(?=$|[?&#])/i, "=w480-h480-l90-rj");
		else if (/i\.ytimg\.com\/vi\//.test(url)) url = url.replace(/\/(maxresdefault|hqdefault|sddefault)\.jpg/, "/mqdefault.jpg");
	}
	return url;
};
var safeArtists = (artists) => {
	if (!Array.isArray(artists)) return "";
	return artists.map((a) => a?.name).filter(Boolean).join(", ");
};
var toSong = (s) => {
	const id = String(s?.id ?? s?.endpoint?.payload?.videoId ?? "");
	const title = s?.title?.text ?? s?.title ?? "";
	if (!id || !title) return null;
	const artistName = safeArtists(s?.artists ?? s?.authors) || s?.author?.name || s?.subtitle?.text || "";
	const lowerTitle = title.toLowerCase();
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
var ytArtist_createServerFn_handler = createServerRpc({
	id: "36397bf01a85d63285b98b825cf866f7e36954c7a1ea34f059dbc5e5bba9a776",
	name: "ytArtist",
	filename: "src/lib/innertube/detail.functions.ts"
}, (opts) => ytArtist.__executeServer(opts));
var ytArtist = createServerFn({ method: "POST" }).inputValidator((d) => objectType({ id: stringType().min(3) }).parse(d)).handler(ytArtist_createServerFn_handler, async ({ data }) => {
	const { getInnertube } = await import("./client-DyxlH9AC.mjs");
	const yt = await getInnertube();
	try {
		const a = await yt.music.getArtist(data.id);
		const getThumb = (item) => pickThumb(item?.thumbnails) ?? pickThumb(item?.thumbnail?.contents) ?? pickThumb(item?.thumbnail) ?? pickThumb(item?.thumbnailDetails?.thumbnails) ?? null;
		const name = a?.header?.title?.text ?? a?.name ?? "Artist";
		const thumbnail = getThumb(a?.header) ?? null;
		const description = a?.header?.description?.text ?? a?.description?.text ?? null;
		const sections = a?.sections ?? [];
		const findSec = (key) => sections.find((s) => {
			return (s?.header?.title?.text ?? s?.title?.text ?? s?.title ?? "").toLowerCase().includes(key);
		});
		const songsSec = findSec("song");
		const albumsSec = findSec("album");
		const singlesSec = findSec("single") || findSec("ep");
		const releasesSec = findSec("release");
		const songs = (songsSec?.contents ?? []).map(toSong).filter((s) => {
			if (!s || !s.id || !s.title) return false;
			const tLower = s.title.toLowerCase();
			const aLower = s.artist.toLowerCase();
			if (name.toLowerCase() === "bella") {
				if (tLower.includes("enti ") || tLower.includes("lobo al") || tLower.includes("moi") || aLower === "cole" || aLower === "bella moi" || aLower.includes("trane") || tLower.includes("heer lig")) return false;
				if (aLower !== "bella" && !aLower.includes("bella,") && !aLower.includes(", bella") && !aLower.includes("bella ") && aLower !== "") return false;
			}
			return true;
		}).slice(0, 40);
		const filterGeneric = (a) => {
			if (!a.id || !a.title) return false;
			if (name.toLowerCase() === "bella") {
				const tLower = a.title.toLowerCase();
				if (tLower.includes("enti ") || tLower.includes("lobo al") || tLower.includes("moi") || tLower.includes("trane") || tLower.includes("heer lig")) return false;
			}
			return true;
		};
		const albums = (albumsSec?.contents ?? []).map((al) => ({
			id: String(al?.id ?? ""),
			title: al?.title?.text ?? "",
			year: al?.year ?? null,
			thumbnail: getThumb(al)
		})).filter(filterGeneric).slice(0, 20);
		const singles = (singlesSec?.contents ?? []).map((al) => ({
			id: String(al?.id ?? ""),
			title: al?.title?.text ?? "",
			year: al?.year ?? null,
			thumbnail: getThumb(al)
		})).filter(filterGeneric).slice(0, 20);
		let releases = (releasesSec?.contents ?? []).map((al) => {
			const videoId = al?.endpoint?.payload?.videoId ?? al?.videoId;
			return {
				id: String(videoId ?? al?.id ?? ""),
				title: al?.title?.text ?? "",
				year: al?.year ?? null,
				thumbnail: getThumb(al),
				isSong: !!videoId
			};
		}).filter(filterGeneric).slice(0, 20);
		if (releases.length === 0) {
			const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
			const recentSingles = singles.filter((s) => String(s.year) === currentYear).map((s) => ({
				...s,
				isSong: false
			}));
			const recentAlbums = albums.filter((a) => String(a.year) === currentYear).map((a) => ({
				...a,
				isSong: false
			}));
			releases = [...recentSingles, ...recentAlbums];
			if (releases.length === 0) {
				if (singles[0]) releases.push({
					...singles[0],
					isSong: false
				});
				else if (albums[0]) releases.push({
					...albums[0],
					isSong: false
				});
			}
		}
		return {
			name,
			thumbnail,
			description,
			songs,
			albums,
			singles,
			releases
		};
	} catch (err) {
		console.error("[ytArtist] failed", err);
		return {
			name: "Artist",
			thumbnail: null,
			description: null,
			songs: [],
			albums: [],
			singles: [],
			releases: []
		};
	}
});
var ytAlbum_createServerFn_handler = createServerRpc({
	id: "b632ce06c8cf4c522c790d96ac8d440f73cf826076beca29186aa56d50d21988",
	name: "ytAlbum",
	filename: "src/lib/innertube/detail.functions.ts"
}, (opts) => ytAlbum.__executeServer(opts));
var ytAlbum = createServerFn({ method: "POST" }).inputValidator((d) => objectType({ id: stringType().min(3) }).parse(d)).handler(ytAlbum_createServerFn_handler, async ({ data }) => {
	const { getInnertube } = await import("./client-DyxlH9AC.mjs");
	const yt = await getInnertube();
	try {
		const al = await yt.music.getAlbum(data.id);
		const title = al?.header?.title?.text ?? al?.title ?? "Album";
		const artist = safeArtists(al?.header?.artists) ?? al?.header?.author?.name ?? al?.header?.subtitle?.text ?? "";
		const year = al?.header?.year ?? null;
		const thumbnail = pickThumb(al?.header?.thumbnail?.contents) ?? pickThumb(al?.header?.thumbnails);
		return {
			title,
			artist,
			year,
			thumbnail,
			tracks: (al?.contents ?? []).map((s) => ({
				id: String(s?.id ?? ""),
				title: s?.title?.text ?? s?.title ?? "",
				artist: safeArtists(s?.artists) || artist,
				album: title,
				thumbnail,
				duration: s?.duration?.text ?? null
			})).filter((s) => s && s.id && s.title)
		};
	} catch (err) {
		console.error("[ytAlbum] failed", err);
		return {
			title: "Album",
			artist: "",
			year: null,
			thumbnail: null,
			tracks: []
		};
	}
});
var ytPlaylist_createServerFn_handler = createServerRpc({
	id: "484d64d242e3be1f099facadca8ad705b2185e729bcbab9ed24f0587e8a3291b",
	name: "ytPlaylist",
	filename: "src/lib/innertube/detail.functions.ts"
}, (opts) => ytPlaylist.__executeServer(opts));
var ytPlaylist = createServerFn({ method: "POST" }).validator((d) => objectType({ id: stringType().min(3) }).parse(d)).handler(ytPlaylist_createServerFn_handler, async ({ data }) => {
	const { getInnertube } = await import("./client-DyxlH9AC.mjs");
	const yt = await getInnertube();
	try {
		const pl = await yt.music.getPlaylist(data.id);
		return {
			title: pl?.header?.title?.text ?? pl?.title ?? "Playlist",
			subtitle: pl?.header?.subtitle?.text ?? pl?.header?.description?.text ?? "",
			thumbnail: pickThumb(pl?.header?.thumbnail?.contents) ?? pickThumb(pl?.header?.thumbnails),
			tracks: (pl?.contents ?? pl?.items ?? []).map(toSong).filter((s) => s && s.id && s.title).slice(0, 100)
		};
	} catch (err) {
		try {
			return {
				title: "Mix",
				subtitle: "Auto-generated Radio",
				thumbnail: null,
				tracks: ((await yt.music.getUpNext(data.id))?.contents ?? []).map(toSong).filter((s) => s && s.id && s.title).slice(0, 100)
			};
		} catch (innerErr) {
			console.error("[ytPlaylist] failed completely", innerErr);
			return {
				title: "Playlist",
				subtitle: "",
				thumbnail: null,
				tracks: []
			};
		}
	}
});
//#endregion
export { ytAlbum_createServerFn_handler, ytArtist_createServerFn_handler, ytPlaylist_createServerFn_handler };
