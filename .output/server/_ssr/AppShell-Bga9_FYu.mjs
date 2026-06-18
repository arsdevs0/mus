import { c as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as usePlayer } from "./PlayerContext-ff8Mv2tX.mjs";
import { t as FastImage } from "./FastImage-DUWDFhOt.mjs";
import { D as House, O as Heart, S as LoaderCircle, T as Library, _ as Play, i as User, m as Search, t as X, v as Pause, x as Moon, z as ChartColumn } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AppShell-Bga9_FYu.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		to: "/",
		label: "Home",
		icon: House
	},
	{
		to: "/search",
		label: "Search",
		icon: Search
	},
	{
		to: "/library",
		label: "Library",
		icon: Library
	},
	{
		to: "/stats",
		label: "Stats",
		icon: ChartColumn
	},
	{
		to: "/profile",
		label: "Profile",
		icon: User
	}
];
function BottomNav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "fixed inset-x-0 bottom-0 z-40 bg-surface/95 backdrop-blur-xl border-t border-border/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mx-auto grid max-w-md grid-cols-5 px-2 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2",
			children: items.map(({ to, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to,
				activeOptions: { exact: to === "/" },
				className: "group relative flex flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-muted-foreground transition-all duration-200 data-[status=active]:text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid place-items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "relative z-10 h-5 w-5 transition-transform duration-200 group-data-[status=active]:scale-110" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 scale-150 rounded-full bg-primary/20 opacity-0 blur-md transition-opacity duration-300 group-data-[status=active]:opacity-100" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] font-medium tracking-wide transition-colors",
					children: label
				})]
			}) }, to))
		})
	});
}
function MiniPlayer() {
	const { current, isPlaying, loading, toggle, position, duration, toggleLike, isLiked, sleepTimer, loopMode, clear } = usePlayer();
	if (!current) return null;
	const pct = duration > 0 ? Math.min(100, position / duration * 100) : 0;
	const sleepMinsLeft = sleepTimer ? Math.max(0, Math.round((sleepTimer - Date.now()) / 6e4)) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+58px)] z-30 px-3 miniplayer-enter",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-md overflow-hidden rounded-2xl glass shadow-card border border-border/50",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-[3px] bg-surface-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-gradient-primary transition-[width] duration-300 ease-linear",
					style: { width: `${pct}%` }
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 p-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/player",
						className: "flex flex-1 items-center gap-3 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-surface-2 shadow-card",
							children: current.thumbnail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FastImage, {
								src: current.thumbnail,
								alt: "",
								eager: true,
								sizes: "44px",
								className: "h-full w-full object-cover"
							}) : null
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-semibold",
								children: current.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs text-muted-foreground",
								children: current.artist
							})]
						})]
					}),
					sleepTimer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-3 w-3" }),
							sleepMinsLeft,
							"m"
						]
					}),
					loopMode !== "off" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-bold text-primary",
						children: loopMode === "one" ? "1×" : "∞"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => toggleLike(),
						"aria-label": "Like",
						className: "p-2 text-muted-foreground hover:text-primary transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-5 w-5 transition-all duration-200 ${isLiked(current.id) ? "fill-primary text-primary scale-110" : ""}` })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: toggle,
						"aria-label": isPlaying ? "Pause" : "Play",
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-foreground text-background transition-transform duration-150 hover:scale-105 active:scale-95",
						children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4 translate-x-[1px]" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: clear,
						"aria-label": "Close Player",
						className: "p-2 text-muted-foreground hover:text-foreground transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					})
				]
			})]
		})
	});
}
function AppShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto min-h-screen max-w-md overflow-x-hidden pb-40",
		children: [
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniPlayer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
		]
	});
}
//#endregion
export { AppShell as t };
