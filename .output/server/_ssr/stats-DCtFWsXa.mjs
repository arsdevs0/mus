import { c as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as usePlayer } from "./PlayerContext-ff8Mv2tX.mjs";
import { M as Clock, a as TrendingUp, b as Music, k as Flame } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Bga9_FYu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stats-DCtFWsXa.js
var import_jsx_runtime = require_jsx_runtime();
function Stats() {
	const { minutesListened, history, liked, recent } = usePlayer();
	const likedCount = Object.keys(liked).length;
	const artistCount = /* @__PURE__ */ new Map();
	history.forEach((t) => {
		const key = t.artist || "Unknown";
		const ex = artistCount.get(key);
		if (ex) ex.count++;
		else artistCount.set(key, {
			name: key,
			thumb: t.thumbnail,
			count: 1
		});
	});
	const topArtists = [...artistCount.values()].sort((a, b) => b.count - a.count).slice(0, 5);
	const songCount = /* @__PURE__ */ new Map();
	history.forEach((t) => {
		const ex = songCount.get(t.id);
		if (ex) ex.count++;
		else songCount.set(t.id, {
			id: t.id,
			title: t.title,
			artist: t.artist,
			thumb: t.thumbnail,
			count: 1
		});
	});
	const topSongs = [...songCount.values()].sort((a, b) => b.count - a.count).slice(0, 5);
	const weekHeights = [
		.4,
		.6,
		.3,
		.85,
		.55,
		.95,
		.7
	];
	const days = [
		"M",
		"T",
		"W",
		"T",
		"F",
		"S",
		"S"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "px-5 pb-3 pt-[max(env(safe-area-inset-top),1rem)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-extrabold",
				children: "Your Stats"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Your listening at a glance"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid grid-cols-2 gap-3 px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: Clock,
					label: "Minutes listened",
					value: String(minutesListened),
					color: "tile-2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: Music,
					label: "Songs played",
					value: String(history.length),
					color: "tile-1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: TrendingUp,
					label: "Liked",
					value: String(likedCount),
					color: "tile-5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: Flame,
					label: "Streak",
					value: "12d",
					color: "tile-3"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-6 px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-surface p-4 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wider text-muted-foreground",
						children: "This week"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 font-display text-3xl font-extrabold",
						children: [
							minutesListened,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base font-medium text-muted-foreground",
								children: "min"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex h-24 items-end gap-2",
						children: weekHeights.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-full rounded-t-lg bg-gradient-primary",
								style: {
									height: `${h * 100}%`,
									opacity: .4 + h * .6
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-muted-foreground",
								children: days[i]
							})]
						}, i))
					})
				]
			})
		}),
		topArtists.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6 px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-base font-bold",
				children: "Top artists"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-4 overflow-x-auto no-scrollbar -mx-5 px-5",
				children: topArtists.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-20 shrink-0 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto h-20 w-20 overflow-hidden rounded-full bg-surface",
							children: a.thumb && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								referrerPolicy: "no-referrer",
								loading: "lazy",
								decoding: "async",
								src: a.thumb,
								alt: "",
								className: "h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 line-clamp-1 text-xs font-semibold",
							children: a.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[10px] text-muted-foreground",
							children: [a.count, " plays"]
						})
					]
				}, a.name))
			})]
		}),
		topSongs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6 px-5 pb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-base font-bold",
				children: "Top songs"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-2",
				children: topSongs.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 rounded-xl bg-surface p-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-5 text-center font-display text-lg font-extrabold text-muted-foreground",
							children: i + 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-10 w-10 overflow-hidden rounded-md bg-surface-2",
							children: s.thumb && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								referrerPolicy: "no-referrer",
								loading: "lazy",
								decoding: "async",
								src: s.thumb,
								alt: "",
								className: "h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-semibold",
								children: s.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs text-muted-foreground",
								children: s.artist
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground",
							children: [s.count, "×"]
						})
					]
				}, s.id))
			})]
		}),
		history.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-5 mt-6 rounded-xl border border-border bg-surface p-6 text-center text-sm text-muted-foreground",
			children: "Start listening to see your stats build up."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-5 mb-6 mt-6 rounded-2xl bg-gradient-primary p-5 shadow-glow",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase tracking-wider text-background/70",
					children: "2026 Recap"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-display text-2xl font-extrabold text-background",
					children: "Your year in music"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-background/80",
					children: "Coming this December."
				})
			]
		})
	] });
}
function StatCard({ icon: Icon, label, value, color }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-9 w-9 place-items-center rounded-lg",
				style: { backgroundColor: `var(--${color})` },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-background" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-2xl font-extrabold",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: label
			})
		]
	});
}
//#endregion
export { Stats as component };
