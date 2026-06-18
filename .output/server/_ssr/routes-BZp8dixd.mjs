import { n as queryOptions } from "../_libs/react+tanstack__react-query.mjs";
import { a as ytPersonal } from "./PlayerContext-ff8Mv2tX.mjs";
import { t as ytHome } from "./yt.functions-Dp9SFdb-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BZp8dixd.js
var homeQuery = queryOptions({
	queryKey: ["yt", "home"],
	queryFn: () => ytHome(),
	staleTime: 1e3 * 60 * 10
});
var personalQuery = (historySeedId) => queryOptions({
	queryKey: [
		"yt",
		"personal",
		historySeedId ?? "default"
	],
	queryFn: () => ytPersonal({ data: { historySeedId } }),
	staleTime: 1e3 * 60 * 5
});
//#endregion
export { personalQuery as n, homeQuery as t };
