import { c as require_jsx_runtime, r as useSuspenseQuery } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as usePlayer } from "./PlayerContext-ff8Mv2tX.mjs";
import { n as albumQuery, t as Route } from "./album._id-DSG_-Xj3.mjs";
import { H as ArrowLeft, _ as Play, u as Shuffle } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Bga9_FYu.mjs";
import { t as Equalizer } from "./Equalizer-DxpN0hno.mjs";
import { t as SongMenu } from "./SongMenu-rwy4j0nW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/album._id-DApnBti7.js
var import_jsx_runtime = require_jsx_runtime();
function AlbumPage() {
	const { id } = Route.useParams();
	const { data } = useSuspenseQuery(albumQuery(id));
	const { play, current, isPlaying } = usePlayer();
	const queue = data.tracks.map((s) => ({
		id: s.id,
		title: s.title,
		artist: s.artist,
		thumbnail: s.thumbnail
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative px-5 pb-4 pt-[max(env(safe-area-inset-top),1rem)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mb-3 inline-grid h-9 w-9 place-items-center rounded-full bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-48 w-48 overflow-hidden rounded-2xl bg-surface shadow-card",
						children: data.thumbnail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							referrerPolicy: "no-referrer",
							src: data.thumbnail,
							alt: "",
							className: "h-full w-full object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-2xl font-extrabold",
						children: data.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: [data.artist, data.year ? ` · ${data.year}` : ""]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-3 px-5",
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
				children: data.tracks.map((s, i) => {
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-6 text-center text-xs text-muted-foreground",
									children: i + 1
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
								isCur ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Equalizer, { active: isPlaying }) : s.duration && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: s.duration
								})
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
export { AlbumPage as component };
