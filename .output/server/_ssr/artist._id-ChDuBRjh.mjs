import { n as queryOptions } from "../_libs/react+tanstack__react-query.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as ytArtist } from "./detail.functions-B2QE9XZ1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/artist._id-ChDuBRjh.js
var artistQuery = (id) => queryOptions({
	queryKey: [
		"yt",
		"artist",
		id
	],
	queryFn: () => ytArtist({ data: { id } }),
	staleTime: 1e3 * 60 * 30
});
var $$splitNotFoundComponentImporter = () => import("./artist._id-ByFyfxEt.mjs");
var $$splitErrorComponentImporter = () => import("./artist._id-CPkkHiaH.mjs");
var $$splitComponentImporter = () => import("./artist._id-COPYFInr.mjs");
var Route = createFileRoute("/artist/$id")({
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.name ?? "Artist"} · ArsMusic` }, {
		name: "description",
		content: `Top songs and albums by ${loaderData?.name ?? "this artist"}.`
	}] }),
	loader: ({ context, params }) => context.queryClient.ensureQueryData(artistQuery(params.id)),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { artistQuery as n, Route as t };
