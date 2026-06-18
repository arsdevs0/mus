import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { i as stringType, r as objectType, t as booleanType } from "../_libs/zod.mjs";
import { n as createSsrRpc } from "./PlayerContext-ff8Mv2tX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/yt.functions-Dp9SFdb-.js
var ytHome = createServerFn({ method: "POST" }).validator((d) => objectType({ refresh: booleanType().optional() }).optional().parse(d)).handler(createSsrRpc("944f1d92a864fa4dcc375fb23241e83e356494f9dd61e9efb0dff035af53267e"));
var ytSearch = createServerFn({ method: "POST" }).inputValidator((d) => objectType({ query: stringType().min(1).max(120) }).parse(d)).handler(createSsrRpc("b32b7a2bc38062874d9f581adaa141c5ced11256f8d7baeedfe3af5edd355f08"));
createServerFn({ method: "POST" }).inputValidator((d) => objectType({ videoId: stringType().min(5) }).parse(d)).handler(createSsrRpc("803ca2a66f31db75ff1b16878077ba2612d20ed5cbe95378c9d6027dfca6baf6"));
createServerFn({ method: "POST" }).inputValidator((d) => objectType({ videoId: stringType().min(5) }).parse(d)).handler(createSsrRpc("1b639f0b073019858c4e6722dd640b44b24b3f504de42ac93a7c4be689b82822"));
createServerFn({ method: "POST" }).inputValidator((d) => objectType({ query: stringType().min(1).max(80) }).parse(d)).handler(createSsrRpc("e122c249daa4ed51794f8ad3b3ac2721a46725beeefe7e448e05b88afe3f2288"));
//#endregion
export { ytSearch as n, ytHome as t };
