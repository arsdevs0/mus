import { i as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, i as useQuery, s as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as usePlayer } from "./PlayerContext-ff8Mv2tX.mjs";
import { S as LoaderCircle, m as Search, t as X } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Bga9_FYu.mjs";
import { t as Equalizer } from "./Equalizer-DxpN0hno.mjs";
import { t as SongMenu } from "./SongMenu-rwy4j0nW.mjs";
import { n as ytSearch } from "./yt.functions-Dp9SFdb-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-CVLXIzuR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TRENDING = [
	"Drake",
	"Taylor Swift",
	"Lo-fi beats",
	"Billie Eilish",
	"K-Pop",
	"Workout",
	"Chill",
	"Anime OST"
];
var MOODS = [
	{
		label: "Happy",
		color: "tile-7"
	},
	{
		label: "Chill",
		color: "tile-6"
	},
	{
		label: "Focus",
		color: "tile-2"
	},
	{
		label: "Workout",
		color: "tile-3"
	},
	{
		label: "Sleep",
		color: "tile-4"
	},
	{
		label: "Drive",
		color: "tile-8"
	},
	{
		label: "Romance",
		color: "tile-5"
	},
	{
		label: "Party",
		color: "tile-1"
	}
];
var GENRES = [
	{
		label: "Pop",
		color: "tile-1"
	},
	{
		label: "Hip-Hop",
		color: "tile-3"
	},
	{
		label: "Rock",
		color: "tile-7"
	},
	{
		label: "EDM",
		color: "tile-8"
	},
	{
		label: "R&B",
		color: "tile-5"
	},
	{
		label: "Indie",
		color: "tile-4"
	},
	{
		label: "Jazz",
		color: "tile-6"
	},
	{
		label: "Classical",
		color: "tile-2"
	}
];
function SearchPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const deferred = (0, import_react.useDeferredValue)(q);
	const { play, current, isPlaying } = usePlayer();
	const { data, isFetching } = useQuery({
		queryKey: [
			"yt",
			"search",
			deferred
		],
		queryFn: () => ytSearch({ data: { query: deferred } }),
		enabled: deferred.trim().length > 1,
		staleTime: 1e3 * 60 * 5
	});
	(0, import_react.useEffect)(() => {
		const el = document.getElementById("search-input");
		if (el) el.focus();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "px-5 pb-3 pt-[max(env(safe-area-inset-top),1rem)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-2xl font-extrabold",
			children: "Search"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex items-center gap-2 rounded-full bg-surface px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-muted-foreground" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "search-input",
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Songs, artists, albums…",
					className: "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
				}),
				q && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setQ(""),
					"aria-label": "Clear",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4 text-muted-foreground" })
				}),
				isFetching && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin text-primary" })
			]
		})]
	}), deferred.trim().length < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowseAll, { onPick: setQ }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Results, {
		data,
		play,
		current,
		isPlaying
	})] });
}
function BrowseAll({ onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-2 px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-2 text-sm font-semibold text-muted-foreground",
				children: "Trending"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: TRENDING.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => onPick(t),
					className: "rounded-full bg-surface px-3 py-1.5 text-xs font-medium",
					children: t
				}, t))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-7 px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-base font-bold",
				children: "Mood"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3",
				children: MOODS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => onPick(m.label),
					className: "relative h-20 overflow-hidden rounded-xl p-3 text-left font-display text-lg font-extrabold",
					style: { backgroundColor: `var(--${m.color})` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative z-10 text-background drop-shadow",
						children: m.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-3 -right-3 h-16 w-16 rotate-12 rounded-lg bg-background/15" })]
				}, m.label))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-7 px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-base font-bold",
				children: "Genres"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3",
				children: GENRES.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => onPick(g.label),
					className: "relative h-24 overflow-hidden rounded-xl p-3 text-left font-display text-xl font-extrabold",
					style: { backgroundColor: `var(--${g.color})` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative z-10 text-background drop-shadow",
						children: g.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-4 -right-4 h-20 w-20 rotate-12 rounded-2xl bg-background/15" })]
				}, g.label))
			})]
		})
	] });
}
function Results({ data, play, current, isPlaying }) {
	if (!data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-5 py-10 text-center text-sm text-muted-foreground",
		children: "Searching…"
	});
	const { songs, artists, albums } = data;
	if (songs.length + artists.length + albums.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-5 py-10 text-center text-sm text-muted-foreground",
		children: "No results."
	});
	const queue = songs.map((s) => ({
		id: s.id,
		title: s.title,
		artist: s.artist,
		thumbnail: s.thumbnail
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-2 space-y-7 pb-6",
		children: [
			artists.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-base font-bold",
					children: "Artists"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-4 overflow-x-auto no-scrollbar -mx-5 px-5",
					children: artists.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/artist/$id",
						params: { id: a.id },
						className: "w-20 shrink-0 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto h-20 w-20 overflow-hidden rounded-full bg-surface",
							children: a.thumbnail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								referrerPolicy: "no-referrer",
								loading: "lazy",
								decoding: "async",
								src: a.thumbnail,
								alt: "",
								className: "h-full w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 line-clamp-2 text-xs font-medium",
							children: a.name
						})]
					}, a.id))
				})]
			}),
			songs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-base font-bold",
					children: "Songs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-1",
					children: songs.map((s) => {
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
				})]
			}),
			albums.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-base font-bold",
					children: "Albums"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-3 overflow-x-auto no-scrollbar -mx-5 px-5",
					children: albums.map((al) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "line-clamp-1 text-[11px] text-muted-foreground",
								children: al.artist
							})
						]
					}, al.id))
				})]
			})
		]
	});
}
//#endregion
export { SearchPage as component };
