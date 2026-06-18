import { c as require_jsx_runtime, r as useSuspenseQuery } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as usePlayer } from "./PlayerContext-ff8Mv2tX.mjs";
import { H as ArrowLeft, _ as Play, u as Shuffle } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Bga9_FYu.mjs";
import { t as Equalizer } from "./Equalizer-DxpN0hno.mjs";
import { t as SongMenu } from "./SongMenu-rwy4j0nW.mjs";
import { n as playlistQuery, t as Route } from "./playlist._id-D2kOOT-J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/playlist._id-CgzUw6uC.js
var import_jsx_runtime = require_jsx_runtime();
function PlaylistPage() {
	const { id } = Route.useParams();
	const { data } = useSuspenseQuery(playlistQuery(id));
	const { play, current, isPlaying, playlists } = usePlayer();
	const localPl = id.startsWith("pl-") ? playlists.find((p) => p.id === id) : null;
	const displayData = localPl ? {
		title: localPl.name,
		subtitle: `${localPl.tracks.length} songs`,
		thumbnail: localPl.tracks[0]?.thumbnail || null,
		tracks: localPl.tracks
	} : data;
	const queue = displayData.tracks.map((s) => ({
		id: s.id,
		title: s.title,
		artist: s.artist,
		thumbnail: s.thumbnail
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-72 w-full overflow-hidden",
			children: [
				displayData.thumbnail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					referrerPolicy: "no-referrer",
					src: displayData.thumbnail,
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "absolute left-4 top-[max(env(safe-area-inset-top),1rem)] grid h-9 w-9 place-items-center rounded-full bg-background/40 backdrop-blur",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-5 bottom-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: "Playlist"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl font-extrabold",
							children: displayData.title
						}),
						displayData.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: displayData.subtitle
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 -mt-2 flex gap-3 px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => queue[0] && play(queue[0], queue),
				className: "flex flex-1 items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-bold text-primary-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4 fill-current" }), " Play"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => {
					const shuffled = [...queue].sort(() => Math.random() - .5);
					if (shuffled[0]) play(shuffled[0], shuffled);
				},
				className: "flex flex-1 items-center justify-center gap-2 rounded-full bg-surface py-3 text-sm font-bold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { className: "h-4 w-4" }), " Shuffle"]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-6 px-5 pb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1",
				children: displayData.tracks.map((s) => {
					const isCur = current?.id === s.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-full items-center gap-2 rounded-xl hover:bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => play({
								id: s.id,
								title: s.title,
								artist: s.artist,
								thumbnail: s.thumbnail
							}, queue),
							className: "flex flex-1 items-center gap-3 p-2 text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-12 w-12 shrink-0 overflow-hidden rounded-md bg-surface-2",
									children: s.thumbnail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										referrerPolicy: "no-referrer",
										loading: "lazy",
										decoding: "async",
										src: s.thumbnail,
										alt: "",
										className: "h-full w-full object-cover"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `truncate text-sm font-semibold ${isCur ? "text-primary" : ""}`,
										children: s.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-xs text-muted-foreground",
										children: s.artist
									})]
								}),
								isCur && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Equalizer, { active: isPlaying })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pr-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SongMenu, { track: {
								id: s.id,
								title: s.title,
								artist: s.artist,
								thumbnail: s.thumbnail
							} })
						})]
					}) }, s.id);
				})
			})
		})
	] });
}
//#endregion
export { PlaylistPage as component };
