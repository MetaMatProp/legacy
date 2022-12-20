"use strict";(self.webpackChunkdesigned_ai=self.webpackChunkdesigned_ai||[]).push([[961],{3723:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return E},P:function(){return v},S:function(){return _},_:function(){return s},a:function(){return o},b:function(){return c},g:function(){return d},h:function(){return l}});var r=a(7294),n=(a(2369),a(5697)),i=a.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,s,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=s(e,u);return r.createElement(r.Fragment,null,r.createElement(p,o({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:l}=e,c=s(e,g);return r.createElement("img",o({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=s(e,f);const l=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(h,o({},i,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var w;h.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const b=["fallback"],v=function(e){let{fallback:t}=e,a=s(e,b);return t?r.createElement(y,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};v.displayName="Placeholder",v.propTypes={fallback:n.string,sources:null==(w=y.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(y,o({},e)),r.createElement("noscript",null,r.createElement(y,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const x=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:i().object.isRequired,alt:x},A=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],S=new Set;let k,T;const I=function(e){let{as:t="div",image:n,style:i,backgroundColor:c,className:d,class:u,onStartLoad:p,onLoad:m,onError:g}=e,f=s(e,A);const{width:h,height:y,layout:w}=n,b=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(h,y,w),{style:v,className:E}=b,x=s(b,L),C=(0,r.useRef)(),I=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(d=u);const O=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,h,y);return(0,r.useEffect)((()=>{k||(k=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return T=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void S.add(I);if(T&&S.has(I))return;let t,r;return k.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;C.current&&(C.current.innerHTML=a(o({isLoading:!0,isLoaded:S.has(I),image:n},f)),S.has(I)||(t=requestAnimationFrame((()=>{C.current&&(r=s(C.current,I,S,i,p,m,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{S.has(I)&&T&&(C.current.innerHTML=T(o({isLoading:S.has(I),isLoaded:S.has(I),image:n},f)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[n]),(0,r.createElement)(t,o({},x,{style:o({},v,i,{backgroundColor:c}),className:E+(d?" "+d:""),ref:C,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(I,e):null}));O.propTypes=C,O.displayName="GatsbyImage";const N=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],j=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),M={src:i().string.isRequired,alt:x,width:j,height:j,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},_=(P=O,function(e){let{src:t,__imageData:a,__error:n}=e,i=s(e,N);return n&&console.warn(n),a?r.createElement(P,o({image:a},i)):(console.warn("Image not loaded",t),null)});var P;_.displayName="StaticImage",_.propTypes=M},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},1746:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var r=a(7294),n=a(2788),i=a(2825),o=a(5811),s=a(3723),l=a(2986);const c=n.default.section.withConfig({displayName:"performance__StyledContactSection",componentId:"sc-1kogoz9-0"})(["display:flex;min-height:100vh;background-color:#06141c;align-items:center;"]),d=n.default.div.withConfig({displayName:"performance__StyledInnerWrapper",componentId:"sc-1kogoz9-1"})(["display:flex;max-width:1300px;width:100%;padding:120px 100px;margin:0 auto 150px auto;flex-direction:column;@media (max-width:740px){padding:100px 50px 0 50px;}@media (max-width:420px){padding:100px 30px 0 30px;}"]);var u=()=>r.createElement(c,null,r.createElement(d,null,r.createElement(l.X0,{marginBottom:"0"},"Performance"),r.createElement(l.xF,null,"For Multi-threaded CPU Computing Environment, MetaMatProp can achieve the order of faster computing speed and two~three times less memory consumption than Armadillo, Matlab, and Tensorflow."),r.createElement(s.S,{src:"../assets/performance.png",alt:"performance",placeholder:"blurred",style:{zIndex:99},__imageData:a(5580)}))),p=a(5851);const m=n.default.div.withConfig({displayName:"performance__StyledWrapper",componentId:"sc-xhrkct-0"})(["position:relative;overflow:hidden;"]),g=n.default.main.withConfig({displayName:"performance__StyledMain",componentId:"sc-xhrkct-1"})(["overflow-y:scroll;overflow-x:hidden;height:100vh;&::-webkit-scrollbar{width:4px;background-color:#06141c;}&::-webkit-scrollbar-thumb{border-radius:2px;background:#ccc;}"]);var f=()=>r.createElement(m,null,r.createElement(i.Z,{title:"Designed AI"}),r.createElement(o.Z,null),r.createElement(p.Z,null),r.createElement(g,null,r.createElement(u,null)))},5580:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABcSAAAXEgFnn9JSAAACDUlEQVQoz3VTXW/TQBDMn0f0CfFSxGPbv9AXqhaJqhRBIxFCE0EJtUzaxnXs8/fZd7d3O8iXpGoDXWmkO2t3drw7NwDAUkpu25aNMkxEbK19AmMMp2nKQgjO85zjOObd3V3e29vj/f19Pjg44J2dHZ7NZjwAgKZpoDrVH8HMHptzH8ZofJt8x8VwiOVyiSzLcHJyguPjYxweHuL8/Byj0QhCCAxU13FRlrzMhFfX8/TI64rJrO6OiO9/XfN0OuUsy7iuaw6CgK+urng4HHIYhr7WOceDnjWKImRVCWstNuHIwTmH7ehVa629yjiOEYYhFosFyrKEMQaDJEkwn89RNrUnsOS8SNVqyLKDcwzLDlopuHXDx423Y1AUhe/EazWWVsnxvUBTNOgaiaaV0GQeinrCzay34RUuoghSdf6DsQRRFaiTFllcwJGBUR1ml2PEYQjSBkT2yeKeEEopV/PIBbTRPml89ht/JnMUSYlWJFgG17g8eo+fF19B2oKI/nHCwy+DGUQGn6Zj1LKGvK8xOb3Gj89jFFGKJq9QRndIgwDpzQ2cXY3lecK1T75MJshEjjKKcRfEyLLKJ6hOw1mCahroroNSym/zWcL09APio3cQH8/giKCJoLTC7e0NNg7ol7ZMEl/cj2hjp8eP4IFw9PIFLl+/wvTtG5CU600TqqryL6hHXdeeaNuP/7PNX7m4k3IkQbyZAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/95b03404df9a3b04a8e2558a6bf8ff4f/1a387/performance.png","srcSet":"/static/95b03404df9a3b04a8e2558a6bf8ff4f/54a06/performance.png 388w,\\n/static/95b03404df9a3b04a8e2558a6bf8ff4f/a25f1/performance.png 776w,\\n/static/95b03404df9a3b04a8e2558a6bf8ff4f/1a387/performance.png 1552w","sizes":"(min-width: 1552px) 1552px, 100vw"},"sources":[{"srcSet":"/static/95b03404df9a3b04a8e2558a6bf8ff4f/5233d/performance.webp 388w,\\n/static/95b03404df9a3b04a8e2558a6bf8ff4f/378c6/performance.webp 776w,\\n/static/95b03404df9a3b04a8e2558a6bf8ff4f/4090d/performance.webp 1552w","type":"image/webp","sizes":"(min-width: 1552px) 1552px, 100vw"}]},"width":1552,"height":908}')}}]);
//# sourceMappingURL=component---src-pages-performance-tsx-28363422205089733b73.js.map