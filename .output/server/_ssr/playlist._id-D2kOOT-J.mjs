import { n as queryOptions } from "../_libs/react+tanstack__react-query.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as ytPlaylist } from "./detail.functions-B2QE9XZ1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/playlist._id-D2kOOT-J.js
var playlistQuery = (id) => queryOptions({
	queryKey: [
		"yt",
		"playlist",
		id
	],
	queryFn: async () => {
		if (id.startsWith("pl-")) return {
			title: "Local Playlist",
			thumbnail: null,
			subtitle: "Local",
			tracks: []
		};
		return ytPlaylist({ data: { id } });
	},
	staleTime: 1e3 * 60 * 30
});
var $$splitNotFoundComponentImporter = () => import("./playlist._id-B5hB58YZ.mjs");
var $$splitErrorComponentImporter = () => import("./playlist._id-BY7nsAE7.mjs");
var $$splitComponentImporter = () => import("./playlist._id-CgzUw6uC.mjs");
var Route = createFileRoute("/playlist/$id")({
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.title ?? "Playlist"} · ArsMusic` }] }),
	loader: ({ context, params }) => context.queryClient.ensureQueryData(playlistQuery(params.id)),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { playlistQuery as n, Route as t };
