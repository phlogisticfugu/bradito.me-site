globalThis.process ??= {}; globalThis.process.env ??= {};
import { D as decodeKey } from './chunks/astro/server_C5Pmhlr9.mjs';
import './chunks/astro-designed-error-pages_C9vQTu5M.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_C4eGiAtK.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/bradito/git/bradito.me-site/","cacheDir":"file:///Users/bradito/git/bradito.me-site/node_modules/.astro/","outDir":"file:///Users/bradito/git/bradito.me-site/dist/","srcDir":"file:///Users/bradito/git/bradito.me-site/src/","publicDir":"file:///Users/bradito/git/bradito.me-site/public/","buildClientDir":"file:///Users/bradito/git/bradito.me-site/dist/","buildServerDir":"file:///Users/bradito/git/bradito.me-site/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"community/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/community","isIndex":false,"type":"page","pattern":"^\\/community\\/?$","segments":[[{"content":"community","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/community.astro","pathname":"/community","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"cv/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cv","isIndex":false,"type":"page","pattern":"^\\/cv\\/?$","segments":[[{"content":"cv","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cv.astro","pathname":"/cv","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://bradito.me","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/bradito/git/bradito.me-site/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/bradito/git/bradito.me-site/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/bradito/git/bradito.me-site/src/pages/community.astro",{"propagation":"none","containsHead":true}],["/Users/bradito/git/bradito.me-site/src/pages/cv.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/bradito/git/bradito.me-site/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/community@_@astro":"pages/community.astro.mjs","\u0000@astro-page:src/pages/cv@_@astro":"pages/cv.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CQZ5aq9x.mjs","/Users/bradito/git/bradito.me-site/node_modules/.pnpm/unstorage@1.17.1/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/Users/bradito/git/bradito.me-site/.astro/content-assets.mjs":"chunks/content-assets_XqCgPAV2.mjs","/Users/bradito/git/bradito.me-site/.astro/content-modules.mjs":"chunks/content-modules_Bvq7llv8.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CPzh9DV6.mjs","/Users/bradito/git/bradito.me-site/node_modules/.pnpm/astro@5.13.10_@types+node@24.5.2_rollup@4.52.0_typescript@5.9.2/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DTfSpRPl.mjs","/Users/bradito/git/bradito.me-site/node_modules/.pnpm/astro@5.13.10_@types+node@24.5.2_rollup@4.52.0_typescript@5.9.2/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.B3vRBseb.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/apple-touch-icon-precomposed.png","/safari-pinned-tab.svg","/favicon.ico","/favicon-16x16.png","/favicon-32x32.png","/favicon-48x48.png","/favicon.svg","/mstile-70x70.png","/mstile-144x144.png","/mstile-150x150.png","/mstile-310x150.png","/mstile-310x310.png","/yandex-browser-50x50.png","/manifest.webmanifest","/browserconfig.xml","/yandex-browser-manifest.json","/0001-phlogistic-llm-map.png","/0002-gareth-davies-EGcfyDiUv58-unsplash.jpg","/0002-parallel-parrot-1.drawio.png","/0002-parallel-parrot-2.drawio.png","/0002-parallel-parrot-3.drawio.png","/0002-parallel-parrot-4.drawio.png","/0003-adam-winger-GIFlfKX23rc-unsplash.jpg","/0003-reverse-pareto-1.png","/0003-reverse-pareto-2.png","/0004-jeopardize-rag-1.drawio.png","/0004-jeopardize-rag-2.drawio.png","/0004-jeopardize-rag-3.drawio.png","/0004-jon-tyson-hhq1Lxtuwd8-unsplash.jpg","/blog-placeholder-1.jpg","/blog-placeholder-2.jpg","/blog-placeholder-3.jpg","/blog-placeholder-4.jpg","/blog-placeholder-5.jpg","/blog-placeholder-about.jpg","/favicon-dark.ico","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.B3vRBseb.js","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/_noop-actions.mjs","/_worker.js/android-chrome-192x192.png","/_worker.js/android-chrome-512x512.png","/_worker.js/apple-touch-icon-precomposed.png","/_worker.js/apple-touch-icon.png","/_worker.js/browserconfig.xml","/_worker.js/favicon-16x16.png","/_worker.js/favicon-32x32.png","/_worker.js/favicon-48x48.png","/_worker.js/favicon.ico","/_worker.js/favicon.svg","/_worker.js/index.js","/_worker.js/manifest.webmanifest","/_worker.js/mstile-144x144.png","/_worker.js/mstile-150x150.png","/_worker.js/mstile-310x150.png","/_worker.js/mstile-310x310.png","/_worker.js/mstile-70x70.png","/_worker.js/renderers.mjs","/_worker.js/safari-pinned-tab.svg","/_worker.js/yandex-browser-50x50.png","/_worker.js/yandex-browser-manifest.json","/_worker.js/chunks/ClientRouter_D05vXnZa.mjs","/_worker.js/chunks/Footer_hopKuJv4.mjs","/_worker.js/chunks/MainPage_CCxt_aYi.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_BuyTbo2t.mjs","/_worker.js/chunks/_astro_assets_pWRC1TCl.mjs","/_worker.js/chunks/_astro_content_TZD1jqi-.mjs","/_worker.js/chunks/_astro_data-layer-content_CPzh9DV6.mjs","/_worker.js/chunks/astro-designed-error-pages_C9vQTu5M.mjs","/_worker.js/chunks/astro_CL7DVWhl.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/consts_8S_8Ml8G.mjs","/_worker.js/chunks/content-assets_XqCgPAV2.mjs","/_worker.js/chunks/content-modules_Bvq7llv8.mjs","/_worker.js/chunks/index_CQD-eEkW.mjs","/_worker.js/chunks/noop-middleware_C4eGiAtK.mjs","/_worker.js/chunks/parse_yL_293SP.mjs","/_worker.js/chunks/path_C0V2xYQr.mjs","/_worker.js/chunks/sharp_DTfSpRPl.mjs","/_worker.js/pages/community.astro.mjs","/_worker.js/pages/cv.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/rss.xml.astro.mjs","/_worker.js/chunks/astro/server_C5Pmhlr9.mjs","/_worker.js/pages/blog/_---slug_.astro.mjs","/community/index.html","/cv/index.html","/rss.xml","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"vhhLFuAkNz8NILkEvVQSS90x+w1JCNmOKF0pC1JH6Z0=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
