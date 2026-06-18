import { c as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Equalizer-DxpN0hno.js
var import_jsx_runtime = require_jsx_runtime();
function Equalizer({ active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-4 items-end gap-[2px]",
		children: [
			0,
			1,
			2
		].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `eq-bar w-[3px] rounded-sm bg-primary ${active ? "" : "opacity-40 [animation-play-state:paused]"}`,
			style: { height: "100%" }
		}, i))
	});
}
//#endregion
export { Equalizer as t };
