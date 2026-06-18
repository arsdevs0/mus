import { n as queryOptions } from "../_libs/react+tanstack__react-query.mjs";
import { a as ytPersonal } from "./PlayerContext-ff8Mv2tX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/foryou-LtwKcLPP.js
var personalQuery = queryOptions({
	queryKey: ["yt", "personal"],
	queryFn: () => ytPersonal(),
	staleTime: 1e3 * 60 * 30
});
//#endregion
export { personalQuery as t };
