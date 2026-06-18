import { n as queryOptions } from "../_libs/react+tanstack__react-query.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ytAlbum } from "./detail.functions-B2QE9XZ1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/album._id-DSG_-Xj3.js
var albumQuery = (id) => queryOptions({
	queryKey: [
		"yt",
		"album",
		id
	],
	queryFn: () => ytAlbum({ data: { id } }),
	staleTime: 1e3 * 60 * 30
});
var $$splitNotFoundComponentImporter = () => import("./album._id-C6-XnboN.mjs");
var $$splitErrorComponentImporter = () => import("./album._id-eF4VTkwA.mjs");
var $$splitComponentImporter = () => import("./album._id-DApnBti7.mjs");
var Route = createFileRoute("/album/$id")({
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.title ?? "Album"} · ArsMusic` }, {
		name: "description",
		content: `Album by ${loaderData?.artist ?? ""}`
	}] }),
	loader: ({ context, params }) => context.queryClient.ensureQueryData(albumQuery(params.id)),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { albumQuery as n, Route as t };
