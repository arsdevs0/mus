import { i as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, s as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as usePlayer } from "./PlayerContext-ff8Mv2tX.mjs";
import { M as Clock, O as Heart, j as Download, w as ListMusic } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Bga9_FYu.mjs";
import { t as Equalizer } from "./Equalizer-DxpN0hno.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/library-DFpmArko.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Library() {
	const { liked, recent, history, play, current, isPlaying, downloads, playlists } = usePlayer();
	const likedList = Object.values(liked);
	const downloadedList = Object.values(downloads).filter((d) => d.status === "completed").map((d) => d.track);
	const [tab, setTab] = (0, import_react.useState)("all");
	const stats = [
		{
			icon: Heart,
			label: "Liked",
			count: likedList.length,
			color: "tile-5",
			id: "liked"
		},
		{
			icon: ListMusic,
			label: "Playlists",
			count: playlists.length,
			color: "tile-4",
			id: "playlists"
		},
		{
			icon: Download,
			label: "Offline",
			count: downloadedList.length,
			color: "tile-6",
			id: "offline"
		},
		{
			icon: Clock,
			label: "Recent",
			count: recent.length,
			color: "tile-2",
			id: "recent"
		}
	];
	const showList = (() => {
		if (tab === "liked") return likedList;
		if (tab === "recent") return recent;
		if (tab === "history") return history;
		if (tab === "offline") return downloadedList;
		return [
			...likedList,
			...recent,
			...downloadedList
		].filter((v, i, arr) => arr.findIndex((x) => x.id === v.id) === i);
	})();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "px-5 pb-3 pt-[max(env(safe-area-inset-top),1rem)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-extrabold",
				children: "Your Library"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto no-scrollbar pb-2",
				children: [
					"all",
					"liked",
					"playlists",
					"recent",
					"history",
					"offline"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(t),
					className: `whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium capitalize ${tab === t ? "bg-foreground text-background" : "bg-surface text-foreground"}`,
					children: t
				}, t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-3 grid grid-cols-2 gap-2 px-5",
			children: stats.map(({ icon: Icon, label, count, color, id }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setTab(id),
				className: "flex items-center gap-3 rounded-xl bg-surface p-3 text-left hover:bg-surface-2 transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg",
					style: { backgroundColor: `var(--${color})` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-background" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-sm font-semibold",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "truncate text-xs text-muted-foreground",
						children: [
							count,
							" ",
							count === 1 ? "song" : "songs"
						]
					})]
				})]
			}, label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6 px-5 pb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-bold",
					children: tab === "all" ? "All in library" : tab[0].toUpperCase() + tab.slice(1)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListMusic, { className: "h-4 w-4 text-muted-foreground" })]
			}), tab === "playlists" ? playlists.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-border bg-surface p-6 text-center text-sm text-muted-foreground",
				children: "You haven't created any playlists yet."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3",
				children: playlists.map((pl) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/playlist/$id",
					params: { id: pl.id },
					className: "group flex flex-col text-left card-interactive",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-square w-full overflow-hidden rounded-xl bg-surface-2 shadow-card",
							children: pl.tracks[0]?.thumbnail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: pl.tracks[0].thumbnail,
								alt: "",
								className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-full w-full place-items-center bg-gradient-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListMusic, { className: "h-10 w-10 text-background/80" })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 truncate text-sm font-semibold",
							children: pl.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "truncate text-xs text-muted-foreground",
							children: [pl.tracks.length, " songs"]
						})
					]
				}, pl.id))
			}) : showList.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-border bg-surface p-6 text-center text-sm text-muted-foreground",
				children: "Nothing here yet. Start exploring and tap the heart on any song."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1",
				children: showList.map((t, idx) => {
					const isCur = current?.id === t.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => play(t, showList),
						className: "flex w-full items-center gap-3 rounded-xl p-2 text-left hover:bg-surface",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-12 w-12 shrink-0 overflow-hidden rounded-md bg-surface-2",
								children: t.thumbnail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									referrerPolicy: "no-referrer",
									loading: "lazy",
									decoding: "async",
									src: t.thumbnail,
									alt: "",
									className: "h-full w-full object-cover"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-gradient-primary" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `truncate text-sm font-semibold ${isCur ? "text-primary" : ""}`,
									children: t.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-xs text-muted-foreground",
									children: t.artist
								})]
							}),
							isCur && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Equalizer, { active: isPlaying })
						]
					}) }, `${t.id}-${tab}-${idx}`);
				})
			})]
		})
	] });
}
//#endregion
export { Library as component };
