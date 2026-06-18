import { i as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, s as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-BhguCfcT.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { i as stringType, n as numberType, r as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PlayerContext-ff8Mv2tX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var ytRelated = createServerFn({ method: "POST" }).inputValidator((d) => objectType({ videoId: stringType().min(5) }).parse(d)).handler(createSsrRpc("f8b0d440de6b69ab701a20d1033c2fb474a623eee1ad5234f220692a72e0114a"));
var ytPersonal = createServerFn({ method: "POST" }).validator((d) => {
	try {
		return objectType({ historySeedId: stringType().optional() }).parse(d);
	} catch {
		return { historySeedId: void 0 };
	}
}).handler(createSsrRpc("77aec30d19e330428e736ba05be692be04a1f485e744143aa915470963822c19"));
var ytMoreRecommendations = createServerFn({ method: "POST" }).validator((d) => objectType({ page: numberType().int().min(1).max(50) }).parse(d)).handler(createSsrRpc("a2376eb0ea561ee6444303ea141c2e4f30b16eff26fde53723b8d06fcaa6a7b0"));
var DB_NAME = "arsmusic-downloads";
var DB_VERSION = 1;
var STORE_AUDIO = "audio";
var STORE_META = "meta";
var LS_REGISTRY = "arsmusic.downloads.v1";
var DownloadManagerImpl = class {
	db = null;
	listeners = /* @__PURE__ */ new Set();
	registry = {};
	abortControllers = /* @__PURE__ */ new Map();
	constructor() {
		if (typeof window !== "undefined") this.registry = this.loadRegistry();
	}
	loadRegistry() {
		try {
			const raw = localStorage.getItem(LS_REGISTRY);
			return raw ? JSON.parse(raw) : {};
		} catch {
			return {};
		}
	}
	saveRegistry() {
		try {
			localStorage.setItem(LS_REGISTRY, JSON.stringify(this.registry));
		} catch {}
	}
	notify() {
		for (const fn of this.listeners) fn({ ...this.registry });
	}
	subscribe(fn) {
		this.listeners.add(fn);
		return () => this.listeners.delete(fn);
	}
	async openDB() {
		if (this.db) return this.db;
		return new Promise((resolve, reject) => {
			const req = indexedDB.open(DB_NAME, DB_VERSION);
			req.onupgradeneeded = () => {
				const db = req.result;
				if (!db.objectStoreNames.contains(STORE_AUDIO)) db.createObjectStore(STORE_AUDIO);
				if (!db.objectStoreNames.contains(STORE_META)) db.createObjectStore(STORE_META);
			};
			req.onsuccess = () => {
				this.db = req.result;
				resolve(this.db);
			};
			req.onerror = () => reject(req.error);
		});
	}
	async putBlob(id, blob) {
		const db = await this.openDB();
		return new Promise((resolve, reject) => {
			const tx = db.transaction(STORE_AUDIO, "readwrite");
			tx.objectStore(STORE_AUDIO).put(blob, id);
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error);
		});
	}
	async getBlob(id) {
		const db = await this.openDB();
		return new Promise((resolve, reject) => {
			const req = db.transaction(STORE_AUDIO, "readonly").objectStore(STORE_AUDIO).get(id);
			req.onsuccess = () => resolve(req.result ?? null);
			req.onerror = () => reject(req.error);
		});
	}
	async deleteBlob(id) {
		const db = await this.openDB();
		return new Promise((resolve, reject) => {
			const tx = db.transaction(STORE_AUDIO, "readwrite");
			tx.objectStore(STORE_AUDIO).delete(id);
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error);
		});
	}
	/** Download a track's audio and store it offline */
	async downloadSong(track, onProgress) {
		if (this.registry[track.id]?.status === "completed") return;
		if (this.registry[track.id]?.status === "downloading") return;
		const controller = new AbortController();
		this.abortControllers.set(track.id, controller);
		this.registry[track.id] = {
			id: track.id,
			track,
			status: "downloading",
			progress: 0,
			size: 0,
			downloadedAt: 0
		};
		this.saveRegistry();
		this.notify();
		try {
			const response = await fetch(`/api/public/stream/${encodeURIComponent(track.id)}?fmt=progressive`, { signal: controller.signal });
			if (!response.ok) throw new Error(`HTTP ${response.status}`);
			const contentLength = Number(response.headers.get("content-length") || 0);
			const reader = response.body?.getReader();
			if (!reader) throw new Error("No response body");
			const chunks = [];
			let received = 0;
			let lastNotify = 0;
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				chunks.push(value);
				received += value.length;
				const pct = contentLength > 0 ? Math.round(received / contentLength * 100) : Math.min(95, Math.round(received / 1024 / 50));
				const now = Date.now();
				if (now - lastNotify > 100) {
					this.registry[track.id] = {
						...this.registry[track.id],
						progress: pct,
						size: received
					};
					this.saveRegistry();
					this.notify();
					onProgress?.(pct);
					lastNotify = now;
				}
			}
			const contentType = response.headers.get("content-type") || "audio/mp4";
			const blob = new Blob(chunks, { type: contentType });
			await this.putBlob(track.id, blob);
			this.registry[track.id] = {
				id: track.id,
				track,
				status: "completed",
				progress: 100,
				size: received,
				downloadedAt: Date.now()
			};
			this.saveRegistry();
			this.notify();
			onProgress?.(100);
		} catch (err) {
			if (err?.name === "AbortError") delete this.registry[track.id];
			else this.registry[track.id] = {
				...this.registry[track.id],
				status: "error",
				progress: 0
			};
			this.saveRegistry();
			this.notify();
			this.abortControllers.delete(track.id);
			if (err?.name !== "AbortError") throw err;
		} finally {
			this.abortControllers.delete(track.id);
		}
	}
	/** Cancel an in-progress download */
	cancelDownload(id) {
		const ctrl = this.abortControllers.get(id);
		if (ctrl) ctrl.abort();
	}
	/** Check if a song is downloaded */
	isDownloaded(id) {
		return this.registry[id]?.status === "completed";
	}
	/** Get download status */
	getStatus(id) {
		return this.registry[id] ?? null;
	}
	/** Get a blob URL for offline playback */
	async getPlaybackUrl(id) {
		const blob = await this.getBlob(id);
		if (!blob) return null;
		return URL.createObjectURL(blob);
	}
	/** Remove a downloaded song */
	async removeDownload(id) {
		this.cancelDownload(id);
		await this.deleteBlob(id).catch(() => {});
		delete this.registry[id];
		this.saveRegistry();
		this.notify();
	}
	/** Get all download entries */
	getAllDownloads() {
		return Object.values(this.registry).filter((e) => e.status === "completed");
	}
	/** Get total storage used in bytes */
	getTotalSize() {
		return Object.values(this.registry).filter((e) => e.status === "completed").reduce((sum, e) => sum + e.size, 0);
	}
	/** Get registry snapshot */
	getRegistry() {
		return { ...this.registry };
	}
};
var downloadManager = new DownloadManagerImpl();
var Ctx = (0, import_react.createContext)(null);
var LS_LIKED = "arsmusic.liked.v1";
var LS_RECENT = "arsmusic.recent.v1";
var LS_HISTORY = "arsmusic.history.v1";
var LS_MINUTES = "arsmusic.minutes.v1";
var LS_PLAYLISTS = "arsmusic.playlists.v1";
var LS_NOT_INTERESTED = "arsmusic.notinterested.v1";
function loadJSON(key, fallback) {
	if (typeof window === "undefined") return fallback;
	try {
		const v = localStorage.getItem(key);
		return v ? JSON.parse(v) : fallback;
	} catch {
		return fallback;
	}
}
function PlayerProvider({ children }) {
	const audioRef = (0, import_react.useRef)(null);
	const playTokenRef = (0, import_react.useRef)(0);
	const retryRef = (0, import_react.useRef)(0);
	const currentTrackRef = (0, import_react.useRef)(null);
	const playRef = (0, import_react.useRef)(void 0);
	const getRelated = ytRelated;
	const [queue, setQueue] = (0, import_react.useState)([]);
	const [index, setIndex] = (0, import_react.useState)(-1);
	const [isPlaying, setPlaying] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [position, setPosition] = (0, import_react.useState)(0);
	const [duration, setDuration] = (0, import_react.useState)(0);
	const [volume, setVolumeState] = (0, import_react.useState)(1);
	const [liked, setLiked] = (0, import_react.useState)({});
	const [recent, setRecent] = (0, import_react.useState)([]);
	const [history, setHistory] = (0, import_react.useState)([]);
	const [minutesListened, setMinutes] = (0, import_react.useState)(0);
	const [error, setError] = (0, import_react.useState)(null);
	const [loopMode, setLoopMode] = (0, import_react.useState)("off");
	const [sleepTimer, setSleepTimer] = (0, import_react.useState)(null);
	const [playlists, setPlaylists] = (0, import_react.useState)([]);
	const [downloads, setDownloads] = (0, import_react.useState)({});
	const [notInterested, setNotInterested] = (0, import_react.useState)([]);
	const current = index >= 0 ? queue[index] ?? null : null;
	const upNext = index >= 0 ? queue.slice(index + 1, index + 21) : [];
	(0, import_react.useEffect)(() => {
		setLiked(loadJSON(LS_LIKED, {}));
		setRecent(loadJSON(LS_RECENT, []));
		setHistory(loadJSON(LS_HISTORY, []));
		setMinutes(loadJSON(LS_MINUTES, 0));
		setPlaylists(loadJSON(LS_PLAYLISTS, []));
		setNotInterested(loadJSON(LS_NOT_INTERESTED, []));
		setDownloads(downloadManager.getRegistry());
		return downloadManager.subscribe((entries) => {
			setDownloads(entries);
		});
	}, []);
	const setVolume = (0, import_react.useCallback)((v) => {
		setVolumeState(v);
		if (audioRef.current) audioRef.current.volume = v;
	}, []);
	(0, import_react.useEffect)(() => {
		localStorage.setItem(LS_LIKED, JSON.stringify(liked));
	}, [liked]);
	(0, import_react.useEffect)(() => {
		localStorage.setItem(LS_RECENT, JSON.stringify(recent));
	}, [recent]);
	(0, import_react.useEffect)(() => {
		localStorage.setItem(LS_HISTORY, JSON.stringify(history));
	}, [history]);
	(0, import_react.useEffect)(() => {
		localStorage.setItem(LS_MINUTES, JSON.stringify(minutesListened));
	}, [minutesListened]);
	(0, import_react.useEffect)(() => {
		localStorage.setItem(LS_PLAYLISTS, JSON.stringify(playlists));
	}, [playlists]);
	(0, import_react.useEffect)(() => {
		localStorage.setItem(LS_NOT_INTERESTED, JSON.stringify(notInterested));
	}, [notInterested]);
	const loopRef = (0, import_react.useRef)(loopMode);
	(0, import_react.useEffect)(() => {
		loopRef.current = loopMode;
	}, [loopMode]);
	(0, import_react.useEffect)(() => {
		const a = document.createElement("video");
		a.preload = "auto";
		a.playsInline = true;
		a.style.display = "none";
		document.body.appendChild(a);
		audioRef.current = a;
		const onTime = () => {
			setPosition(a.currentTime || 0);
			if ("mediaSession" in navigator && !isNaN(a.duration) && isFinite(a.duration)) try {
				navigator.mediaSession.setPositionState({
					duration: a.duration,
					playbackRate: a.playbackRate,
					position: a.currentTime
				});
			} catch {}
		};
		const onMeta = () => setDuration(a.duration || 0);
		const onEnd = () => {
			if (loopRef.current === "one") {
				a.currentTime = 0;
				a.play();
			} else nextRef.current?.();
		};
		const onPlay = () => {
			setPlaying(true);
			setLoading(false);
			if ("mediaSession" in navigator) navigator.mediaSession.playbackState = "playing";
		};
		const onCanPlay = () => setLoading(false);
		const onWaiting = () => {
			if (!a.paused) setLoading(true);
		};
		const onPause = () => {
			setPlaying(false);
			if ("mediaSession" in navigator) navigator.mediaSession.playbackState = "paused";
		};
		const onErr = () => {
			setLoading(false);
			setPlaying(false);
			const track = currentTrackRef.current;
			if (track && retryRef.current < 2) {
				retryRef.current += 1;
				window.setTimeout(() => void playRef.current?.(track), 350);
			} else setError("Couldn't keep this track loaded");
		};
		a.addEventListener("timeupdate", onTime);
		a.addEventListener("loadedmetadata", onMeta);
		a.addEventListener("ended", onEnd);
		a.addEventListener("play", onPlay);
		a.addEventListener("playing", onPlay);
		a.addEventListener("canplay", onCanPlay);
		a.addEventListener("waiting", onWaiting);
		a.addEventListener("stalled", onWaiting);
		a.addEventListener("pause", onPause);
		a.addEventListener("error", onErr);
		return () => {
			a.pause();
			a.removeEventListener("timeupdate", onTime);
			a.removeEventListener("loadedmetadata", onMeta);
			a.removeEventListener("ended", onEnd);
			a.removeEventListener("play", onPlay);
			a.removeEventListener("playing", onPlay);
			a.removeEventListener("canplay", onCanPlay);
			a.removeEventListener("waiting", onWaiting);
			a.removeEventListener("stalled", onWaiting);
			a.removeEventListener("pause", onPause);
			a.removeEventListener("error", onErr);
			a.remove();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if ("mediaSession" in navigator) {
			navigator.mediaSession.setActionHandler("play", () => {
				audioRef.current?.play().catch(console.error);
			});
			navigator.mediaSession.setActionHandler("pause", () => {
				audioRef.current?.pause();
			});
			navigator.mediaSession.setActionHandler("previoustrack", () => {
				prevRef.current?.();
			});
			navigator.mediaSession.setActionHandler("nexttrack", () => {
				nextRef.current?.();
			});
			navigator.mediaSession.setActionHandler("seekto", (details) => {
				if (audioRef.current && details.seekTime !== void 0) audioRef.current.currentTime = details.seekTime;
			});
		}
	}, []);
	(0, import_react.useEffect)(() => {
		if (!isPlaying) return;
		const t = setInterval(() => setMinutes((m) => m + 1), 6e4);
		return () => clearInterval(t);
	}, [isPlaying]);
	(0, import_react.useEffect)(() => {
		if (!sleepTimer) return;
		const t = setInterval(() => {
			if (Date.now() >= sleepTimer) {
				audioRef.current?.pause();
				setSleepTimer(null);
			}
		}, 1e3);
		return () => clearInterval(t);
	}, [sleepTimer]);
	const playIndex = (0, import_react.useCallback)(async (i, q) => {
		const track = q[i];
		if (!track || !audioRef.current) return;
		const token = ++playTokenRef.current;
		if (currentTrackRef.current?.id !== track.id) retryRef.current = 0;
		currentTrackRef.current = track;
		setError(null);
		setLoading(true);
		setIndex(i);
		setQueue(q);
		setRecent((prev) => {
			return [track, ...prev.filter((t) => t.id !== track.id)].slice(0, 20);
		});
		setHistory((prev) => [track, ...prev].slice(0, 100));
		try {
			if (!audioRef.current) return;
			audioRef.current.pause();
			audioRef.current.removeAttribute("src");
			audioRef.current.load();
			if (token !== playTokenRef.current || !audioRef.current) return;
			if ("mediaSession" in navigator) navigator.mediaSession.metadata = new MediaMetadata({
				title: track.title,
				artist: track.artist,
				album: "ArsMusic",
				artwork: track.thumbnail ? [
					{
						src: track.thumbnail.replace(/=w\d+-h\d+/, "=w96-h96"),
						sizes: "96x96",
						type: "image/jpeg"
					},
					{
						src: track.thumbnail.replace(/=w\d+-h\d+/, "=w128-h128"),
						sizes: "128x128",
						type: "image/jpeg"
					},
					{
						src: track.thumbnail.replace(/=w\d+-h\d+/, "=w256-h256"),
						sizes: "256x256",
						type: "image/jpeg"
					},
					{
						src: track.thumbnail.replace(/=w\d+-h\d+/, "=w512-h512"),
						sizes: "512x512",
						type: "image/jpeg"
					}
				] : []
			});
			audioRef.current.preload = "auto";
			let srcUrl = `/api/public/stream/${encodeURIComponent(track.id)}?fmt=progressive`;
			if (downloadManager.isDownloaded(track.id)) try {
				const blobUrl = await downloadManager.getPlaybackUrl(track.id);
				if (blobUrl) srcUrl = blobUrl;
			} catch (err) {
				console.warn("Failed to load local blob, falling back to stream", err);
			}
			audioRef.current.src = srcUrl;
			audioRef.current.load();
			await audioRef.current.play();
		} catch (e) {
			console.error(e);
			setError(e?.message ?? "Playback failed");
			setLoading(false);
			setPlaying(false);
		}
	}, []);
	const play = (0, import_react.useCallback)(async (track, q) => {
		const list = q && q.length ? q : [track];
		const i = list.findIndex((t) => t.id === track.id);
		await playIndex(i >= 0 ? i : 0, list);
	}, [playIndex]);
	const toggle = (0, import_react.useCallback)(() => {
		const a = audioRef.current;
		if (!a || !current) return;
		if (a.paused) a.play();
		else a.pause();
	}, [current]);
	const next = (0, import_react.useCallback)(async () => {
		if (index < 0) return;
		if (index >= queue.length - 1) {
			if (loopMode === "all" && queue.length > 0) {
				await playIndex(0, queue);
				return;
			}
			const cur = queue[index];
			if (!cur) return;
			try {
				const { songs } = await getRelated({ data: { videoId: cur.id } });
				const extra = songs.filter((s) => !queue.some((q) => q.id === s.id)).map((s) => ({
					id: s.id,
					title: s.title,
					artist: s.artist,
					thumbnail: s.thumbnail
				}));
				if (extra.length === 0) return;
				const newQ = [...queue, ...extra];
				await playIndex(index + 1, newQ);
			} catch (e) {
				console.warn("autoplay related failed", e);
			}
			return;
		}
		await playIndex(index + 1, queue);
	}, [
		index,
		queue,
		playIndex,
		getRelated,
		loopMode
	]);
	const toggleLoop = (0, import_react.useCallback)(() => {
		setLoopMode((prev) => prev === "off" ? "one" : prev === "one" ? "all" : "off");
	}, []);
	const addToQueue = (0, import_react.useCallback)((track) => {
		if (index < 0) {
			play(track);
			return;
		}
		setQueue((prev) => {
			const copy = [...prev];
			copy.splice(index + 1, 0, track);
			return copy;
		});
		alert(`Added "${track.title}" to queue`);
	}, [index, play]);
	const createPlaylist = (0, import_react.useCallback)((name) => {
		const pl = {
			id: `pl-${Date.now()}`,
			name,
			tracks: [],
			createdAt: Date.now()
		};
		setPlaylists((prev) => [...prev, pl]);
		return pl;
	}, []);
	const addToPlaylist = (0, import_react.useCallback)((playlistId, track) => {
		setPlaylists((prev) => prev.map((pl) => pl.id === playlistId && !pl.tracks.some((t) => t.id === track.id) ? {
			...pl,
			tracks: [...pl.tracks, track]
		} : pl));
	}, []);
	const prev = (0, import_react.useCallback)(async () => {
		if (index <= 0) {
			if (audioRef.current) audioRef.current.currentTime = 0;
			return;
		}
		await playIndex(index - 1, queue);
	}, [
		index,
		queue,
		playIndex
	]);
	const prevRef = (0, import_react.useRef)(prev);
	(0, import_react.useEffect)(() => {
		prevRef.current = prev;
	}, [prev]);
	const nextRef = (0, import_react.useRef)(next);
	(0, import_react.useEffect)(() => {
		nextRef.current = next;
	}, [next]);
	(0, import_react.useEffect)(() => {
		playRef.current = (track) => play(track, queue.length ? queue : [track]);
	}, [play, queue]);
	(0, import_react.useEffect)(() => {
		if (!current) return;
		if (queue.slice(index + 1).length >= 8) return;
		let cancelled = false;
		getRelated({ data: { videoId: current.id } }).then(({ songs }) => {
			if (cancelled) return;
			setQueue((prev) => {
				if (!prev.some((t) => t.id === current.id)) return prev;
				const extra = songs.filter((s) => !prev.some((q) => q.id === s.id)).map((s) => ({
					id: s.id,
					title: s.title,
					artist: s.artist,
					thumbnail: s.thumbnail
				}));
				return extra.length ? [...prev, ...extra.slice(0, 16)] : prev;
			});
		}).catch((e) => console.warn("up next failed", e));
		return () => {
			cancelled = true;
		};
	}, [
		current?.id,
		index,
		queue,
		getRelated
	]);
	const seek = (0, import_react.useCallback)((sec) => {
		if (audioRef.current) audioRef.current.currentTime = sec;
	}, []);
	const toggleLike = (0, import_react.useCallback)((t) => {
		const target = t ?? current;
		if (!target) return;
		setLiked((prev) => {
			const copy = { ...prev };
			if (copy[target.id]) delete copy[target.id];
			else copy[target.id] = target;
			return copy;
		});
	}, [current]);
	const isLiked = (0, import_react.useCallback)((id) => Boolean(liked[id]), [liked]);
	const clear = (0, import_react.useCallback)(() => {
		if (audioRef.current) {
			audioRef.current.pause();
			audioRef.current.removeAttribute("src");
			audioRef.current.load();
		}
		setIndex(-1);
		setQueue([]);
		setPlaying(false);
	}, []);
	const downloadTrack = (0, import_react.useCallback)((track) => {
		downloadManager.downloadSong(track);
	}, []);
	const removeDownload = (0, import_react.useCallback)((id) => {
		downloadManager.removeDownload(id);
	}, []);
	const isDownloaded = (0, import_react.useCallback)((id) => downloadManager.isDownloaded(id), []);
	const addNotInterested = (0, import_react.useCallback)((idOrName) => {
		setNotInterested((prev) => Array.from(new Set([...prev, idOrName.toLowerCase()])));
	}, []);
	const isNotInterested = (0, import_react.useCallback)((id, artist) => {
		const lowerId = id.toLowerCase();
		const lowerArtist = artist.toLowerCase();
		return notInterested.some((n) => lowerId === n || lowerArtist.includes(n) || n.includes(lowerArtist));
	}, [notInterested]);
	const value = (0, import_react.useMemo)(() => ({
		queue,
		index,
		current,
		isPlaying,
		loading,
		position,
		duration,
		liked,
		recent,
		history,
		minutesListened,
		error,
		upNext,
		play,
		toggle,
		next,
		prev,
		seek,
		toggleLike,
		isLiked,
		loopMode,
		toggleLoop,
		sleepTimer,
		setSleepTimer,
		addToQueue,
		playlists,
		createPlaylist,
		addToPlaylist,
		downloads,
		downloadTrack,
		removeDownload,
		isDownloaded,
		clear,
		volume,
		setVolume,
		notInterested,
		addNotInterested,
		isNotInterested
	}), [
		queue,
		index,
		current,
		isPlaying,
		loading,
		position,
		duration,
		liked,
		recent,
		history,
		minutesListened,
		error,
		upNext,
		play,
		toggle,
		next,
		prev,
		seek,
		toggleLike,
		isLiked,
		loopMode,
		toggleLoop,
		sleepTimer,
		setSleepTimer,
		addToQueue,
		playlists,
		createPlaylist,
		addToPlaylist,
		downloads,
		downloadTrack,
		removeDownload,
		isDownloaded,
		clear,
		volume,
		setVolume,
		notInterested,
		addNotInterested,
		isNotInterested
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value,
		children
	});
}
function usePlayer() {
	const v = (0, import_react.useContext)(Ctx);
	if (!v) throw new Error("usePlayer must be used inside <PlayerProvider>");
	return v;
}
//#endregion
export { ytPersonal as a, ytMoreRecommendations as i, createSsrRpc as n, usePlayer as r, PlayerProvider as t };
