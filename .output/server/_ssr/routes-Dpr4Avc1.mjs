import { i as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, i as useQuery, o as useQueryClient, r as useSuspenseQuery, s as require_react, t as useInfiniteQuery } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ytMoreRecommendations, r as usePlayer } from "./PlayerContext-ff8Mv2tX.mjs";
import { t as FastImage } from "./FastImage-DUWDFhOt.mjs";
import { I as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Bga9_FYu.mjs";
import { t as Equalizer } from "./Equalizer-DxpN0hno.mjs";
import { t as SongMenu } from "./SongMenu-rwy4j0nW.mjs";
import { t as ytHome } from "./yt.functions-Dp9SFdb-.mjs";
import { t as logu_default } from "./logu-BBtHJk_H.mjs";
import { n as personalQuery, t as homeQuery } from "./routes-BZp8dixd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dpr4Avc1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var itemToTrack = (it) => ({
	id: it.id,
	title: it.title,
	artist: it.subtitle,
	thumbnail: it.thumbnail
});
var songToTrack = (s) => ({
	id: s.id,
	title: s.title,
	artist: s.artist,
	thumbnail: s.thumbnail
});
function greeting() {
	const h = (/* @__PURE__ */ new Date()).getHours();
	if (h < 5) return "Late night";
	if (h < 12) return "Good morning";
	if (h < 18) return "Good afternoon";
	return "Good evening";
}
var MIX_GRADIENTS = [
	"linear-gradient(135deg, oklch(0.65 0.22 280), oklch(0.55 0.24 200))",
	"linear-gradient(135deg, oklch(0.70 0.20 30), oklch(0.55 0.22 350))",
	"linear-gradient(135deg, oklch(0.65 0.20 150), oklch(0.50 0.22 260))"
];
function Home() {
	const { data } = useSuspenseQuery(homeQuery);
	const { play, recent, current, isPlaying, isNotInterested } = usePlayer();
	const historySeedId = recent[0]?.id;
	const { data: personal } = useQuery(personalQuery(historySeedId));
	const [filter, setFilter] = (0, import_react.useState)("All");
	const loadMoreRef = (0, import_react.useRef)(null);
	const queryClient = useQueryClient();
	const wrapperRef = (0, import_react.useRef)(null);
	const [pullY, setPullY] = (0, import_react.useState)(0);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const touchStartY = (0, import_react.useRef)(0);
	const isPulling = (0, import_react.useRef)(false);
	const pullYRef = (0, import_react.useRef)(0);
	const [phrase, setPhrase] = (0, import_react.useState)({
		text: "What sounds",
		highlight: "tonight?"
	});
	(0, import_react.useEffect)(() => {
		const options = [
			{
				text: "What sounds",
				highlight: "tonight?"
			},
			{
				text: "Ready to",
				highlight: "vibe?"
			},
			{
				text: "Discover your",
				highlight: "rhythm."
			},
			{
				text: "Play the",
				highlight: "unplayed."
			},
			{
				text: "Your daily",
				highlight: "soundtrack."
			},
			{
				text: "Let the music",
				highlight: "play."
			}
		];
		setPhrase(options[Math.floor(Math.random() * options.length)]);
	}, []);
	const more = useInfiniteQuery({
		queryKey: ["yt", "more-recommendations"],
		queryFn: ({ pageParam }) => ytMoreRecommendations({ data: { page: pageParam } }),
		initialPageParam: 1,
		getNextPageParam: (_last, pages) => pages.length < 20 ? pages.length + 1 : void 0,
		staleTime: 1e3 * 60 * 20
	});
	(0, import_react.useEffect)(() => {
		const node = loadMoreRef.current;
		if (!node) return;
		const obs = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting && more.hasNextPage && !more.isFetchingNextPage) more.fetchNextPage();
		}, { rootMargin: "900px" });
		obs.observe(node);
		return () => obs.disconnect();
	}, [
		more.hasNextPage,
		more.isFetchingNextPage,
		more.fetchNextPage
	]);
	(0, import_react.useEffect)(() => {
		const el = wrapperRef.current;
		if (!el) return;
		const handleTouchStart = (e) => {
			if (refreshing) return;
			if (window.scrollY <= 2) {
				touchStartY.current = e.touches[0].clientY;
				isPulling.current = true;
			}
		};
		const handleTouchMove = (e) => {
			if (!isPulling.current || refreshing) return;
			const diff = e.touches[0].clientY - touchStartY.current;
			if (diff > 0) {
				e.preventDefault();
				const clamped = Math.min(diff * .4, 120);
				pullYRef.current = clamped;
				setPullY(clamped);
			} else {
				isPulling.current = false;
				pullYRef.current = 0;
				setPullY(0);
			}
		};
		const handleTouchEnd = async () => {
			isPulling.current = false;
			if (pullYRef.current >= 65 && !refreshing) {
				setRefreshing(true);
				setPullY(65);
				try {
					await ytHome({ data: { refresh: true } });
					await Promise.all([queryClient.invalidateQueries({ queryKey: ["yt", "home"] }), queryClient.invalidateQueries({ queryKey: ["yt", "personal"] })]);
				} finally {
					setRefreshing(false);
					pullYRef.current = 0;
					setPullY(0);
				}
			} else {
				pullYRef.current = 0;
				setPullY(0);
			}
		};
		el.addEventListener("touchstart", handleTouchStart, { passive: true });
		el.addEventListener("touchmove", handleTouchMove, { passive: false });
		el.addEventListener("touchend", handleTouchEnd, { passive: true });
		return () => {
			el.removeEventListener("touchstart", handleTouchStart);
			el.removeEventListener("touchmove", handleTouchMove);
			el.removeEventListener("touchend", handleTouchEnd);
		};
	}, [refreshing, queryClient]);
	let sectionIdx = 0;
	const sectionDelay = () => `${Math.min(sectionIdx++ * .08, .6)}s`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: wrapperRef,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-center overflow-hidden",
			style: {
				height: pullY > 0 || refreshing ? `${Math.max(pullY, refreshing ? 52 : 0)}px` : "0px",
				opacity: pullY > 10 || refreshing ? 1 : 0,
				transition: isPulling.current ? "none" : "height 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `h-7 w-7 rounded-full border-[2.5px] border-primary border-t-transparent ${refreshing ? "pull-spinner" : ""}`,
					style: {
						transform: refreshing ? void 0 : `rotate(${pullY * 3.5}deg)`,
						transition: refreshing ? void 0 : "none"
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] font-medium text-muted-foreground",
					children: refreshing ? "Refreshing…" : pullY >= 65 ? "Release to refresh" : "Pull down"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				transform: pullY > 0 && !refreshing ? `translateY(${pullY * .15}px)` : void 0,
				transition: isPulling.current ? "none" : "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center justify-between px-5 pb-4 pt-[max(env(safe-area-inset-top),1rem)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							referrerPolicy: "no-referrer",
							src: logu_default,
							alt: "ArsMusic",
							className: "h-10 w-10 rounded-xl shadow-glow"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl font-extrabold tracking-tight text-gradient",
							children: "ArsMusic"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/profile",
							className: "h-9 w-9 overflow-hidden rounded-full shadow-glow ring-2 ring-primary/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "https://api.dicebear.com/7.x/notionists/svg?seed=ArsMusicUser",
								alt: "Profile",
								className: "h-full w-full object-cover",
								referrerPolicy: "no-referrer"
							})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "px-5 section-animate",
					style: { animationDelay: sectionDelay() },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: greeting()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-1 font-display text-3xl font-extrabold leading-tight",
						children: [
							phrase.text,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: phrase.highlight
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex gap-2 overflow-x-auto px-5 no-scrollbar section-animate",
					style: { animationDelay: sectionDelay() },
					children: [
						"All",
						"Music",
						"Playlists",
						"Podcasts",
						"New",
						"For you"
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setFilter(c),
						className: `whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${filter === c ? "bg-foreground text-background chip-active shadow-glow" : "bg-surface text-foreground hover:bg-surface-2"}`,
						children: c
					}, c))
				}),
				(filter === "All" || filter === "Music") && recent.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-7 px-5 section-animate",
					style: { animationDelay: sectionDelay() },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-3 text-base font-bold",
						children: "Jump back in"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2",
						children: recent.slice(0, 6).map((t) => {
							const isCur = current?.id === t.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => play(t, recent),
								className: "group flex items-center gap-2 overflow-hidden rounded-xl bg-surface pr-2 text-left transition-all duration-200 hover:bg-surface-2 card-interactive",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-12 w-12 shrink-0 overflow-hidden bg-surface-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FastImage, {
											src: t.thumbnail,
											alt: "",
											sizes: "48px",
											className: "h-full w-full object-cover"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "min-w-0 flex-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-xs font-semibold",
											children: t.title
										})
									}),
									isCur && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Equalizer, { active: isPlaying })
								]
							}, t.id);
						})
					})]
				}),
				(filter === "All" || filter === "For you" || filter === "Music") && personal && personal.forYou.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8 px-5 section-animate",
					style: { animationDelay: sectionDelay() },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-bold",
							children: "Made for you"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/foryou",
							className: "flex items-center text-xs font-medium text-primary hover:text-primary/80 transition-colors",
							children: ["See all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-3 overflow-x-auto no-scrollbar -mx-5 px-5 pb-2",
						children: personal.forYou.filter((s) => !isNotInterested(s.id, s.artist)).slice(0, 12).map((s) => {
							const isCur = current?.id === s.id;
							const track = songToTrack(s);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-36 shrink-0 text-left group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => play(track, personal.forYou.map(songToTrack)),
									className: "w-full text-left",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative aspect-square overflow-hidden rounded-xl bg-surface shadow-card card-interactive",
										children: [s.thumbnail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FastImage, {
											src: s.thumbnail,
											alt: "",
											sizes: "144px",
											className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-gradient-primary" }), isCur && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute inset-0 grid place-items-center bg-background/40",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Equalizer, { active: isPlaying })
										})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-start justify-between gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "line-clamp-2 text-sm font-semibold",
											children: s.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "line-clamp-1 text-xs text-muted-foreground",
											children: s.artist
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SongMenu, { track })]
								})]
							}, s.id);
						})
					})]
				}),
				(filter === "All" || filter === "For you" || filter === "Playlists") && personal && personal.dailyMixes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8 px-5 section-animate",
					style: { animationDelay: sectionDelay() },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-3 text-base font-bold",
						children: "Your daily mixes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-3 overflow-x-auto no-scrollbar -mx-5 px-5 pb-2",
						children: personal.dailyMixes.map((mix, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/mix/$id",
							params: { id: mix.id },
							className: "w-40 shrink-0 text-left group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-square overflow-hidden rounded-xl shadow-card card-interactive",
								style: { background: MIX_GRADIENTS[i % MIX_GRADIENTS.length] },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 grid grid-cols-2 gap-0.5 p-1 opacity-90",
									children: mix.songs.slice(0, 4).map((s) => s.thumbnail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FastImage, {
										src: s.thumbnail,
										alt: "",
										sizes: "80px",
										className: "h-full w-full object-cover rounded-sm"
									}, s.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-background/20 rounded-sm" }, s.id))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent p-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-sm font-extrabold text-foreground",
										children: mix.title
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-2 text-xs text-muted-foreground",
								children: mix.subtitle
							})]
						}, mix.id))
					})]
				}),
				(filter === "All" || filter === "For you" || filter === "Music") && personal && personal.radios.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8 px-5 section-animate",
					style: { animationDelay: sectionDelay() },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-3 text-base font-bold",
						children: "Stations for you"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-3 overflow-x-auto no-scrollbar -mx-5 px-5 pb-2",
						children: personal.radios.filter((r) => r.songs[0] && !isNotInterested(r.songs[0].id, r.songs[0].artist)).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => r.songs[0] && play(songToTrack(r.songs[0]), r.songs.map(songToTrack)),
							className: "w-36 shrink-0 text-left group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-square overflow-hidden rounded-xl bg-surface shadow-card card-interactive",
									children: r.songs[0]?.thumbnail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FastImage, {
										src: r.songs[0].thumbnail,
										alt: "",
										sizes: "144px",
										className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-gradient-primary" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 line-clamp-2 text-sm font-semibold",
									children: r.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "line-clamp-1 text-xs text-muted-foreground",
									children: r.subtitle
								})
							]
						}, r.id))
					})]
				}),
				(filter === "All" || filter === "For you") && personal && personal.topArtists.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8 px-5 section-animate",
					style: { animationDelay: sectionDelay() },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-3 text-base font-bold",
						children: "Your top artists"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-4 overflow-x-auto no-scrollbar -mx-5 px-5 pb-2",
						children: personal.topArtists.filter((a) => !isNotInterested(a.id || "", a.name)).map((a) => {
							const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto h-20 w-20 overflow-hidden rounded-full bg-surface ring-2 ring-primary/20 transition-all duration-300 group-hover:ring-primary/60 group-hover:shadow-glow",
								children: a.thumbnail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FastImage, {
									src: a.thumbnail,
									alt: "",
									sizes: "80px",
									className: "h-full w-full object-cover"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-full w-full place-items-center bg-gradient-primary font-display text-xl font-extrabold text-background",
									children: a.name[0]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-2 text-xs font-medium",
								children: a.name
							})] });
							return a.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/artist/$id",
								params: { id: a.id },
								className: "w-20 shrink-0 text-center block group",
								children: inner
							}, a.name) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-20 shrink-0 text-center group",
								children: inner
							}, a.name);
						})
					})]
				}),
				(filter === "All" || filter === "Music" || filter === "New" || filter === "Playlists") && personal && (data.sections.length === 0 ? filter === "All" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyHome, {}) : data.sections.map((section) => ({
					...section,
					items: section.items.filter((i) => {
						const track = itemToTrack(i);
						return !isNotInterested(track.id, track.artist);
					})
				})).filter((section) => section.items.length > 0).filter((section) => {
					if (filter === "All" || filter === "New") return true;
					if (filter === "Music") return section.items.some((i) => i.type === "song" || i.type === "video" || i.type === "album");
					if (filter === "Playlists") return section.items.some((i) => i.type === "playlist");
					return true;
				}).map((section, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8 px-5 section-animate",
					style: { animationDelay: sectionDelay() },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-3 text-base font-bold",
						children: section.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-3 overflow-x-auto no-scrollbar -mx-5 px-5 pb-2",
						children: section.items.map((item) => {
							const track = itemToTrack(item);
							const isSong = item.type === "song" || item.type === "video";
							const tile = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-square overflow-hidden rounded-xl bg-surface shadow-card card-interactive",
								children: item.thumbnail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FastImage, {
									src: item.thumbnail,
									alt: "",
									sizes: "144px",
									className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-gradient-primary" })
							}) });
							const cls = "w-36 shrink-0 text-left group";
							if (item.type === "album") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/album/$id",
								params: { id: item.id },
								className: cls,
								children: [
									tile,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 line-clamp-2 text-sm font-semibold",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "line-clamp-1 text-xs text-muted-foreground",
										children: item.subtitle
									})
								]
							}, item.id);
							if (item.type === "playlist") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/playlist/$id",
								params: { id: item.id },
								className: cls,
								children: [
									tile,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 line-clamp-2 text-sm font-semibold",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "line-clamp-1 text-xs text-muted-foreground",
										children: item.subtitle
									})
								]
							}, item.id);
							if (item.type === "artist") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/artist/$id",
								params: { id: item.id },
								className: cls,
								children: [
									tile,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 line-clamp-2 text-sm font-semibold",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "line-clamp-1 text-xs text-muted-foreground",
										children: item.subtitle
									})
								]
							}, item.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cls,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => play(track, section.items.filter((i) => i.type === "song" || i.type === "video").map(itemToTrack)),
									className: "w-full text-left",
									children: tile
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-start justify-between gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "line-clamp-2 text-sm font-semibold",
											children: item.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "line-clamp-1 text-xs text-muted-foreground",
											children: item.subtitle
										})]
									}), isSong && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SongMenu, { track })]
								})]
							}, item.id);
						})
					})]
				}, section.title + idx))),
				(filter === "All" || filter === "Music" || filter === "New") && more.data?.pages.map((page, pageIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8 px-5 section-animate",
					style: { animationDelay: "0.1s" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-3 text-base font-bold",
						children: page.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3",
						children: page.songs.filter((s) => !isNotInterested(s.id, s.artist)).map((song) => {
							const track = songToTrack(song);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 text-left group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => play(track, page.songs.map(songToTrack)),
									className: "w-full text-left",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-square overflow-hidden rounded-xl bg-surface shadow-card card-interactive",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FastImage, {
											src: song.thumbnail,
											alt: "",
											sizes: "180px",
											className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-start justify-between gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "line-clamp-2 text-sm font-semibold",
											children: song.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "line-clamp-1 text-xs text-muted-foreground",
											children: song.artist
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SongMenu, { track })]
								})]
							}, `${pageIdx}-${song.id}`);
						})
					})]
				}, `${page.title}-${pageIdx}`)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: loadMoreRef,
					className: "h-20 px-5 pt-6 text-center text-xs text-muted-foreground",
					children: more.isFetchingNextPage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-4 rounded-full border-2 border-primary border-t-transparent pull-spinner" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Loading more…" })]
					})
				})
			]
		})]
	}) });
}
function EmptyHome() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-5 mt-10 rounded-2xl border border-border bg-surface p-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold",
				children: "Loading the world's music…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Tap Search to look up any song, artist, or album. ArsMusic streams millions of tracks."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/search",
				className: "mt-4 inline-block rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground",
				children: "Open Search"
			})
		]
	});
}
//#endregion
export { Home as component };
