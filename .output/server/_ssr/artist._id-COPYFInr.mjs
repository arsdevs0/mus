import { i as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, i as useQuery, r as useSuspenseQuery, s as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as usePlayer } from "./PlayerContext-ff8Mv2tX.mjs";
import { F as ChevronUp, H as ArrowLeft, R as ChevronDown, _ as Play, u as Shuffle } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Bga9_FYu.mjs";
import { t as Equalizer } from "./Equalizer-DxpN0hno.mjs";
import { t as SongMenu } from "./SongMenu-rwy4j0nW.mjs";
import { n as ytSearch } from "./yt.functions-Dp9SFdb-.mjs";
import { n as artistQuery, t as Route } from "./artist._id-ChDuBRjh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/artist._id-COPYFInr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SongRow({ s, queue, isCur, isPlaying, play }) {
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
						children: s.album ?? s.artist
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
	}) });
}
function ArtistPage() {
	const { id } = Route.useParams();
	const { data } = useSuspenseQuery(artistQuery(id));
	const { play, current, isPlaying } = usePlayer();
	const [showAllTopSongs, setShowAllTopSongs] = (0, import_react.useState)(false);
	const queue = data.songs.map((s) => ({
		id: s.id,
		title: s.title,
		artist: s.artist,
		thumbnail: s.thumbnail
	}));
	const allSongsQuery = useQuery({
		queryKey: [
			"yt",
			"artist-all-songs",
			data.name
		],
		queryFn: () => ytSearch({ data: { query: data.name } }),
		staleTime: 1e3 * 60 * 30,
		enabled: !!data.name && data.name !== "Artist"
	});
	const allSongs = allSongsQuery.data?.songs ?? [];
	const allSongsQueue = allSongs.map((s) => ({
		id: s.id,
		title: s.title,
		artist: s.artist,
		thumbnail: s.thumbnail
	}));
	const topSongsVisible = showAllTopSongs ? data.songs : data.songs.slice(0, 5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-56 w-full overflow-hidden",
				children: [
					data.thumbnail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						referrerPolicy: "no-referrer",
						src: data.thumbnail,
						alt: "",
						className: "absolute inset-0 h-full w-full object-cover"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "absolute left-4 top-[max(env(safe-area-inset-top),1rem)] grid h-9 w-9 place-items-center rounded-full bg-background/40 backdrop-blur",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-5 w-5" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "-mt-16 relative z-10 px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wider text-muted-foreground",
						children: "Artist"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-extrabold",
						children: data.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => queue[0] && play(queue[0], queue),
							className: "flex flex-1 items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-bold text-primary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4 fill-current" }), " Play All"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								const shuffled = [...queue].sort(() => Math.random() - .5);
								if (shuffled[0]) play(shuffled[0], shuffled);
							},
							className: "flex flex-1 items-center justify-center gap-2 rounded-full bg-surface py-3 text-sm font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { className: "h-4 w-4" }), " Shuffle"]
						})]
					})
				]
			})]
		}),
		data.songs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6 px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 text-base font-bold",
					children: "Top Songs"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-1",
					children: topSongsVisible.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SongRow, {
						s,
						queue,
						isCur: current?.id === s.id,
						isPlaying,
						play
					}, s.id))
				}),
				data.songs.length > 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setShowAllTopSongs(!showAllTopSongs),
					className: "mt-2 flex w-full items-center justify-center gap-1 rounded-xl py-2 text-xs font-medium text-muted-foreground hover:text-foreground",
					children: showAllTopSongs ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-3 w-3" }), " Show less"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3" }),
						" See all ",
						data.songs.length,
						" songs"
					] })
				})
			]
		}),
		data.releases?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-7 px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-base font-bold",
				children: "Latest Releases"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-3 overflow-x-auto no-scrollbar -mx-5 px-5 pb-2",
				children: data.releases.map((al) => al.isSong ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => play({
						id: al.id,
						title: al.title,
						artist: data.name,
						thumbnail: al.thumbnail
					}, queue),
					className: "w-32 shrink-0 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "aspect-square overflow-hidden rounded-xl bg-surface relative group",
							children: [al.thumbnail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								referrerPolicy: "no-referrer",
								loading: "lazy",
								decoding: "async",
								src: al.thumbnail,
								alt: "",
								className: "h-full w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-8 w-8 text-white fill-white" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 line-clamp-2 text-xs font-semibold",
							children: al.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground",
							children: al.year ? `${al.year} • Song` : "Song"
						})
					]
				}, al.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/album/$id",
					params: { id: al.id },
					className: "w-32 shrink-0 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-square overflow-hidden rounded-xl bg-surface",
							children: al.thumbnail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								referrerPolicy: "no-referrer",
								loading: "lazy",
								decoding: "async",
								src: al.thumbnail,
								alt: "",
								className: "h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 line-clamp-2 text-xs font-semibold",
							children: al.title
						}),
						al.year && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground",
							children: al.year
						})
					]
				}, al.id))
			})]
		}),
		data.albums.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-7 px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-base font-bold",
				children: "Albums"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-3 overflow-x-auto no-scrollbar -mx-5 px-5 pb-2",
				children: data.albums.map((al) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/album/$id",
					params: { id: al.id },
					className: "w-32 shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-square overflow-hidden rounded-xl bg-surface",
							children: al.thumbnail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								referrerPolicy: "no-referrer",
								loading: "lazy",
								decoding: "async",
								src: al.thumbnail,
								alt: "",
								className: "h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 line-clamp-2 text-xs font-semibold",
							children: al.title
						}),
						al.year && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground",
							children: al.year
						})
					]
				}, al.id))
			})]
		}),
		data.singles?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-7 px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-base font-bold",
				children: "Singles & EPs"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-3 overflow-x-auto no-scrollbar -mx-5 px-5 pb-2",
				children: data.singles.map((al) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/album/$id",
					params: { id: al.id },
					className: "w-32 shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-square overflow-hidden rounded-xl bg-surface",
							children: al.thumbnail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								referrerPolicy: "no-referrer",
								loading: "lazy",
								decoding: "async",
								src: al.thumbnail,
								alt: "",
								className: "h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 line-clamp-2 text-xs font-semibold",
							children: al.title
						}),
						al.year && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground",
							children: al.year
						})
					]
				}, al.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-7 px-5 pb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-2 text-base font-bold",
				children: "All Songs"
			}), allSongsQuery.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-4 text-center text-xs text-muted-foreground",
				children: "Loading all songs…"
			}) : allSongs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-4 text-center text-xs text-muted-foreground",
				children: "No additional songs found."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1",
				children: allSongs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SongRow, {
					s,
					queue: allSongsQueue,
					isCur: current?.id === s.id,
					isPlaying,
					play
				}, s.id))
			})]
		})
	] });
}
//#endregion
export { ArtistPage as component };
