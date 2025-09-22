globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BuyTbo2t.mjs';
import { manifest } from './manifest_CQZ5aq9x.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page1 = () => import('./pages/community.astro.mjs');
const _page2 = () => import('./pages/cv.astro.mjs');
const _page3 = () => import('./pages/rss.xml.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/blog/[...slug].astro", _page0],
    ["src/pages/community.astro", _page1],
    ["src/pages/cv.astro", _page2],
    ["src/pages/rss.xml.js", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
