globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as NodeResponse, i as defineLazyEventHandler, l as serve, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/album._id-B206b5WD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95-upmnAOdx8QeX4KuWgX4d8TVEwBs\"",
		"mtime": "2026-06-18T10:17:06.407Z",
		"size": 149,
		"path": "../public/assets/album._id-B206b5WD.js"
	},
	"/assets/album._id-CfbOUb9g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b6-FaZp4fY4T2agoKePzUKTH2obnkg\"",
		"mtime": "2026-06-18T10:17:06.408Z",
		"size": 182,
		"path": "../public/assets/album._id-CfbOUb9g.js"
	},
	"/assets/album._id-DpJ8kT94.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c0b-7eBLOc14Ga09TBwA1fxU+2KSoeA\"",
		"mtime": "2026-06-18T10:17:06.408Z",
		"size": 3083,
		"path": "../public/assets/album._id-DpJ8kT94.js"
	},
	"/assets/AppShell-C2KXlYkr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"130d-48FFlLYf5CVYMqVl71xeIqjWyQY\"",
		"mtime": "2026-06-18T10:17:06.400Z",
		"size": 4877,
		"path": "../public/assets/AppShell-C2KXlYkr.js"
	},
	"/assets/arrow-left-CrK2cGP-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-jxTUHHV1m34lPpRsoQLdDL2hF/s\"",
		"mtime": "2026-06-18T10:17:06.410Z",
		"size": 158,
		"path": "../public/assets/arrow-left-CrK2cGP-.js"
	},
	"/assets/artist._id-CfbOUb9g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b6-FaZp4fY4T2agoKePzUKTH2obnkg\"",
		"mtime": "2026-06-18T10:17:06.411Z",
		"size": 182,
		"path": "../public/assets/artist._id-CfbOUb9g.js"
	},
	"/assets/artist._id-KOaYkbx4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fb3-E8WZgjglwpHUONV86uuRYkBzpB8\"",
		"mtime": "2026-06-18T10:17:06.413Z",
		"size": 8115,
		"path": "../public/assets/artist._id-KOaYkbx4.js"
	},
	"/assets/chevron-down-BrFN_VrO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"79-G0xvaZoUIPkWm1cVRTwds3DrVPI\"",
		"mtime": "2026-06-18T10:17:06.414Z",
		"size": 121,
		"path": "../public/assets/chevron-down-BrFN_VrO.js"
	},
	"/assets/artist._id-B206b5WD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95-upmnAOdx8QeX4KuWgX4d8TVEwBs\"",
		"mtime": "2026-06-18T10:17:06.411Z",
		"size": 149,
		"path": "../public/assets/artist._id-B206b5WD.js"
	},
	"/assets/chevron-left-DKv5O8wv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7b-s/PNoztwu9xr1D5DTqi9koCoFIw\"",
		"mtime": "2026-06-18T10:17:06.415Z",
		"size": 123,
		"path": "../public/assets/chevron-left-DKv5O8wv.js"
	},
	"/assets/downloads-CxouLIPa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c8b-dKuVkCbvwIIlxaTfudOsuEHWHrg\"",
		"mtime": "2026-06-18T10:17:06.418Z",
		"size": 3211,
		"path": "../public/assets/downloads-CxouLIPa.js"
	},
	"/assets/clock-Bssylar7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a2-4Tk4eUEBd+d7RizSTqskmjQC/Jo\"",
		"mtime": "2026-06-18T10:17:06.416Z",
		"size": 162,
		"path": "../public/assets/clock-Bssylar7.js"
	},
	"/assets/chevron-right-X-MSmTo5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7b-EbRMEnNlao8DMYHdNeD5mSTrEX0\"",
		"mtime": "2026-06-18T10:17:06.415Z",
		"size": 123,
		"path": "../public/assets/chevron-right-X-MSmTo5.js"
	},
	"/assets/Equalizer-zS45FCEz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"149-+losO/vBX5mZ6roMU4ZEuX88u/c\"",
		"mtime": "2026-06-18T10:17:06.400Z",
		"size": 329,
		"path": "../public/assets/Equalizer-zS45FCEz.js"
	},
	"/assets/FastImage-CVJ3c2-S.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b24-rtpryQ9+hvDBLgtbEYhtwgoT6BI\"",
		"mtime": "2026-06-18T10:17:06.403Z",
		"size": 2852,
		"path": "../public/assets/FastImage-CVJ3c2-S.js"
	},
	"/assets/download-CffTLzYC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e1-d1pwjWZSEBSvTOwkk+mQe0ZWNms\"",
		"mtime": "2026-06-18T10:17:06.417Z",
		"size": 225,
		"path": "../public/assets/download-CffTLzYC.js"
	},
	"/assets/foryou-CyE16UDu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1896-XC7/jhbIJx6WaU1bxrWluJhjVcg\"",
		"mtime": "2026-06-18T10:17:06.419Z",
		"size": 6294,
		"path": "../public/assets/foryou-CyE16UDu.js"
	},
	"/assets/library-B206b5WD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95-upmnAOdx8QeX4KuWgX4d8TVEwBs\"",
		"mtime": "2026-06-18T10:17:06.421Z",
		"size": 149,
		"path": "../public/assets/library-B206b5WD.js"
	},
	"/assets/jsx-runtime-DGeXAQPT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ab-mgnSm9dUpwL2+z7tKxJ2MsN0fOM\"",
		"mtime": "2026-06-18T10:17:06.420Z",
		"size": 939,
		"path": "../public/assets/jsx-runtime-DGeXAQPT.js"
	},
	"/assets/library-Kvn9IoT2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a1-PCs4lSSN+lGj61TKsPNbqpcdbwk\"",
		"mtime": "2026-06-18T10:17:06.424Z",
		"size": 161,
		"path": "../public/assets/library-Kvn9IoT2.js"
	},
	"/assets/library-CmFCDDNL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"136c-967KMUV7UMD+vM4qA+BBNVIGovk\"",
		"mtime": "2026-06-18T10:17:06.422Z",
		"size": 4972,
		"path": "../public/assets/library-CmFCDDNL.js"
	},
	"/assets/link-CXBwHflP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"681f-tEcbSbzYzzYAFScsFXypdmo2kdE\"",
		"mtime": "2026-06-18T10:17:06.424Z",
		"size": 26655,
		"path": "../public/assets/link-CXBwHflP.js"
	},
	"/assets/mix._id-B206b5WD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95-upmnAOdx8QeX4KuWgX4d8TVEwBs\"",
		"mtime": "2026-06-18T10:17:06.425Z",
		"size": 149,
		"path": "../public/assets/mix._id-B206b5WD.js"
	},
	"/assets/index-De0jpfpU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47fd5-4Oznyml2AVC7dd/b1PTpwEi4GQ8\"",
		"mtime": "2026-06-18T10:17:06.399Z",
		"size": 294869,
		"path": "../public/assets/index-De0jpfpU.js"
	},
	"/assets/logu-B3ZAlov6.png": {
		"type": "image/png",
		"etag": "\"f9581-F+Isf2wp7APk8rm0+T8hRn8+daU\"",
		"mtime": "2026-06-18T10:17:06.458Z",
		"size": 1021313,
		"path": "../public/assets/logu-B3ZAlov6.png"
	},
	"/assets/mix._id-IWOxr_Tl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bc6-ZrPRS8GLG27xHYN4WdB1udDjGdw\"",
		"mtime": "2026-06-18T10:17:06.427Z",
		"size": 3014,
		"path": "../public/assets/mix._id-IWOxr_Tl.js"
	},
	"/assets/music-B9rlqFG9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d4-UfTyBsMjoLoZsu/esjm9aJxNzic\"",
		"mtime": "2026-06-18T10:17:06.428Z",
		"size": 212,
		"path": "../public/assets/music-B9rlqFG9.js"
	},
	"/assets/player-Be2KLzo-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ea8-0JIQN3YnQWUtEHyVJ3D/q7RuC+M\"",
		"mtime": "2026-06-18T10:17:06.431Z",
		"size": 11944,
		"path": "../public/assets/player-Be2KLzo-.js"
	},
	"/assets/mix._id-Szt0-fEV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ba-whGWL/jcdLPUxU2r0OBLQNoiU6s\"",
		"mtime": "2026-06-18T10:17:06.428Z",
		"size": 186,
		"path": "../public/assets/mix._id-Szt0-fEV.js"
	},
	"/assets/PlayerContext-DWL7EuZ0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"db1d-wTN2dxHF16giX8daHcdt27W1Bqc\"",
		"mtime": "2026-06-18T10:17:06.404Z",
		"size": 56093,
		"path": "../public/assets/PlayerContext-DWL7EuZ0.js"
	},
	"/assets/player-DZFaj9Po.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-krvAy8P3EJDmbL95RdlYN2b0fWw\"",
		"mtime": "2026-06-18T10:17:06.432Z",
		"size": 153,
		"path": "../public/assets/player-DZFaj9Po.js"
	},
	"/assets/player-B206b5WD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95-upmnAOdx8QeX4KuWgX4d8TVEwBs\"",
		"mtime": "2026-06-18T10:17:06.429Z",
		"size": 149,
		"path": "../public/assets/player-B206b5WD.js"
	},
	"/assets/playlist._id-B206b5WD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95-upmnAOdx8QeX4KuWgX4d8TVEwBs\"",
		"mtime": "2026-06-18T10:17:06.433Z",
		"size": 149,
		"path": "../public/assets/playlist._id-B206b5WD.js"
	},
	"/assets/playlist._id-CfbOUb9g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b6-FaZp4fY4T2agoKePzUKTH2obnkg\"",
		"mtime": "2026-06-18T10:17:06.433Z",
		"size": 182,
		"path": "../public/assets/playlist._id-CfbOUb9g.js"
	},
	"/assets/playlist._id-koy6oTKw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"de1-HthlybELRAAwQxC46RJVvgQ+VLE\"",
		"mtime": "2026-06-18T10:17:06.434Z",
		"size": 3553,
		"path": "../public/assets/playlist._id-koy6oTKw.js"
	},
	"/assets/profile-B206b5WD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95-upmnAOdx8QeX4KuWgX4d8TVEwBs\"",
		"mtime": "2026-06-18T10:17:06.436Z",
		"size": 149,
		"path": "../public/assets/profile-B206b5WD.js"
	},
	"/assets/profile-CusW_IdY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28e0-LJ1iMD+o2rMDkWaNyzw9g7tAS6M\"",
		"mtime": "2026-06-18T10:17:06.436Z",
		"size": 10464,
		"path": "../public/assets/profile-CusW_IdY.js"
	},
	"/assets/routes-B206b5WD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95-upmnAOdx8QeX4KuWgX4d8TVEwBs\"",
		"mtime": "2026-06-18T10:17:06.438Z",
		"size": 149,
		"path": "../public/assets/routes-B206b5WD.js"
	},
	"/assets/profile-DZFaj9Po.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-krvAy8P3EJDmbL95RdlYN2b0fWw\"",
		"mtime": "2026-06-18T10:17:06.438Z",
		"size": 153,
		"path": "../public/assets/profile-DZFaj9Po.js"
	},
	"/assets/routes-kfMPVjMl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d1-HMFz1KNyeMBrjoakNLIUCwbr6RA\"",
		"mtime": "2026-06-18T10:17:06.442Z",
		"size": 209,
		"path": "../public/assets/routes-kfMPVjMl.js"
	},
	"/assets/search-B206b5WD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95-upmnAOdx8QeX4KuWgX4d8TVEwBs\"",
		"mtime": "2026-06-18T10:17:06.442Z",
		"size": 149,
		"path": "../public/assets/search-B206b5WD.js"
	},
	"/assets/routes-DCHB_u-N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3fe0-MKtWffJwmk7ywiXviq+4WPkp7NA\"",
		"mtime": "2026-06-18T10:17:06.441Z",
		"size": 16352,
		"path": "../public/assets/routes-DCHB_u-N.js"
	},
	"/assets/search-DYHSOc4o.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b5-QImoPEgWcux83dH64Z7ONkIa0OE\"",
		"mtime": "2026-06-18T10:17:06.445Z",
		"size": 181,
		"path": "../public/assets/search-DYHSOc4o.js"
	},
	"/assets/search-BJec4-na.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bb4-PmKOrvRYg7en5+eESiCyaO8pWS0\"",
		"mtime": "2026-06-18T10:17:06.443Z",
		"size": 7092,
		"path": "../public/assets/search-BJec4-na.js"
	},
	"/assets/share-2-CK41sJR2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15e-DaQgCKyU3bWGMfOK9vDU0AxPy/U\"",
		"mtime": "2026-06-18T10:17:06.445Z",
		"size": 350,
		"path": "../public/assets/share-2-CK41sJR2.js"
	},
	"/assets/shuffle-Dy1QLw0-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"178-Ily75Eqm6FMTGfn4FQnoOm+xxWE\"",
		"mtime": "2026-06-18T10:17:06.446Z",
		"size": 376,
		"path": "../public/assets/shuffle-Dy1QLw0-.js"
	},
	"/assets/SongMenu-CAyI2dWB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b47-7jh1rShJE6TuesoFGBKOSMofNdg\"",
		"mtime": "2026-06-18T10:17:06.406Z",
		"size": 6983,
		"path": "../public/assets/SongMenu-CAyI2dWB.js"
	},
	"/assets/stats-B206b5WD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95-upmnAOdx8QeX4KuWgX4d8TVEwBs\"",
		"mtime": "2026-06-18T10:17:06.448Z",
		"size": 149,
		"path": "../public/assets/stats-B206b5WD.js"
	},
	"/assets/stats-CApTHNKe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14cc-PXU4ckRN4yTWTVsYul36WOYjhuQ\"",
		"mtime": "2026-06-18T10:17:06.448Z",
		"size": 5324,
		"path": "../public/assets/stats-CApTHNKe.js"
	},
	"/assets/stats-Kvn9IoT2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a1-PCs4lSSN+lGj61TKsPNbqpcdbwk\"",
		"mtime": "2026-06-18T10:17:06.449Z",
		"size": 161,
		"path": "../public/assets/stats-Kvn9IoT2.js"
	},
	"/assets/useBaseQuery-UzQdEhZG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2284-A242rSx0uBKeuHtSZ5gGnXTq+U4\"",
		"mtime": "2026-06-18T10:17:06.451Z",
		"size": 8836,
		"path": "../public/assets/useBaseQuery-UzQdEhZG.js"
	},
	"/assets/useInfiniteQuery-DMc94Xpg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47e-QovN1+ekPo1W8aErN/tTyJp74+Q\"",
		"mtime": "2026-06-18T10:17:06.452Z",
		"size": 1150,
		"path": "../public/assets/useInfiniteQuery-DMc94Xpg.js"
	},
	"/assets/styles-DakxTZXb.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"16648-Ylpy72/fTMb+1eXMLQ8r2l0T6q4\"",
		"mtime": "2026-06-18T10:17:06.459Z",
		"size": 91720,
		"path": "../public/assets/styles-DakxTZXb.css"
	},
	"/assets/useSuspenseQuery-B1bCeyu3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-4iS1vTy8LOd9sxc7x4MZ12+232w\"",
		"mtime": "2026-06-18T10:17:06.454Z",
		"size": 174,
		"path": "../public/assets/useSuspenseQuery-B1bCeyu3.js"
	},
	"/assets/useQuery-5aSL7RBX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"60-jDqbpByfy8O7nDUdSKpS/W31RkY\"",
		"mtime": "2026-06-18T10:17:06.454Z",
		"size": 96,
		"path": "../public/assets/useQuery-5aSL7RBX.js"
	},
	"/assets/web-wm3OTpcC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34c-3nZvK/CLZWTyKhViwq064+Lje5o\"",
		"mtime": "2026-06-18T10:17:06.456Z",
		"size": 844,
		"path": "../public/assets/web-wm3OTpcC.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_J8BomA = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_J8BomA
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
