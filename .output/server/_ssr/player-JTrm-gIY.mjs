import { i as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, s as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as usePlayer } from "./PlayerContext-ff8Mv2tX.mjs";
import { t as FastImage } from "./FastImage-DUWDFhOt.mjs";
import { O as Heart, P as CircleCheck, R as ChevronDown, S as LoaderCircle, _ as Play, c as SkipForward, f as Share2, h as Repeat, j as Download, l as SkipBack, n as VolumeX, r as Volume2, s as TextAlignStart, t as X, u as Shuffle, v as Pause, x as Moon } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/player-JTrm-gIY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Button variant for triggering download */
function DownloadButton({ status, progress = 0, onClick, className = "" }) {
	const ringSize = 24;
	const strokeWidth = 2.5;
	const radius = (ringSize - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - progress / 100 * circumference;
	if (status === "completed") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: `flex items-center gap-1.5 text-primary hover:text-foreground ${className}`,
		title: "Downloaded — tap to remove",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), " Downloaded"]
	});
	if (status === "downloading") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: `relative inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground ${className}`,
		title: "Downloading — tap to cancel",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "relative inline-flex items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					width: ringSize,
					height: ringSize,
					viewBox: `0 0 ${ringSize} ${ringSize}`,
					className: "rotate-[-90deg]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: ringSize / 2,
						cy: ringSize / 2,
						r: radius,
						fill: "none",
						stroke: "currentColor",
						strokeWidth,
						className: "text-surface-2 opacity-40"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: ringSize / 2,
						cy: ringSize / 2,
						r: radius,
						fill: "none",
						stroke: "currentColor",
						strokeWidth,
						strokeDasharray: circumference,
						strokeDashoffset: offset,
						strokeLinecap: "round",
						className: "text-primary transition-[stroke-dashoffset] duration-300"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "absolute h-3 w-3 animate-spin text-primary" })]
			}),
			progress,
			"%"
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: `flex items-center gap-1.5 hover:text-foreground ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download"]
	});
}
function fmt(s) {
	if (!isFinite(s) || s < 0) return "0:00";
	return `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, "0")}`;
}
var SLEEP_OPTIONS = [
	{
		label: "5 min",
		minutes: 5
	},
	{
		label: "15 min",
		minutes: 15
	},
	{
		label: "30 min",
		minutes: 30
	},
	{
		label: "45 min",
		minutes: 45
	},
	{
		label: "1 hour",
		minutes: 60
	},
	{
		label: "2 hours",
		minutes: 120
	}
];
function Player() {
	const router = useRouter();
	const { current, isPlaying, loading, position, duration, toggle, next, prev, seek, toggleLike, isLiked, error, upNext, play, loopMode, toggleLoop, sleepTimer, setSleepTimer, downloads, downloadTrack, removeDownload, clear, volume, setVolume } = usePlayer();
	const [sleepOpen, setSleepOpen] = (0, import_react.useState)(false);
	if (!current) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center px-6 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Nothing's playing yet."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => router.history.back(),
			className: "mt-4 rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground",
			children: "Go back"
		})] })
	});
	const sleepMinsLeft = sleepTimer ? Math.max(0, Math.round((sleepTimer - Date.now()) / 6e4)) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden",
		style: { background: current.thumbnail ? `linear-gradient(180deg, color-mix(in oklab, var(--background) 30%, transparent), var(--background) 70%), url(${current.thumbnail}) center/cover` : void 0 },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 backdrop-blur-2xl bg-background/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex min-h-screen flex-col px-6 pb-10 pt-[max(env(safe-area-inset-top),1rem)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "flex items-center justify-between",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => router.history.back(),
								"aria-label": "Close",
								className: "grid h-9 w-9 place-items-center rounded-full bg-surface/60",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] uppercase tracking-widest text-muted-foreground",
									children: "Playing from"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: "ArsMusic"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSleepOpen(true),
									"aria-label": "Sleep Timer",
									className: `relative grid h-9 w-9 place-items-center rounded-full bg-surface/60 ${sleepTimer ? "text-primary" : ""}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-5 w-5" }), sleepTimer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "absolute -bottom-1 left-1/2 -translate-x-1/2 text-[8px] font-bold text-primary",
										children: [sleepMinsLeft, "m"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										clear();
										router.history.back();
									},
									"aria-label": "Cancel Playback",
									className: "grid h-9 w-9 place-items-center rounded-full bg-surface/60 hover:bg-destructive/20 hover:text-destructive transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-square w-full max-w-xs overflow-hidden rounded-3xl bg-surface shadow-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FastImage, {
								src: current.thumbnail,
								alt: "",
								eager: true,
								sizes: "320px",
								className: "h-full w-full object-cover"
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "truncate font-display text-2xl font-extrabold",
								children: current.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm text-muted-foreground",
								children: current.artist
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => toggleLike(),
							"aria-label": "Like",
							className: "shrink-0 p-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-7 w-7 ${isLiked(current.id) ? "fill-primary text-primary" : "text-muted-foreground"}` })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 0,
							max: duration || 0,
							step: .1,
							value: position,
							onChange: (e) => seek(Number(e.target.value)),
							className: "w-full accent-[var(--primary)]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex justify-between text-[11px] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: fmt(position) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["-", fmt((duration || 0) - position)] })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center justify-between",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Shuffle",
								className: "text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: prev,
								"aria-label": "Previous",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipBack, { className: "h-7 w-7 fill-foreground" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: toggle,
								"aria-label": isPlaying ? "Pause" : "Play",
								className: "grid h-16 w-16 place-items-center rounded-full bg-foreground text-background shadow-glow",
								children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin" }) : isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-7 w-7" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-7 w-7 translate-x-[2px]" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: next,
								"aria-label": "Next",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipForward, { className: "h-7 w-7 fill-foreground" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: toggleLoop,
								"aria-label": "Repeat",
								className: `relative ${loopMode !== "off" ? "text-primary" : "text-muted-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat, { className: "h-5 w-5" }), loopMode === "one" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-[9px] font-extrabold",
									children: "1"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setVolume(volume === 0 ? 1 : 0),
							className: "text-muted-foreground",
							children: volume === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 0,
							max: 1,
							step: .01,
							value: volume,
							onChange: (e) => setVolume(Number(e.target.value)),
							className: "h-1 w-full flex-1 appearance-none rounded-full bg-surface-2 accent-primary",
							style: { background: `linear-gradient(to right, var(--primary) ${volume * 100}%, var(--surface-2) ${volume * 100}%)` }
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex justify-around text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadButton, {
								status: downloads[current.id]?.status || "idle",
								progress: downloads[current.id]?.progress || 0,
								onClick: () => {
									if (downloads[current.id]?.status === "completed") removeDownload(current.id);
									else if (downloads[current.id]?.status !== "downloading") downloadTrack(current);
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									if (navigator.share) navigator.share({
										title: current.title,
										text: `Listen to ${current.title} by ${current.artist} on ArsMusic`,
										url: window.location.href
									}).catch(() => {});
									else navigator.clipboard?.writeText(window.location.href);
								},
								className: "flex items-center gap-1.5 hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4" }), " Share"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => alert("Lyrics are not available for this track."),
								className: "flex items-center gap-1.5 hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAlignStart, { className: "h-4 w-4" }), " Lyrics"]
							})
						]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 rounded-xl bg-destructive/20 p-3 text-center text-xs text-destructive-foreground",
						children: error
					}),
					upNext.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-8 pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-3 text-sm font-bold",
							children: "Up next"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-1",
							children: upNext.slice(0, 10).map((track) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => play(track),
								className: "flex w-full items-center gap-3 rounded-xl p-2 text-left hover:bg-surface/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-11 w-11 shrink-0 overflow-hidden rounded-md bg-surface",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FastImage, {
										src: track.thumbnail,
										alt: "",
										sizes: "44px",
										className: "h-full w-full object-cover"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-semibold",
										children: track.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-xs text-muted-foreground",
										children: track.artist
									})]
								})]
							}) }, track.id))
						})]
					})
				]
			}),
			sleepOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 bg-background/60 backdrop-blur-sm",
				onClick: () => setSleepOpen(false)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-50 mx-auto max-w-md animate-in slide-in-from-bottom duration-200",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-t-3xl border-t border-border bg-surface p-5 pb-[max(env(safe-area-inset-bottom),1.5rem)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold",
								children: "Sleep Timer"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSleepOpen(false),
							className: "grid h-8 w-8 place-items-center rounded-full bg-surface-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}), sleepTimer ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Timer active — pausing in"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 font-display text-3xl font-extrabold text-primary",
								children: [sleepMinsLeft, " min"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setSleepTimer(null);
									setSleepOpen(false);
								},
								className: "mt-4 w-full rounded-full bg-destructive py-3 text-sm font-bold text-destructive-foreground",
								children: "Cancel Timer"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2",
						children: SLEEP_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setSleepTimer(Date.now() + opt.minutes * 6e4);
								setSleepOpen(false);
							},
							className: "rounded-xl bg-surface-2 py-3.5 text-sm font-semibold transition hover:bg-primary hover:text-primary-foreground",
							children: opt.label
						}, opt.minutes))
					})]
				})
			})] })
		]
	});
}
//#endregion
export { Player as component };
