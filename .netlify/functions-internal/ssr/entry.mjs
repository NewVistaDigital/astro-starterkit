import { renderers } from './renderers.mjs';
import { manifest } from './manifest_RFl27a90.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BY7AEpj8.mjs');
const _page1 = () => import('./chunks/404_COSWVXTN.mjs');
const _page2 = () => import('./chunks/about_hANfFd9M.mjs');
const _page3 = () => import('./chunks/index_Cmk48Whj.mjs');
const _page4 = () => import('./chunks/_.._CTd0jC1X.mjs');
const _page5 = () => import('./chunks/contact_D1dIXE-Q.mjs');
const _page6 = () => import('./chunks/rss_BNZ1jt0v.mjs');
const _page7 = () => import('./chunks/success_bwE3sr0V.mjs');
const _page8 = () => import('./chunks/index_DGn7SNGt.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/blog/[...slug].astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/rss.xml.js", _page6],
    ["src/pages/success.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "e1e76bf2-9223-4118-8237-e6f73b81c11c"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
