import { i as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, s as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as usePlayer } from "./PlayerContext-ff8Mv2tX.mjs";
import { B as Bell, E as Info, I as ChevronRight, N as CircleQuestionMark, O as Heart, b as Music, d as Shield, f as Share2, j as Download, p as Settings, t as X, y as Palette } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Bga9_FYu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-CRmNVO71.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Profile() {
	const { liked, history, minutesListened, downloads } = usePlayer();
	const [activeSheet, setActiveSheet] = (0, import_react.useState)(null);
	const navigate = useNavigate();
	const downloadCount = Object.values(downloads).filter((d) => d.status === "completed").length;
	const items = [
		{
			icon: Heart,
			label: "Liked songs",
			value: Object.keys(liked).length,
			action: () => setActiveSheet("liked")
		},
		{
			icon: Download,
			label: "Downloads",
			value: downloadCount,
			action: () => navigate({ to: "/downloads" })
		},
		{
			icon: Share2,
			label: "Invite a friend",
			action: () => {
				if (navigator.share) navigator.share({
					title: "ArsMusic",
					text: "Check out ArsMusic — stream millions of songs for free!",
					url: window.location.origin
				}).catch(() => {});
				else {
					navigator.clipboard?.writeText(window.location.origin);
					alert("Link copied to clipboard!");
				}
			}
		},
		{
			icon: Settings,
			label: "Settings",
			action: () => setActiveSheet("settings")
		},
		{
			icon: Info,
			label: "About ArsMusic",
			action: () => setActiveSheet("about")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "px-5 pb-3 pt-[max(env(safe-area-inset-top),1rem)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-extrabold",
				children: "Profile"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-surface p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-16 w-16 overflow-hidden rounded-full bg-surface-2 shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "https://api.dicebear.com/7.x/notionists/svg?seed=ArsMusicUser",
							alt: "Avatar",
							className: "h-full w-full object-cover",
							referrerPolicy: "no-referrer"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl font-extrabold",
						children: "ArsMusic Listener"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Free Plan · since 2026"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid grid-cols-3 gap-3 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							value: String(minutesListened),
							label: "min"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							value: String(history.length),
							label: "plays"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							value: String(Object.keys(liked).length),
							label: "liked"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-6 px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "overflow-hidden rounded-2xl bg-surface",
				children: items.map(({ icon: Icon, label, value, action }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: action,
					className: "flex w-full items-center gap-3 px-4 py-3.5 text-left hover:bg-surface-2 transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1 text-sm font-medium",
							children: label
						}),
						typeof value === "number" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-muted-foreground" })
					]
				}) }, label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6 px-5 pb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-center text-[11px] text-muted-foreground",
				children: "ArsMusic — Your A to Z music streaming experience."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-center text-[11px] text-muted-foreground",
				children: [
					"Developer",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.instagram.com/arsdevs",
						target: "_blank",
						rel: "noreferrer noopener",
						className: "font-semibold text-primary underline-offset-2 hover:underline",
						children: "@arsdevs"
					})
				]
			})]
		}),
		activeSheet && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-50 bg-background/60 backdrop-blur-sm",
			onClick: () => setActiveSheet(null)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-x-0 bottom-0 z-50 mx-auto max-w-md animate-in slide-in-from-bottom duration-200",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-h-[70vh] overflow-y-auto rounded-t-3xl border-t border-border bg-surface p-5 pb-[max(env(safe-area-inset-bottom),1.5rem)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-lg font-bold",
							children: [
								activeSheet === "about" && "About ArsMusic",
								activeSheet === "settings" && "Settings",
								activeSheet === "liked" && "Liked Songs"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveSheet(null),
							className: "grid h-8 w-8 place-items-center rounded-full bg-surface-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}),
					activeSheet === "about" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									referrerPolicy: "no-referrer",
									src: "/assets/logu-B3ZAlov6.png",
									alt: "ArsMusic",
									className: "h-14 w-14 rounded-2xl shadow-glow"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl font-extrabold text-gradient",
									children: "ArsMusic"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Version 1.0.0"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: "ArsMusic is a premium, independent music streaming application designed to deliver the best listening experience. Stream millions of songs, discover new artists, create playlists, and enjoy your music offline — all for free."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "h-4 w-4 text-primary" }), " Millions of songs available"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4 text-primary" }), " Offline downloads"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-4 w-4 text-primary" }), " No ads, ever"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 text-primary" }), " Personalized recommendations"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground pt-2",
								children: ["Developed with ❤️ by ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.instagram.com/arsdevs",
									target: "_blank",
									rel: "noreferrer",
									className: "text-primary font-semibold",
									children: "@arsdevs"
								})]
							})
						]
					}),
					activeSheet === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-surface-2 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "h-5 w-5 text-muted-foreground" }),
									" Appearance",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-auto text-xs text-muted-foreground",
										children: "Dark"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-surface-2 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "h-5 w-5 text-muted-foreground" }),
									" Audio Quality",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-auto text-xs text-primary font-semibold",
										children: "Highest"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-surface-2 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-5 w-5 text-muted-foreground" }),
									" Notifications",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-auto text-xs text-muted-foreground",
										children: "On"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-surface-2 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-5 w-5 text-muted-foreground" }),
									" Download Quality",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-auto text-xs text-primary font-semibold",
										children: "Highest"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-surface-2 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-5 w-5 text-muted-foreground" }), " Privacy"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-surface-2 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-5 w-5 text-muted-foreground" }), " Help & Feedback"]
							})
						]
					}),
					activeSheet === "liked" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: Object.values(liked).length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-6 text-center text-sm text-muted-foreground",
						children: "No liked songs yet. Tap the heart on any song!"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1",
						children: Object.values(liked).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 rounded-xl p-2 hover:bg-surface-2 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-10 w-10 shrink-0 overflow-hidden rounded-md bg-surface-2",
								children: t.thumbnail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: t.thumbnail,
									alt: "",
									className: "h-full w-full object-cover",
									referrerPolicy: "no-referrer"
								})
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
						}, t.id))
					}) })
				]
			})
		})] })
	] });
}
function Mini({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface-2 px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg font-extrabold leading-none",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[10px] uppercase tracking-wide text-muted-foreground",
			children: label
		})]
	});
}
//#endregion
export { Profile as component };
