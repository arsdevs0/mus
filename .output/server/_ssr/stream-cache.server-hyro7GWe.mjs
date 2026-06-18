//#region node_modules/.nitro/vite/services/ssr/assets/stream-cache.server-hyro7GWe.js
var CACHE_TTL_MS = 1500 * 1e3;
var streamCache = /* @__PURE__ */ new Map();
var cacheKey = (videoId, preference) => `${preference ?? "auto"}:${videoId}`;
var qualityScore = (format, preference) => {
	const mime = String(format?.mime_type ?? "");
	const preferenceBoost = preference === "webm" && mime.includes("webm") ? 1e6 : preference === "mp4" && mime.includes("mp4") ? 1e6 : preference === "progressive" && mime.includes("mp4") ? 1e6 : 0;
	const codecBoost = mime.includes("opus") ? 2e4 : mime.includes("mp4") ? 1e4 : 0;
	return Number(format?.bitrate ?? format?.average_bitrate ?? 0) + preferenceBoost + codecBoost;
};
function getCachedStream(videoId, preference) {
	const cached = streamCache.get(cacheKey(videoId, preference));
	if (!cached) return null;
	if (cached.expiresAt <= Date.now()) {
		streamCache.delete(cacheKey(videoId, preference));
		return null;
	}
	return cached;
}
function clearCachedStream(videoId) {
	streamCache.delete(cacheKey(videoId));
	streamCache.delete(cacheKey(videoId, "webm"));
	streamCache.delete(cacheKey(videoId, "mp4"));
}
function isTrustedAudioUrl(raw) {
	if (!raw) return false;
	try {
		const url = new URL(raw);
		return url.protocol === "https:" && /(^|\.)(googlevideo\.com|youtube\.com)$/.test(url.hostname);
	} catch {
		return false;
	}
}
async function resolveAudioStream(videoId, options) {
	const cached = options?.refresh ? null : getCachedStream(videoId, options?.preference);
	if (cached) return cached;
	const { getInnertube } = await import("./client-DyxlH9AC.mjs");
	const yt = await getInnertube();
	const clients = options?.preference === "progressive" ? [
		"ANDROID",
		"WEB",
		"IOS"
	] : options?.preference === "mp4" ? [
		"IOS",
		"ANDROID",
		"WEB"
	] : [
		"WEB",
		"ANDROID",
		"IOS"
	];
	for (const client of clients) try {
		const info = await yt.getBasicInfo(videoId, { client });
		const formats = (options?.preference === "progressive" ? info?.streaming_data?.formats ?? [] : info?.streaming_data?.adaptive_formats ?? []).filter((f) => options?.preference === "progressive" ? String(f?.mime_type ?? "").startsWith("video/mp4") : String(f?.mime_type ?? "").startsWith("audio/")).sort((a, b) => qualityScore(b, options?.preference) - qualityScore(a, options?.preference));
		for (const format of formats) {
			let url = format?.url;
			if (typeof format?.decipher === "function") try {
				url = await Promise.resolve(format.decipher(yt.session.player));
			} catch {}
			if (typeof url !== "string" || !url.startsWith("http")) continue;
			const probe = await fetch(url, { headers: {
				range: "bytes=0-1023",
				"user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15"
			} });
			if (!probe.ok && probe.status !== 206) continue;
			await probe.body?.cancel();
			const stream = {
				url,
				contentType: String(format?.mime_type ?? "audio/mp4").split(";")[0] || "audio/mp4",
				expiresAt: Date.now() + CACHE_TTL_MS
			};
			streamCache.set(cacheKey(videoId, options?.preference), stream);
			return stream;
		}
	} catch {}
	throw new Error("No audio stream available");
}
//#endregion
export { clearCachedStream, getCachedStream, isTrustedAudioUrl, resolveAudioStream };
