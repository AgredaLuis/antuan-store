import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CYpXz3cK.mjs';
import { manifest } from './manifest_Ez8HwSKR.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_slug_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.14.5_rollup@4.21.0_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/[slug].astro", _page1],
    ["src/pages/index.astro", _page2]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "fcd2f4e4-4c13-414a-bf7f-2884d9595936",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
