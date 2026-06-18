import { c as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as usePlayer } from "./PlayerContext-ff8Mv2tX.mjs";
import { t as FastImage } from "./FastImage-DUWDFhOt.mjs";
import { L as ChevronLeft, o as Trash2, u as Shuffle } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Bga9_FYu.mjs";
import { t as SongMenu } from "./SongMenu-rwy4j0nW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/downloads-ByvmIcQW.js
var import_jsx_runtime = require_jsx_runtime();
function Downloads() {
	const router = useRouter();
	const { downloads, play, removeDownload } = usePlayer();
	const downloadedList = Object.values(downloads).filter((d) => d.status === "completed").map((d) => d.track);
	const handleShufflePlay = () => {
		if (downloadedList.length === 0) return;
		const shuffled = [...downloadedList].sort(() => Math.random() - .5);
		play(shuffled[0], shuffled);
	};
	const handleDeleteAll = () => {
		if (confirm("Are you sure you want to delete all downloaded songs?")) downloadedList.forEach((t) => removeDownload(t.id));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex items-center justify-between px-5 pb-3 pt-[max(env(safe-area-inset-top),1rem)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => router.history.back(),
				className: "grid h-9 w-9 place-items-center rounded-full bg-surface/60 hover:bg-surface-2 transition-colors",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-extrabold",
				children: "Downloads"
			})]
		}), downloadedList.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: handleDeleteAll,
			"aria-label": "Delete All",
			className: "grid h-9 w-9 place-items-center rounded-full bg-surface/60 text-destructive hover:bg-destructive/20 transition-colors",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-5 pb-[calc(env(safe-area-inset-bottom)+80px)]",
		children: downloadedList.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 rounded-2xl border border-border bg-surface p-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: "No downloads yet."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Songs you download will appear here for offline playback."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-4 inline-block rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity",
					children: "Download Songs"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: handleShufflePlay,
			className: "mb-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-foreground py-3 text-sm font-bold text-background transition-transform active:scale-95",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { className: "h-5 w-5" }), " Shuffle Play All"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-1",
			children: downloadedList.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "group flex items-center gap-3 rounded-xl p-2 text-left hover:bg-surface-2 transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => play(t, downloadedList),
					className: "flex flex-1 items-center gap-3 min-w-0 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-12 w-12 shrink-0 overflow-hidden rounded-md bg-surface-2 shadow-card",
						children: t.thumbnail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FastImage, {
							src: t.thumbnail,
							alt: "",
							sizes: "48px",
							className: "h-full w-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-gradient-primary" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-semibold",
							children: t.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-xs text-muted-foreground",
							children: t.artist
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SongMenu, { track: t })]
			}, t.id))
		})] })
	})] });
}
//#endregion
export { Downloads as component };
