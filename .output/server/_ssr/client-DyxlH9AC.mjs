import { n as UniversalCache, t as Innertube } from "../_libs/youtubei.js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/client-DyxlH9AC.js
var cached = null;
var boundFetch = (input, init) => fetch(input, init);
function getInnertube() {
	if (!cached) cached = Innertube.create({
		cache: new UniversalCache(false),
		generate_session_locally: true,
		retrieve_player: true,
		fetch: boundFetch
	}).catch((err) => {
		cached = null;
		throw err;
	});
	return cached;
}
//#endregion
export { getInnertube };
