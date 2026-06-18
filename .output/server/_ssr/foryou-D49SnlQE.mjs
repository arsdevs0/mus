import { i as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, r as useSuspenseQuery, s as require_react, t as useInfiniteQuery } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ytMoreRecommendations, r as usePlayer } from "./PlayerContext-ff8Mv2tX.mjs";
import { L as ChevronLeft, _ as Play, u as Shuffle } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Bga9_FYu.mjs";
import { t as Equalizer } from "./Equalizer-DxpN0hno.mjs";
import { t as SongMenu } from "./SongMenu-rwy4j0nW.mjs";
import { t as personalQuery } from "./foryou-LtwKcLPP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/foryou-D49SnlQE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var songToTrack = (s) => ({
	id: s.id,
	title: s.title,
	artist: s.artist,
	thumbnail: s.thumbnail
});
function ForYou() {
	const { data } = useSuspenseQuery(personalQuery);
	const { play, current, isPlaying } = usePlayer();
	const queue = data.forYou.map(songToTrack);
	const loadMoreRef = (0, import_react.useRef)(null);
	const more = useInfiniteQuery({
		queryKey: ["yt", "more"],
		queryFn: ({ pageParam }) => ytMoreRecommendations({ data: { page: pageParam } }),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => lastPage.songs.length > 0 ? allPages.length + 1 : void 0
	});
	(0, import_react.useEffect)(() => {
		if (!more.hasNextPage || more.isFetchingNextPage) return;
		const observer = new IntersectionObserver((entries) => {
			if (entries[0]?.isIntersecting) more.fetchNextPage();
		}, { rootMargin: "200px" });
		if (loadMoreRef.current) observer.observe(loadMoreRef.current);
		return () => observer.disconnect();
	}, [
		more.hasNextPage,
		more.isFetchingNextPage,
		more.fetchNextPage
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center gap-3 px-5 pb-4 pt-[max(env(safe-area-inset-top),1rem)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				"aria-label": "Back",
				className: "grid h-9 w-9 place-items-center rounded-full bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "Personalized"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-extrabold",
				children: "For You"
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-5 flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => data.forYou[0] && play(songToTrack(data.forYou[0]), queue),
				className: "flex flex-1 items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-bold text-primary-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" }), " Play"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => {
					const shuffled = [...queue].sort(() => Math.random() - .5);
					if (shuffled[0]) play(shuffled[0], shuffled);
				},
				className: "flex flex-1 items-center justify-center gap-2 rounded-full bg-surface py-3 text-sm font-bold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { className: "h-4 w-4" }), " Shuffle"]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6 px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-base font-bold",
				children: "Recommended songs"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1",
				children: data.forYou.map((s) => {
					const isCur = current?.id === s.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-full items-center gap-2 rounded-xl hover:bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => play(songToTrack(s), queue),
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
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SongMenu, { track: songToTrack(s) })
						})]
					}) }, s.id);
				})
			})]
		}),
		data.dailyMixes.map((mix) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8 px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-1 text-base font-bold",
					children: mix.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs text-muted-foreground",
					children: mix.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-3 overflow-x-auto no-scrollbar -mx-5 px-5 pb-2",
					children: mix.songs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => play(songToTrack(s), mix.songs.map(songToTrack)),
						className: "w-32 shrink-0 text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-square overflow-hidden rounded-xl bg-surface",
								children: s.thumbnail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									referrerPolicy: "no-referrer",
									loading: "lazy",
									decoding: "async",
									src: s.thumbnail,
									alt: "",
									className: "h-full w-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-2 text-xs font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "line-clamp-1 text-[11px] text-muted-foreground",
								children: s.artist
							})
						]
					}, s.id))
				})
			]
		}, mix.id)),
		data.radios.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8 px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-1 text-base font-bold",
					children: r.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-3 text-xs text-muted-foreground",
					children: ["Radio · ", r.subtitle]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-3 overflow-x-auto no-scrollbar -mx-5 px-5 pb-2",
					children: r.songs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => play(songToTrack(s), r.songs.map(songToTrack)),
						className: "w-32 shrink-0 text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-square overflow-hidden rounded-xl bg-surface",
								children: s.thumbnail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									referrerPolicy: "no-referrer",
									loading: "lazy",
									decoding: "async",
									src: s.thumbnail,
									alt: "",
									className: "h-full w-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-2 text-xs font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "line-clamp-1 text-[11px] text-muted-foreground",
								children: s.artist
							})
						]
					}, s.id))
				})
			]
		}, r.id)),
		more.data?.pages.map((page, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8 px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-base font-bold",
				children: page.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1",
				children: page.songs.map((s) => {
					const isCur = current?.id === s.id;
					const pageQueue = page.songs.map(songToTrack);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-full items-center gap-2 rounded-xl hover:bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => play(songToTrack(s), pageQueue),
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
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SongMenu, { track: songToTrack(s) })
						})]
					}) }, s.id);
				})
			})]
		}, i)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: loadMoreRef,
			className: "h-20 w-full"
		})
	] });
}
//#endregion
export { ForYou as component };
