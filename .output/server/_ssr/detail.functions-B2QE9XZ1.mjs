import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { i as stringType, r as objectType } from "../_libs/zod.mjs";
import { n as createSsrRpc } from "./PlayerContext-ff8Mv2tX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/detail.functions-B2QE9XZ1.js
var ytArtist = createServerFn({ method: "POST" }).inputValidator((d) => objectType({ id: stringType().min(3) }).parse(d)).handler(createSsrRpc("36397bf01a85d63285b98b825cf866f7e36954c7a1ea34f059dbc5e5bba9a776"));
var ytAlbum = createServerFn({ method: "POST" }).inputValidator((d) => objectType({ id: stringType().min(3) }).parse(d)).handler(createSsrRpc("b632ce06c8cf4c522c790d96ac8d440f73cf826076beca29186aa56d50d21988"));
var ytPlaylist = createServerFn({ method: "POST" }).validator((d) => objectType({ id: stringType().min(3) }).parse(d)).handler(createSsrRpc("484d64d242e3be1f099facadca8ad705b2185e729bcbab9ed24f0587e8a3291b"));
//#endregion
export { ytArtist as n, ytPlaylist as r, ytAlbum as t };
