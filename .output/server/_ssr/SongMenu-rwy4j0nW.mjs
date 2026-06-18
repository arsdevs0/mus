import { i as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, s as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as require_react_dom } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as usePlayer } from "./PlayerContext-ff8Mv2tX.mjs";
import { A as EllipsisVertical, C as ListPlus, O as Heart, S as LoaderCircle, V as Ban, b as Music, f as Share2, g as Plus, j as Download, o as Trash2, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SongMenu-rwy4j0nW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = require_react_dom();
function SongMenu({ track }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [showPlaylistPicker, setShowPlaylistPicker] = (0, import_react.useState)(false);
	const [newPlaylistName, setNewPlaylistName] = (0, import_react.useState)("");
	const { addToQueue, toggleLike, isLiked, playlists, createPlaylist, addToPlaylist, downloads, downloadTrack, removeDownload, addNotInterested } = usePlayer();
	const dlEntry = downloads[track.id];
	const dlStatus = dlEntry?.status || "idle";
	const close = () => {
		setOpen(false);
		setShowPlaylistPicker(false);
		setNewPlaylistName("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: (e) => {
				e.stopPropagation();
				setOpen(!open);
			},
			className: "p-2 text-muted-foreground hover:text-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { className: "h-4 w-4" })
		}), open && typeof document !== "undefined" && (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-[100] bg-background/60 backdrop-blur-sm",
			onClick: (e) => {
				e.stopPropagation();
				close();
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-x-0 bottom-0 z-[100] mx-auto max-w-md animate-in slide-in-from-bottom duration-200",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-t-3xl border-t border-border bg-surface p-4 pb-[max(env(safe-area-inset-bottom),1rem)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-surface-2 shadow-card",
							children: track.thumbnail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								referrerPolicy: "no-referrer",
								src: track.thumbnail,
								alt: "",
								className: "h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-semibold",
								children: track.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs text-muted-foreground",
								children: track.artist
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: (e) => {
								e.stopPropagation();
								close();
							},
							className: "grid h-8 w-8 place-items-center rounded-full bg-surface-2 hover:bg-surface-2/80",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})
					]
				}), !showPlaylistPicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: (e) => {
								e.stopPropagation();
								addToQueue(track);
								close();
							},
							className: "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-surface-2 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListPlus, { className: "h-5 w-5 text-muted-foreground" }), " Add to Queue"]
						}),
						dlStatus === "completed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: (e) => {
								e.stopPropagation();
								removeDownload(track.id);
								close();
							},
							className: "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-surface-2 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-5 w-5 text-destructive" }), " Remove Download"]
						}) : dlStatus === "downloading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin" }),
								" Downloading ",
								dlEntry?.progress ?? 0,
								"%"
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: (e) => {
								e.stopPropagation();
								downloadTrack(track);
								close();
							},
							className: "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-surface-2 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-5 w-5 text-muted-foreground" }), " Download"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: (e) => {
								e.stopPropagation();
								setShowPlaylistPicker(true);
							},
							className: "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-surface-2 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "h-5 w-5 text-muted-foreground" }), " Add to Playlist"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: (e) => {
								e.stopPropagation();
								toggleLike(track);
								close();
							},
							className: "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-surface-2 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-5 w-5 ${isLiked(track.id) ? "fill-primary text-primary" : "text-muted-foreground"}` }), isLiked(track.id) ? "Remove from Liked" : "Add to Liked Songs"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: (e) => {
								e.stopPropagation();
								if (navigator.share) navigator.share({
									title: track.title,
									text: `Listen to ${track.title} by ${track.artist}`,
									url: `https://music.youtube.com/watch?v=${track.id}`
								}).catch(() => {});
								close();
							},
							className: "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-surface-2 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-5 w-5 text-muted-foreground" }), " Share"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: (e) => {
								e.stopPropagation();
								if (confirm("Are you sure you want to see less of this?")) {
									addNotInterested(track.id);
									if (track.artist) addNotInterested(track.artist);
								}
								close();
							},
							className: "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-surface-2 transition-colors text-destructive",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, { className: "h-5 w-5" }), " Not interested"]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-sm font-bold",
						children: "Choose a playlist"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: newPlaylistName,
							onChange: (e) => setNewPlaylistName(e.target.value),
							placeholder: "New playlist name…",
							className: "flex-1 rounded-xl bg-surface-2 px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 transition-all",
							onClick: (e) => e.stopPropagation()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: (e) => {
								e.stopPropagation();
								if (newPlaylistName.trim()) {
									addToPlaylist(createPlaylist(newPlaylistName.trim()).id, track);
									close();
								}
							},
							disabled: !newPlaylistName.trim(),
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground disabled:opacity-40 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-5 w-5" })
						})]
					}),
					playlists.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-4 text-center text-xs text-muted-foreground",
						children: "No playlists yet. Create one above."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "max-h-48 space-y-1 overflow-y-auto no-scrollbar",
						children: playlists.map((pl) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: (e) => {
								e.stopPropagation();
								addToPlaylist(pl.id, track);
								close();
							},
							className: "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-surface-2 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-primary text-background",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-medium",
									children: pl.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [pl.tracks.length, " songs"]
								})]
							})]
						}) }, pl.id))
					})
				] })]
			})
		})] }), document.body)]
	});
}
//#endregion
export { SongMenu as t };
