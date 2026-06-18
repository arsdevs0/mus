import { i as __toESM } from "../_runtime.mjs";
import { a as QueryClientProvider, c as require_jsx_runtime, s as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PlayerProvider } from "./PlayerContext-ff8Mv2tX.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Route$11 } from "./album._id-DSG_-Xj3.mjs";
import { t as Route$12 } from "./artist._id-ChDuBRjh.mjs";
import { t as personalQuery } from "./foryou-LtwKcLPP.mjs";
import { t as Route$13 } from "./mix._id-_STDEMyx.mjs";
import { t as Route$14 } from "./playlist._id-D2kOOT-J.mjs";
import { t as logu_default } from "./logu-BBtHJk_H.mjs";
import { n as personalQuery$1, t as homeQuery } from "./routes-BZp8dixd.mjs";
import { t as App } from "../_libs/capacitor__app+capacitor__core.mjs";
import { n as Style, t as StatusBar } from "../_libs/capacitor__status-bar.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DVZM01_D.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DakxTZXb.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "This track doesn't exist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground",
					children: "Back to Home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "Something broke"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: error.message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						router.invalidate();
						reset();
					},
					className: "mt-6 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground",
					children: "Try again"
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{
				name: "theme-color",
				content: "#1a1530"
			},
			{ title: "ArsMusic — Your A to Z music" },
			{
				name: "description",
				content: "ArsMusic streams the world's music — discover, search, and listen to anything, anywhere."
			},
			{
				property: "og:title",
				content: "ArsMusic"
			},
			{
				property: "og:description",
				content: "Stream every song. Discover every artist."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [
			{
				rel: "icon",
				href: logu_default
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	(0, import_react.useEffect)(() => {
		StatusBar.setStyle({ style: Style.Dark }).catch(() => {});
		StatusBar.setOverlaysWebView({ overlay: true }).catch(() => {});
		const listener = App.addListener("backButton", ({ canGoBack }) => {
			if (canGoBack) window.history.back();
			else App.exitApp();
		});
		return () => {
			listener.then((l) => l.remove());
		};
	}, [useRouter()]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitNotFoundComponentImporter$5 = () => import("./stats-BvLVFlH4.mjs");
var $$splitErrorComponentImporter$5 = () => import("./stats-DI2-RgF3.mjs");
var $$splitComponentImporter$7 = () => import("./stats-DCtFWsXa.mjs");
var Route$9 = createFileRoute("/stats")({
	head: () => ({ meta: [{ title: "Stats · ArsMusic" }, {
		name: "description",
		content: "Your listening stats and streaks."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$5, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$5, "notFoundComponent")
});
var $$splitNotFoundComponentImporter$4 = () => import("./search-qPSzFqzS.mjs");
var $$splitErrorComponentImporter$4 = () => import("./search-DaMvqWxF.mjs");
var $$splitComponentImporter$6 = () => import("./search-CVLXIzuR.mjs");
var Route$8 = createFileRoute("/search")({
	head: () => ({ meta: [{ title: "Search · ArsMusic" }, {
		name: "description",
		content: "Search every song, artist, and album in the YouTube Music catalog."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$4, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$4, "notFoundComponent")
});
var $$splitNotFoundComponentImporter$3 = () => import("./profile-DZ_XWsnD.mjs");
var $$splitErrorComponentImporter$3 = () => import("./profile-jE_8n2vR.mjs");
var $$splitComponentImporter$5 = () => import("./profile-CRmNVO71.mjs");
var Route$7 = createFileRoute("/profile")({
	head: () => ({ meta: [{ title: "Profile · ArsMusic" }, {
		name: "description",
		content: "Your ArsMusic profile and settings."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$3, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$3, "notFoundComponent")
});
var $$splitNotFoundComponentImporter$2 = () => import("./player-SLRRUnig.mjs");
var $$splitErrorComponentImporter$2 = () => import("./player-BYJtyFTR.mjs");
var $$splitComponentImporter$4 = () => import("./player-JTrm-gIY.mjs");
var Route$6 = createFileRoute("/player")({
	head: () => ({ meta: [{ title: "Now Playing · ArsMusic" }, {
		name: "description",
		content: "Now playing on ArsMusic."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$2, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$2, "notFoundComponent")
});
var $$splitNotFoundComponentImporter$1 = () => import("./library-Bcwt5GeU.mjs");
var $$splitErrorComponentImporter$1 = () => import("./library-CWcO5E7R.mjs");
var $$splitComponentImporter$3 = () => import("./library-DFpmArko.mjs");
var Route$5 = createFileRoute("/library")({
	head: () => ({ meta: [{ title: "Library · ArsMusic" }, {
		name: "description",
		content: "Your liked songs, history, and recent plays."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$1, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent")
});
var $$splitComponentImporter$2 = () => import("./foryou-D49SnlQE.mjs");
var Route$4 = createFileRoute("/foryou")({
	head: () => ({ meta: [{ title: "For You · ArsMusic" }, {
		name: "description",
		content: "Personalized mixes, stations and recommendations based on your taste."
	}] }),
	loader: ({ context }) => context.queryClient.ensureQueryData(personalQuery),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./downloads-ByvmIcQW.mjs");
var Route$3 = createFileRoute("/downloads")({
	head: () => ({ meta: [{ title: "Downloads · ArsMusic" }, {
		name: "description",
		content: "Your downloaded songs."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitNotFoundComponentImporter = () => import("./routes-Cfn8fldt.mjs");
var $$splitErrorComponentImporter = () => import("./routes-82nefjpI.mjs");
var $$splitComponentImporter = () => import("./routes-Dpr4Avc1.mjs");
var Route$2 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "ArsMusic — Home" }, {
		name: "description",
		content: "Your personal feed of new music, mixes, and recommendations."
	}] }),
	loader: ({ context }) => {
		context.queryClient.ensureQueryData(homeQuery);
		context.queryClient.prefetchQuery(personalQuery$1());
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
var CORS = {
	"access-control-allow-origin": "*",
	"access-control-allow-methods": "GET, HEAD, OPTIONS",
	"access-control-allow-headers": "Range, Content-Type",
	"access-control-expose-headers": "content-type, content-length, content-range, accept-ranges",
	"access-control-max-age": "86400"
};
var Route$1 = createFileRoute("/api/stream/$id")({ server: { handlers: {
	OPTIONS: async () => new Response(null, {
		status: 204,
		headers: CORS
	}),
	GET: async ({ params, request }) => {
		try {
			const { streamAudioResponse } = await import("./stream-response.server-o1Rb9dhG.mjs");
			return await streamAudioResponse(params.id, request);
		} catch (err) {
			console.error("[stream proxy] failed", err?.message ?? err);
			return new Response("Stream error: " + (err?.message ?? "unknown"), {
				status: 500,
				headers: CORS
			});
		}
	}
} } });
var STREAM_CORS = {
	"access-control-allow-origin": "*",
	"access-control-allow-methods": "GET, HEAD, OPTIONS",
	"access-control-allow-headers": "Range, Content-Type",
	"access-control-expose-headers": "content-type, content-length, content-range, accept-ranges",
	"access-control-max-age": "86400"
};
var Route = createFileRoute("/api/public/stream/$id")({ server: { handlers: {
	OPTIONS: async () => new Response(null, {
		status: 204,
		headers: STREAM_CORS
	}),
	GET: async ({ params, request }) => {
		try {
			const { streamAudioResponse } = await import("./stream-response.server-o1Rb9dhG.mjs");
			return await streamAudioResponse(params.id, request);
		} catch (err) {
			console.error("[public stream] failed", err?.message ?? err);
			return new Response("Stream error: " + (err?.message ?? "unknown"), {
				status: 500,
				headers: STREAM_CORS
			});
		}
	},
	HEAD: async ({ params, request }) => {
		try {
			const { streamAudioResponse } = await import("./stream-response.server-o1Rb9dhG.mjs");
			const response = await streamAudioResponse(params.id, request);
			return new Response(null, {
				status: response.status,
				headers: response.headers
			});
		} catch (err) {
			return new Response(null, {
				status: 500,
				headers: STREAM_CORS
			});
		}
	}
} } });
var StatsRoute = Route$9.update({
	id: "/stats",
	path: "/stats",
	getParentRoute: () => Route$10
});
var SearchRoute = Route$8.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => Route$10
});
var ProfileRoute = Route$7.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => Route$10
});
var PlayerRoute = Route$6.update({
	id: "/player",
	path: "/player",
	getParentRoute: () => Route$10
});
var LibraryRoute = Route$5.update({
	id: "/library",
	path: "/library",
	getParentRoute: () => Route$10
});
var ForyouRoute = Route$4.update({
	id: "/foryou",
	path: "/foryou",
	getParentRoute: () => Route$10
});
var DownloadsRoute = Route$3.update({
	id: "/downloads",
	path: "/downloads",
	getParentRoute: () => Route$10
});
var IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$10
});
var PlaylistIdRoute = Route$14.update({
	id: "/playlist/$id",
	path: "/playlist/$id",
	getParentRoute: () => Route$10
});
var MixIdRoute = Route$13.update({
	id: "/mix/$id",
	path: "/mix/$id",
	getParentRoute: () => Route$10
});
var ArtistIdRoute = Route$12.update({
	id: "/artist/$id",
	path: "/artist/$id",
	getParentRoute: () => Route$10
});
var rootRouteChildren = {
	IndexRoute,
	DownloadsRoute,
	ForyouRoute,
	LibraryRoute,
	PlayerRoute,
	ProfileRoute,
	SearchRoute,
	StatsRoute,
	AlbumIdRoute: Route$11.update({
		id: "/album/$id",
		path: "/album/$id",
		getParentRoute: () => Route$10
	}),
	ArtistIdRoute,
	MixIdRoute,
	PlaylistIdRoute,
	ApiStreamIdRoute: Route$1.update({
		id: "/api/stream/$id",
		path: "/api/stream/$id",
		getParentRoute: () => Route$10
	}),
	ApiPublicStreamIdRoute: Route.update({
		id: "/api/public/stream/$id",
		path: "/api/public/stream/$id",
		getParentRoute: () => Route$10
	})
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
