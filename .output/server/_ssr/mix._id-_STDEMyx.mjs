import { n as queryOptions } from "../_libs/react+tanstack__react-query.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ytPersonal } from "./PlayerContext-ff8Mv2tX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mix._id-_STDEMyx.js
var personalQuery = queryOptions({
	queryKey: ["yt", "personal"],
	queryFn: () => ytPersonal(),
	staleTime: 1e3 * 60 * 30
});
var $$splitNotFoundComponentImporter = () => import("./mix._id-DnpDTBLm.mjs");
var $$splitErrorComponentImporter = () => import("./mix._id-DjEEAfCp.mjs");
var $$splitComponentImporter = () => import("./mix._id-D6goE7zw.mjs");
var Route = createFileRoute("/mix/$id")({
	head: () => ({ meta: [{ title: "Daily Mix · ArsMusic" }] }),
	loader: ({ context }) => context.queryClient.ensureQueryData(personalQuery),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { personalQuery as n, Route as t };
