//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-BhguCfcT.js
var manifest = {
	"1b639f0b073019858c4e6722dd640b44b24b3f504de42ac93a7c4be689b82822": {
		functionName: "ytPrepareStream_createServerFn_handler",
		importer: () => import("./_ssr/yt.functions-1y81soLc.mjs")
	},
	"36397bf01a85d63285b98b825cf866f7e36954c7a1ea34f059dbc5e5bba9a776": {
		functionName: "ytArtist_createServerFn_handler",
		importer: () => import("./_ssr/detail.functions-C4C3miNp.mjs")
	},
	"484d64d242e3be1f099facadca8ad705b2185e729bcbab9ed24f0587e8a3291b": {
		functionName: "ytPlaylist_createServerFn_handler",
		importer: () => import("./_ssr/detail.functions-C4C3miNp.mjs")
	},
	"77aec30d19e330428e736ba05be692be04a1f485e744143aa915470963822c19": {
		functionName: "ytPersonal_createServerFn_handler",
		importer: () => import("./_ssr/personal.functions-x4KM-b7z.mjs")
	},
	"803ca2a66f31db75ff1b16878077ba2612d20ed5cbe95378c9d6027dfca6baf6": {
		functionName: "ytStream_createServerFn_handler",
		importer: () => import("./_ssr/yt.functions-1y81soLc.mjs")
	},
	"944f1d92a864fa4dcc375fb23241e83e356494f9dd61e9efb0dff035af53267e": {
		functionName: "ytHome_createServerFn_handler",
		importer: () => import("./_ssr/yt.functions-1y81soLc.mjs")
	},
	"a2376eb0ea561ee6444303ea141c2e4f30b16eff26fde53723b8d06fcaa6a7b0": {
		functionName: "ytMoreRecommendations_createServerFn_handler",
		importer: () => import("./_ssr/personal.functions-x4KM-b7z.mjs")
	},
	"b32b7a2bc38062874d9f581adaa141c5ced11256f8d7baeedfe3af5edd355f08": {
		functionName: "ytSearch_createServerFn_handler",
		importer: () => import("./_ssr/yt.functions-1y81soLc.mjs")
	},
	"b632ce06c8cf4c522c790d96ac8d440f73cf826076beca29186aa56d50d21988": {
		functionName: "ytAlbum_createServerFn_handler",
		importer: () => import("./_ssr/detail.functions-C4C3miNp.mjs")
	},
	"e122c249daa4ed51794f8ad3b3ac2721a46725beeefe7e448e05b88afe3f2288": {
		functionName: "ytSuggestions_createServerFn_handler",
		importer: () => import("./_ssr/yt.functions-1y81soLc.mjs")
	},
	"f8b0d440de6b69ab701a20d1033c2fb474a623eee1ad5234f220692a72e0114a": {
		functionName: "ytRelated_createServerFn_handler",
		importer: () => import("./_ssr/personal.functions-x4KM-b7z.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
