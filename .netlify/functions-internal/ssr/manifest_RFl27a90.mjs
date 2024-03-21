import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_wPD_BYIJ.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
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
    isIndex: rawRouteData.isIndex
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
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"success/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/success","isIndex":false,"type":"page","pattern":"^\\/success\\/?$","segments":[[{"content":"success","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/success.astro","pathname":"/success","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/jesse/Sites/github/astro-starterkit/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/jesse/Sites/github/astro-starterkit/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/jesse/Sites/github/astro-starterkit/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/home/jesse/Sites/github/astro-starterkit/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/jesse/Sites/github/astro-starterkit/src/pages/success.astro",{"propagation":"none","containsHead":true}],["/home/jesse/Sites/github/astro-starterkit/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/jesse/Sites/github/astro-starterkit/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/jesse/Sites/github/astro-starterkit/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-manifest":"manifest_RFl27a90.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_BY7AEpj8.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_COSWVXTN.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_hANfFd9M.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_Cmk48Whj.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._CTd0jC1X.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_D1dIXE-Q.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_BNZ1jt0v.mjs","\u0000@astro-page:src/pages/success@_@astro":"chunks/success_bwE3sr0V.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DGn7SNGt.mjs","/home/jesse/Sites/github/astro-starterkit/src/content/blog/first-post.md?astroContentCollectionEntry=true":"chunks/first-post_DaBxi1Of.mjs","/home/jesse/Sites/github/astro-starterkit/src/content/blog/markdown-style-guide.md?astroContentCollectionEntry=true":"chunks/markdown-style-guide_Dyu0tHu3.mjs","/home/jesse/Sites/github/astro-starterkit/src/content/blog/second-post.md?astroContentCollectionEntry=true":"chunks/second-post_CW3ZGtBc.mjs","/home/jesse/Sites/github/astro-starterkit/src/content/blog/third-post.md?astroContentCollectionEntry=true":"chunks/third-post_CpKkABu5.mjs","/home/jesse/Sites/github/astro-starterkit/src/content/blog/using-mdx.mdx?astroContentCollectionEntry=true":"chunks/using-mdx_CZSx1o2v.mjs","/home/jesse/Sites/github/astro-starterkit/src/content/blog/first-post.md?astroPropagatedAssets":"chunks/first-post_-fst6nuh.mjs","/home/jesse/Sites/github/astro-starterkit/src/content/blog/markdown-style-guide.md?astroPropagatedAssets":"chunks/markdown-style-guide_CaP3ARZ0.mjs","/home/jesse/Sites/github/astro-starterkit/src/content/blog/second-post.md?astroPropagatedAssets":"chunks/second-post_CiT7hlru.mjs","/home/jesse/Sites/github/astro-starterkit/src/content/blog/third-post.md?astroPropagatedAssets":"chunks/third-post_CaMtbvGO.mjs","/home/jesse/Sites/github/astro-starterkit/src/content/blog/using-mdx.mdx?astroPropagatedAssets":"chunks/using-mdx_BfhWK0oM.mjs","/home/jesse/Sites/github/astro-starterkit/src/content/blog/first-post.md":"chunks/first-post_BVJWGsuy.mjs","/home/jesse/Sites/github/astro-starterkit/src/content/blog/markdown-style-guide.md":"chunks/markdown-style-guide_CHX2LHjX.mjs","/home/jesse/Sites/github/astro-starterkit/src/content/blog/second-post.md":"chunks/second-post_BOenlWqh.mjs","/home/jesse/Sites/github/astro-starterkit/src/content/blog/third-post.md":"chunks/third-post_Df2Rl-cT.mjs","/home/jesse/Sites/github/astro-starterkit/src/content/blog/using-mdx.mdx":"chunks/using-mdx_B04n3qiC.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.CYj0Nljy.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.DG017Cmo.css","/_astro/index.C01GuyUB.css","/blog-placeholder-1.jpg","/blog-placeholder-2.jpg","/blog-placeholder-3.jpg","/blog-placeholder-4.jpg","/blog-placeholder-5.jpg","/blog-placeholder-about.jpg","/favicon.svg","/new-vista-digital-starterkit.jpg","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/404.html","/about/index.html","/blog/index.html","/contact/index.html","/rss.xml","/success/index.html","/index.html"],"buildFormat":"directory"});

export { manifest };
