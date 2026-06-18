import { c as require_jsx_runtime, r as useSuspenseQuery } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as usePlayer } from "./PlayerContext-ff8Mv2tX.mjs";
import { t as FastImage } from "./FastImage-DUWDFhOt.mjs";
import { H as ArrowLeft, _ as Play, u as Shuffle } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Bga9_FYu.mjs";
import { t as Equalizer } from "./Equalizer-DxpN0hno.mjs";
import { n as personalQuery, t as Route } from "./mix._id-_STDEMyx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mix._id-D6goE7zw.js
var import_jsx_runtime = require_jsx_runtime();
var toTrack = (s) => ({
	id: s.id,
	title: s.title,
	artist: s.artist,
	thumbnail: s.thumbnail
});
function MixPage() {
	const { id } = Route.useParams();
	const { data } = useSuspenseQuery(personalQuery);
	const mix = data.dailyMixes.find((m) => m.id === id) ?? data.dailyMixes[0];
	const { play, current, isPlaying } = usePlayer();
	const queue = (mix?.songs ?? []).map(toTrack);
	if (!mix) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-6 text-sm text-muted-foreground",
		children: "Mix unavailable."
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "px-5 pt-[max(env(safe-area-inset-top),1rem)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "grid h-9 w-9 place-items-center rounded-full bg-surface",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-2 gap-1 overflow-hidden rounded-xl bg-surface",
					children: mix.songs.slice(0, 4).map((song) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-square bg-surface-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FastImage, {
							src: song.thumbnail,
							alt: "",
							eager: true,
							sizes: "180px",
							className: "h-full w-full object-cover"
						})
					}, song.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-xs uppercase text-muted-foreground",
					children: "Daily Mix"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-extrabold",
					children: mix.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: mix.subtitle
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 flex gap-3 px-5",
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
				children: mix.songs.map((song) => {
					const isCur = current?.id === song.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => play(toTrack(song), queue),
						className: "flex w-full items-center gap-3 rounded-xl p-2 text-left hover:bg-surface",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-12 w-12 shrink-0 overflow-hidden rounded-md bg-surface-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FastImage, {
									src: song.thumbnail,
									alt: "",
									sizes: "48px",
									className: "h-full w-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `truncate text-sm font-semibold ${isCur ? "text-primary" : ""}`,
									children: song.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-xs text-muted-foreground",
									children: song.artist
								})]
							}),
							isCur && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Equalizer, { active: isPlaying })
						]
					}) }, song.id);
				})
			})
		})
	] });
}
//#endregion
export { MixPage as component };
