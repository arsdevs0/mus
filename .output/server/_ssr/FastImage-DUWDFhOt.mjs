import { c as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FastImage-DUWDFhOt.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Aggressively rewrite YouTube/Google image URLs to much smaller variants.
* - googleusercontent: =w226-h226 for tiles (was w1080-h1080) → ~90% smaller
* - i.ytimg.com: /mqdefault.jpg (320×180, ~15KB) instead of hqdefault (480×360, ~40KB)
*/
var optimizeUrl = (src, size) => {
	if (/yt3\.(googleusercontent|ggpht)\.com/.test(src)) return src.replace(/=[^/?&#]+(?=$|[?&#])/i, `=w${size}-h${size}-l90-rj`);
	if (/i\.ytimg\.com\/vi\//.test(src)) return src.replace(/\/(maxresdefault|hqdefault|sddefault|default)\.jpg/i, "/mqdefault.jpg");
	if (/lh3\.googleusercontent\.com/.test(src)) return src.replace(/=[^/?&#]+(?=$|[?&#])/i, `=w${size}-h${size}-l90-rj`);
	return src;
};
function FastImage({ src, alt = "", eager = false, sizes = "144px", className, ...props }) {
	if (!src) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: optimizeUrl(src, 226),
		srcSet: /yt3\.(googleusercontent|ggpht)\.com|i\.ytimg\.com\/vi\/|lh3\.googleusercontent\.com/.test(src) ? `${optimizeUrl(src, 120)} 120w, ${optimizeUrl(src, 226)} 226w, ${optimizeUrl(src, 320)} 320w, ${optimizeUrl(src, 480)} 480w` : void 0,
		sizes,
		alt,
		loading: eager ? "eager" : "lazy",
		decoding: "async",
		referrerPolicy: "no-referrer",
		className: `object-cover ${className ?? ""}`,
		fetchPriority: eager ? "high" : "auto",
		...props
	});
}
//#endregion
export { FastImage as t };
